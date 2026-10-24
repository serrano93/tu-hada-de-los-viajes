import React, { useEffect, useRef, useState } from 'react';
import {
  Headphones,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Sparkles,
  ShieldCheck,
  Check,
  X,
  AlertTriangle,
  Smartphone,
  CloudRain,
  MapPin,
} from 'lucide-react';
import {
  AUDIO_PILLS,
  AudioPill,
  HONESTY_COMPARISON,
  SURVIVAL_KIT_CARDS,
} from '../data/travelData';

function formatTime(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export const GuideSealSection: React.FC = () => {
  // Module 1: Audio Pill Player State
  const [activePill, setActivePill] = useState<AudioPill>(AUDIO_PILLS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [elapsedSec, setElapsedSec] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Module 2: Radical Honesty Switcher State
  const [selectedColumn, setSelectedColumn] = useState<'andrea' | 'agency' | 'influencer'>(
    'andrea'
  );

  // Subtle Web Audio API gentle ambient chime when pressing Play
  const triggerGentleChime = () => {
    if (!soundEnabled) return;
    try {
      const AudioContextClass =
        window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(528, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + 0.35);
      gain.gain.setValueAtTime(0.035, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.55);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    } catch {
      // Ignore if browser blocks audio context
    }
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setElapsedSec((prev) => {
        if (prev + 1 >= activePill.durationSeconds) {
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, activePill]);

  const handleSelectPill = (pill: AudioPill) => {
    setActivePill(pill);
    setElapsedSec(0);
    setIsPlaying(true);
    triggerGentleChime();
  };

  const handleTogglePlay = () => {
    if (!isPlaying) {
      triggerGentleChime();
    }
    setIsPlaying((prev) => !prev);
  };

  const progressPct = Math.min(
    100,
    Math.round((elapsedSec / activePill.durationSeconds) * 100)
  );

  // Determine which paragraph of the transcript to highlight based on playback progress
  const activeParagraphIdx =
    progressPct < 34 ? 0 : progressPct < 68 ? 1 : 2;

  return (
    <section
      id="sello-guia"
      className="relative z-10 py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="max-w-3xl mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-limestone border border-sage-mist/40 mb-4">
          <span className="font-mono text-[11px] uppercase tracking-widest text-sage font-medium">
            SECCIÓN 03 · EL SELLO DE GUÍA OFICIAL
          </span>
        </div>
        <h2 className="font-serif font-semibold text-ink section-display-title tracking-tight mb-4">
          Por qué no soy una agencia tradicional{' '}
          <em className="italic font-normal text-sage">ni un influencer más.</em>
        </h2>
        <p className="text-base sm:text-lg text-ink/80 leading-relaxed">
          He acompañado a cientos de viajeros sobre el terreno como guía oficial. Sé exactamente a
          qué hora desembarcan los cruceros, qué hotel precioso en Instagram tiene una discoteca
          debajo y cómo transformar un imprevisto climático en el mejor recuerdo del viaje.
        </p>
      </div>

      {/* MODULE 1: Interactive Audio Pills Demo ("Tu Guía en el Bolsillo") */}
      <div className="rounded-3xl bg-limestone/90 backdrop-blur-md border border-gold/50 p-5 sm:p-8 lg:p-10 shadow-editorial-lg mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-sage-mist/35">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-medium flex items-center gap-1.5 mb-1">
              <Headphones className="w-4 h-4" strokeWidth={1.5} />
              MÓDULO INTERACTIVO 01 · PÍLDORAS DE AUDIO EN RUTA
            </span>
            <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-ink">
              Escucha cómo te acompaño en destino: «Tu Guía en el Bolsillo»
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-ink/75 max-w-md">
            Pulsa <strong>Play</strong> en cualquiera de estas 3 notas de voz reales que mis
            viajeros reciben geolocalizadas en su móvil:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: 3 Selectable Audio Tracks */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {AUDIO_PILLS.map((pill, idx) => {
              const isSelected = pill.id === activePill.id;
              return (
                <button
                  key={pill.id}
                  type="button"
                  onClick={() => handleSelectPill(pill)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all min-h-[76px] flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-sand border-terracotta shadow-editorial'
                      : 'bg-sand/65 hover:bg-sand border-sage-mist/35'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected && isPlaying
                        ? 'bg-terracotta text-sand'
                        : isSelected
                        ? 'bg-sage text-sand'
                        : 'bg-limestone text-sage border border-sage-mist/40'
                    }`}
                  >
                    {isSelected && isPlaying ? (
                      <Pause className="w-4 h-4" strokeWidth={1.5} />
                    ) : (
                      <Play className="w-4 h-4 ml-0.5" strokeWidth={1.5} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-sage font-medium truncate">
                        AUDIO 0{idx + 1} · {pill.location.split('·')[0]}
                      </span>
                      <span className="font-mono text-xs text-terracotta font-medium shrink-0">
                        {pill.duration}
                      </span>
                    </div>
                    <p className="font-serif font-semibold text-base sm:text-lg text-ink leading-snug">
                      {pill.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Audio Player + Animated Soundwave + Synchronized Transcript */}
          <div className="lg:col-span-7 rounded-2xl bg-sand border border-sage-mist/40 p-5 sm:p-6 shadow-sm">
            {/* Top Metadata Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-limestone">
              <div>
                <span className="font-mono text-[10px] sm:text-[11px] text-sage block">
                  {activePill.code}
                </span>
                <span className="text-xs font-medium text-ink/80">
                  {activePill.contextBadge}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSoundEnabled((s) => !s)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-limestone/70 text-xs font-mono text-ink/80 hover:text-ink"
                aria-label={soundEnabled ? 'Silenciar tono ambiental' : 'Activar tono ambiental'}
              >
                {soundEnabled ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-sage" strokeWidth={1.5} />
                    <span>VOZ + AMBIENTE</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-ink/50" strokeWidth={1.5} />
                    <span>MODO LECTURA</span>
                  </>
                )}
              </button>
            </div>

            {/* Player Controls & Animated Waveform */}
            <div className="flex items-center gap-3 sm:gap-4 mb-5 bg-limestone/55 p-3.5 rounded-2xl border border-sage-mist/30">
              <button
                type="button"
                onClick={handleTogglePlay}
                className="w-12 h-12 rounded-full bg-terracotta hover:bg-terracotta-hover text-sand flex items-center justify-center shrink-0 shadow-sm transition-transform active:scale-95"
                aria-label={isPlaying ? 'Pausar píldora de audio' : 'Reproducir píldora de audio'}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" strokeWidth={1.5} />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" strokeWidth={1.5} />
                )}
              </button>

              {/* Animated Waveform Bars */}
              <div className="flex-1 min-w-0">
                <div
                  className="flex items-end gap-1 h-8 mb-2 overflow-hidden"
                  aria-hidden="true"
                >
                  {Array.from({ length: 32 }).map((_, i) => {
                    const barPct = (i / 32) * 100;
                    const isPassed = barPct <= progressPct;
                    const baseHeight = 25 + ((i * 19) % 70);
                    return (
                      <div
                        key={i}
                        style={{
                          height: `${baseHeight}%`,
                          animationDelay: `${(i % 7) * 0.12}s`,
                        }}
                        className={`flex-1 rounded-full transition-colors ${
                          isPlaying ? 'sound-bar-active' : ''
                        } ${
                          isPassed
                            ? 'bg-terracotta'
                            : isPlaying
                            ? 'bg-gold/75'
                            : 'bg-sage-mist/45'
                        }`}
                      />
                    );
                  })}
                </div>

                {/* Scrubber Range Input */}
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] text-ink/75 w-10">
                    {formatTime(elapsedSec)}
                  </span>
                  <input
                    type="range"
                    min={0}
                    max={activePill.durationSeconds}
                    value={elapsedSec}
                    onChange={(e) => setElapsedSec(Number(e.target.value))}
                    aria-label="Progreso del audio"
                    style={
                      {
                        '--progress': `${progressPct}%`,
                      } as React.CSSProperties
                    }
                    className="flex-1 h-1.5 cursor-pointer accent-terracotta"
                  />
                  <span className="font-mono text-[11px] text-ink/65 w-10 text-right">
                    {activePill.duration}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setElapsedSec(0);
                  setIsPlaying(true);
                }}
                className="w-10 h-10 rounded-full bg-sand border border-sage-mist/40 flex items-center justify-center text-ink/75 hover:text-ink shrink-0"
                aria-label="Reiniciar pista de audio"
                title="Reiniciar"
              >
                <RotateCcw className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>

            {/* Live Synchronized Transcript */}
            <div className="space-y-2.5 mb-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-sage font-semibold">
                  TRANSCRIPCIÓN EN VIVO · VOZ DE ANDREA
                </span>
                <span className="font-mono text-[10px] text-gold font-medium">
                  {isPlaying ? '● REPRODUCIENDO AHORA' : 'PULSA PLAY PARA ESCUCHAR'}
                </span>
              </div>

              {activePill.transcript.map((para, pIdx) => {
                const isHighlighted = isPlaying && pIdx === activeParagraphIdx;
                return (
                  <p
                    key={pIdx}
                    className={`text-xs sm:text-sm leading-relaxed p-3 rounded-xl transition-colors ${
                      isHighlighted
                        ? 'bg-limestone/90 text-ink font-medium border-l-2 border-terracotta'
                        : 'bg-limestone/30 text-ink/85'
                    }`}
                  >
                    {para}
                  </p>
                );
              })}
            </div>

            {/* Secret Coordinate Unlocked Footer */}
            <div className="p-3 rounded-xl bg-sage/10 border border-sage/30 flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-sage shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="font-mono text-[11px] text-sage font-medium">
                {activePill.secretReveal}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MODULE 2: Interactive Radical Honesty Comparator */}
      <div className="rounded-3xl bg-sand border border-sage-mist/45 p-5 sm:p-8 lg:p-10 shadow-editorial mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-sage font-medium block mb-1">
              MÓDULO INTERACTIVO 02 · COMPARATIVA REAL
            </span>
            <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-ink">
              El Filtro de Honestidad Radical
            </h3>
          </div>

          {/* Mobile & Tablet 3-Tab Switcher (Min height 48px) */}
          <div
            className="grid grid-cols-3 gap-1.5 p-1.5 rounded-2xl bg-limestone border border-sage-mist/40"
            role="tablist"
            aria-label="Comparar modelos de planificación de viajes"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedColumn === 'agency'}
              onClick={() => setSelectedColumn('agency')}
              className={`min-h-[46px] px-2.5 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedColumn === 'agency'
                  ? 'bg-sand text-ink shadow-sm font-semibold'
                  : 'text-ink/70 hover:text-ink'
              }`}
            >
              Agencia Catálogo
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedColumn === 'influencer'}
              onClick={() => setSelectedColumn('influencer')}
              className={`min-h-[46px] px-2.5 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedColumn === 'influencer'
                  ? 'bg-sand text-ink shadow-sm font-semibold'
                  : 'text-ink/70 hover:text-ink'
              }`}
            >
              Blog / Influencer
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedColumn === 'andrea'}
              onClick={() => setSelectedColumn('andrea')}
              className={`min-h-[46px] px-2.5 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedColumn === 'andrea'
                  ? 'bg-sage text-sand shadow-sm font-semibold'
                  : 'text-sage hover:text-ink'
              }`}
            >
              Tu Hada (Andrea)
            </button>
          </div>
        </div>

        {/* Comparison Cards Grid */}
        <div className="space-y-4">
          {HONESTY_COMPARISON.map((row, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-limestone/60 border border-sage-mist/35 p-4 sm:p-5"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-sage font-semibold mb-3">
                0{idx + 1} · {row.aspect}
              </div>

              {/* Mobile Active Tab View + Desktop 3-Column Simultaneous View */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Column 1: Agencia de Catálogo */}
                <div
                  className={`p-4 rounded-xl bg-sand/80 border ${
                    selectedColumn === 'agency'
                      ? 'block border-terracotta/60 ring-1 ring-terracotta/30'
                      : 'hidden lg:block border-sage-mist/30 opacity-85'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-ink/65 uppercase mb-1.5">
                    <X className="w-4 h-4 text-terracotta shrink-0" strokeWidth={1.5} />
                    <span>Agencia de Catálogo</span>
                  </div>
                  <h4 className="font-serif font-semibold text-lg text-ink mb-1">
                    {row.agency.verdict}
                  </h4>
                  <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
                    {row.agency.detail}
                  </p>
                </div>

                {/* Column 2: Blog / Influencer */}
                <div
                  className={`p-4 rounded-xl bg-sand/80 border ${
                    selectedColumn === 'influencer'
                      ? 'block border-terracotta/60 ring-1 ring-terracotta/30'
                      : 'hidden lg:block border-sage-mist/30 opacity-85'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-ink/65 uppercase mb-1.5">
                    <AlertTriangle className="w-4 h-4 text-gold shrink-0" strokeWidth={1.5} />
                    <span>Blog / Influencer Masivo</span>
                  </div>
                  <h4 className="font-serif font-semibold text-lg text-ink mb-1">
                    {row.influencer.verdict}
                  </h4>
                  <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
                    {row.influencer.detail}
                  </p>
                </div>

                {/* Column 3: Tu Hada de los Viajes (Andrea) */}
                <div
                  className={`p-4 rounded-xl bg-sage/10 border ${
                    selectedColumn === 'andrea'
                      ? 'block border-sage ring-1 ring-sage/30'
                      : 'hidden lg:block border-sage/50'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-sage font-semibold uppercase mb-1.5">
                    <Check className="w-4 h-4 text-sage shrink-0" strokeWidth={1.5} />
                    <span>Tu Hada de los Viajes (Andrea)</span>
                  </div>
                  <h4 className="font-serif font-semibold text-lg text-ink mb-1">
                    {row.andrea.verdict}
                  </h4>
                  <p className="text-xs sm:text-sm text-ink/90 leading-relaxed font-medium">
                    {row.andrea.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODULE 3: El Kit de Supervivencia Digital y "Plan B" Climático */}
      <div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-medium block mb-1">
              MÓDULO 03 · LOGÍSTICA INVISIBLE &amp; INGENIERÍA DE DETALLE
            </span>
            <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-ink">
              El Kit de Supervivencia Digital y el «Plan B» Climático
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-ink/75 max-w-md">
            La magia no es improvisar: es aterrizar con cada barrera tecnológica, bancaria y
            meteorológica resuelta de antemano.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SURVIVAL_KIT_CARDS.map((card, i) => (
            <div
              key={card.id}
              className="rounded-3xl bg-limestone/85 border border-sage-mist/40 p-6 flex flex-col justify-between shadow-editorial"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-sand text-sage font-medium border border-sage-mist/40">
                    {card.region}
                  </span>
                  <span className="font-mono text-[11px] text-terracotta font-medium flex items-center gap-1">
                    {i === 0 ? (
                      <Smartphone className="w-3.5 h-3.5" strokeWidth={1.5} />
                    ) : i === 1 ? (
                      <ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.5} />
                    ) : (
                      <CloudRain className="w-3.5 h-3.5" strokeWidth={1.5} />
                    )}
                    {card.badge}
                  </span>
                </div>

                <h4 className="font-serif font-semibold text-xl sm:text-2xl text-ink mb-2">
                  {card.title}
                </h4>
                <p className="text-xs text-ink/75 italic mb-4 pb-3 border-b border-sage-mist/30">
                  Problema real: «{card.frictionPoint}»
                </p>

                <ul className="space-y-2.5 mb-6">
                  {card.solutions.map((sol, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2 text-xs sm:text-sm text-ink/90">
                      <Sparkles
                        className="w-4 h-4 text-gold shrink-0 mt-0.5"
                        strokeWidth={1.5}
                      />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-sand border border-gold/40">
                <span className="font-mono text-[10px] uppercase tracking-wider text-sage font-semibold block mb-0.5">
                  GARANTÍA ANTI-IMPREVISTOS
                </span>
                <p className="text-xs font-medium text-ink">{card.planBHighlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
