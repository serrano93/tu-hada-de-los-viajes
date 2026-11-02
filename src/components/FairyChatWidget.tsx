import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MessageCircle, RotateCcw, X, ArrowRight } from 'lucide-react';
import { FairyMascot } from './FairyMascot';

/**
 * Chat de Lumi, el hada de Tu Hada de los Viajes.
 * Réplica del widget de Carlos (automatizes): mismo n8n autoalojado detrás del túnel de Cloudflare,
 * misma cabecera X-Instance-Id, mismo comprobador /api/chat-status y mismo modo "sin batería".
 * Solo cambia el webhook (workflow propio del hada) y el prompt (docs/HADA_PROMPT.md).
 */
const N8N_BASE = 'https://criteria-scsi-breathing-gauge.trycloudflare.com';
const WEBHOOK_URL = `${N8N_BASE}/webhook/tuhada-chat-demo/chat`;
const N8N_INSTANCE_ID = '2cb719940687119f8b2d591e8fb676940ae47c555d747bfa1016a777e55ed17e';
const WHATSAPP_URL = 'https://wa.me/34675452831';

interface ChatMessage {
  role: 'assistant' | 'user';
  text: string;
}

const WELCOME: ChatMessage = {
  role: 'assistant',
  text: '¡Holiii, viajerito! ✨ Soy Lumi, el hada de Tu Hada de los Viajes 🧚‍♀️\n\nEsta demo va en tiempo real: me estás hablando de verdad.\n\n¿Te ayudo con dudas de destino, cuándo viajar, cuánto puede costar o cómo trabaja Andrea? Estoy ilusion-hada de ayudarte ✨',
};

const QUICK_PROMPTS = ['¿Qué destinos diseñáis?', '¿Cuándo es mejor viajar?', '¿Cómo funciona el servicio?'];

const newSessionId = () => 'web-session-' + Math.random().toString(36).substring(2, 10);

/** Escapa TODO el HTML del modelo y reintroduce solo formato controlado (negritas, viñetas, enlaces https). */
function formatMessage(text: string): string {
  if (!text) return '';
  let html = String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/^[*-]\s(.*)$/gm, '<span>•&nbsp;$1</span>');
  html = html.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="underline font-bold text-terracotta hover:text-terracotta-hover">$1</a>',
  );
  return html;
}

export const FairyChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [bubble, setBubble] = useState(false);
  const [online, setOnline] = useState<boolean | null>(null); // null = sin comprobar
  const [checking, setChecking] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [sessionId, setSessionId] = useState(newSessionId);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const boxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const openRef = useRef(open);
  openRef.current = open;

  const checkStatus = useCallback(async (): Promise<boolean | null> => {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 5000);
    let result: boolean | null = null;
    try {
      const r = await fetch('/api/chat-status', { signal: ctrl.signal, cache: 'no-store' });
      if (!r.ok) throw new Error('status ' + r.status);
      const d = await r.json();
      result = d.online === true;
    } catch {
      // Si ni siquiera responde el comprobador (p. ej. en local), no bloqueamos el chat.
      result = null;
    } finally {
      clearTimeout(timer);
    }
    setOnline(result);
    return result;
  }, []);

  const closeBubble = useCallback(() => {
    setBubble(false);
    try { sessionStorage.setItem('hadaBubbleSeen', '1'); } catch { /* sin storage */ }
  }, []);

  // Bocadillo: aparece a los pocos segundos, una vez por sesión, y solo si el servidor está disponible.
  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem('hadaBubbleSeen') === '1'; } catch { /* sin storage */ }
    const t0 = Date.now();
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    checkStatus().then((res) => {
      const wait = Math.max(0, 3500 - (Date.now() - t0));
      t1 = setTimeout(() => {
        if (!seen && !openRef.current && res !== false) {
          setBubble(true);
          t2 = setTimeout(closeBubble, 9000);
        }
      }, wait);
    });
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [checkStatus, closeBubble]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [messages, loading, open, online]);

  const toggleChat = () => {
    if (bubble) closeBubble();
    setOpen((v) => !v);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const resetChat = () => {
    setSessionId(newSessionId());
    setMessages([{ role: 'assistant', text: '¡Otra vez por aquí! Estoy encant-hada de verte ✨ ¿Qué otro viajecito soñamos juntos?' }]);
  };

  const retry = async () => {
    if (checking) return;
    setChecking(true);
    const res = await checkStatus();
    setChecking(false);
    if (res !== false) {
      setMessages((m) => [...m, { role: 'assistant', text: '✨ ¡Mi varita ya tiene energía otra vez, qué alivio! ¿Por dónde íbamos?' }]);
    }
  };

  const goToWorkshop = () => {
    setOpen(false);
    document.getElementById('taller-hada')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const sendMessage = async (override?: string) => {
    const userText = (override ?? input).trim();
    if (!userText || loading || online === false) return;

    setMessages((m) => [...m, { role: 'user', text: userText }]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'X-Instance-Id': N8N_INSTANCE_ID,
        },
        body: JSON.stringify({ action: 'sendMessage', sessionId, chatInput: userText }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();
      let reply = '';
      if (Array.isArray(data) && data[0]?.output) reply = data[0].output;
      else if (data?.output) reply = data.output;
      else if (data?.text) reply = data.text;
      else if (typeof data === 'string') reply = data;
      else reply = 'He recibido tu consulta. Para verlo en detalle, cuéntale tu viaje a Andrea desde el Taller del Hada o por WhatsApp.';

      setMessages((m) => [...m, { role: 'assistant', text: reply }]);
    } catch (err) {
      console.error('[Fairy Chat Widget Error]:', err);
      setOnline(false); // modo "sin batería": tarjeta con alternativas y botón de reintento
    } finally {
      setLoading(false);
    }
  };

  const offline = online === false;

  return (
    <div className="fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-50">
      {/* Ventana de chat */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat con Lumi, el hada de Tu Hada de los Viajes"
          className="fixed bottom-48 sm:bottom-36 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[400px] h-[600px] max-h-[calc(100dvh-12rem)] flex flex-col overflow-hidden z-50 rounded-3xl bg-white text-ink shadow-editorial-lg ring-1 ring-ink/10 font-sans"
        >
          <div className="flex items-center gap-2.5 pl-4 pr-3 py-3.5 bg-gradient-to-br from-sage to-sage-dark text-sand">
            <div className="w-11 h-11 rounded-2xl bg-sand grid place-items-center overflow-hidden flex-none">
              <FairyMascot size={32} uid="head" animate={false} className="mt-1" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-serif font-semibold text-xl leading-tight flex items-center gap-2">
                Lumi
                <span className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full ${offline ? 'bg-sand/20 text-sand/80' : 'bg-gold/30 text-gold-light'}`}>
                  {offline ? 'Dormida' : 'Online'}
                </span>
              </div>
              <div className="text-xs opacity-85">Tu hada de viajes · By Andrea</div>
            </div>
            <button type="button" onClick={resetChat} title="Reiniciar conversación" aria-label="Reiniciar conversación"
              className="w-9 h-9 rounded-full grid place-items-center bg-sand/15 hover:bg-sand/30 transition-colors flex-none">
              <RotateCcw className="w-4 h-4" strokeWidth={2} />
            </button>
            <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar chat"
              className="w-9 h-9 rounded-full grid place-items-center bg-sand/15 hover:bg-sand/30 transition-colors flex-none">
              <X className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>
          <div className="px-4 py-1.5 text-xs text-ink-muted bg-limestone/60 border-b border-limestone">
            Demo en vivo · no compartas datos personales sensibles
          </div>

          <div ref={boxRef} aria-live="polite" className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-sand">
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className={`max-w-[88%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-sage text-sand rounded-br-md'
                      : 'bg-white text-ink rounded-bl-md shadow-sm'
                  }`}
                >
                  <div
                    style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}
                    dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                  />
                </div>
                <span className="text-[11px] text-ink-muted/80 mx-1.5 mt-0.5">{msg.role === 'user' ? 'Tú' : 'Lumi'}</span>
              </div>
            ))}

            {loading && (
              <div className="self-start max-w-[88%] px-3.5 py-2.5 rounded-2xl rounded-bl-md bg-white text-sm shadow-sm">
                Lumi está agitando su varita… ✨ <span className="font-extrabold tracking-[3px]">···</span>
              </div>
            )}

            {offline && (
              <div role="status" className="grid gap-2.5 rounded-2xl bg-gold-light/40 text-ink p-4 text-sm">
                <strong>🌙 Lumi se ha quedado dormida</strong>
                <p className="m-0">Mi varita (el servidor) está desconectada ahora mismo, pero tu viaje no tiene por qué esperar:</p>
                <button type="button" onClick={goToWorkshop}
                  className="min-h-[44px] rounded-full bg-terracotta hover:bg-terracotta-hover text-sand font-semibold text-[15px] flex items-center justify-center gap-2">
                  Diseñar mi ruta con Andrea <ArrowRight className="w-4 h-4" />
                </button>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="min-h-[44px] rounded-full border border-sage text-sage-dark font-semibold text-[15px] flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" /> Escribir a Andrea por WhatsApp
                </a>
                <button type="button" onClick={retry} disabled={checking} className="font-mono text-[13px] font-bold text-sage-dark">
                  {checking ? 'Comprobando…' : '↻ Reintentar'}
                </button>
              </div>
            )}
          </div>

          {messages.length <= 2 && !loading && !offline && (
            <div className="flex flex-wrap gap-2 px-3.5 py-2.5 bg-white border-t border-limestone">
              {QUICK_PROMPTS.map((q) => (
                <button key={q} type="button" onClick={() => sendMessage(q)}
                  className="min-h-[38px] px-3.5 rounded-full text-[13px] font-medium border border-sage-mist/60 text-sage-dark hover:bg-limestone transition-colors">
                  {q}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex gap-2 p-3 bg-white border-t border-limestone">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading || offline}
              maxLength={500}
              aria-label="Tu mensaje"
              placeholder={offline ? 'Lumi está recargando magia…' : 'Pregunta a Lumi por tu viaje…'}
              className="flex-1 min-w-0 rounded-full border border-sage-mist/60 bg-sand px-4 py-2.5 text-[15px] outline-none focus:border-sage focus:ring-2 focus:ring-sage/30 disabled:opacity-60"
            />
            <button type="submit" disabled={loading || offline || !input.trim()} aria-label="Enviar mensaje"
              className="w-12 h-12 rounded-full bg-terracotta hover:bg-terracotta-hover text-sand grid place-items-center flex-none transition-transform hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100">
              <ArrowRight className="w-[18px] h-[18px]" strokeWidth={2.4} />
            </button>
          </form>
        </div>
      )}

      {/* Bocadillo */}
      {bubble && !open && (
        <div role="status" className="fairy-bubble bubble-in absolute bottom-full right-1 mb-2 w-[230px] sm:w-[250px] origin-bottom-right">
          <button type="button" onClick={toggleChat} className="block w-full text-left cursor-pointer" aria-label="Abrir el chat con Lumi">
            <span className="block font-serif font-bold text-lg leading-snug">¡Holiii! Soy Lumi ✨</span>
            <span className="block text-[13px] leading-snug mt-0.5 font-semibold">¿Dudas de tu próximo viajecito? ¡Pregúntame!</span>
          </button>
          <button type="button" onClick={closeBubble} aria-label="Cerrar mensaje"
            className="absolute top-1.5 right-2 w-[22px] h-[22px] rounded-full text-[11px] font-extrabold leading-none text-ink-muted bg-limestone hover:bg-sage-mist/50">
            ✕
          </button>
        </div>
      )}

      {/* Mascota lanzadora */}
      <button
        type="button"
        onClick={toggleChat}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Abrir el chat con Lumi, el hada de viajes"
        title={offline ? 'Lumi está dormida ahora mismo' : 'Habla con Lumi'}
        className="group relative block rounded-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-sage/60"
      >
        {!open && (
          <span aria-hidden="true" className={`absolute top-3 right-2 z-10 w-3.5 h-3.5 rounded-full border-2 border-white ${offline ? 'bg-slate-400' : 'bg-emerald-400'}`} />
        )}
        <span className="block transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-3 group-active:scale-95">
          <FairyMascot size={78} uid="launcher" sleepy={offline} />
        </span>
      </button>
    </div>
  );
};

export default FairyChatWidget;
