import React, { useEffect, useState } from 'react';
import {
  Compass,
  Users,
  Calendar,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  RotateCcw,
  MapPin,
} from 'lucide-react';

interface FairyWorkshopWizardProps {
  preselectedDestination?: string | null;
  preselectedService?: string | null;
}

const DESTINATION_OPTIONS = [
  {
    id: 'europa',
    label: 'Europa: Brujas / Nórdicos',
    coords: '51.20°N · 68.23°N',
    tag: 'Patrimonio & Auroras',
  },
  {
    id: 'marruecos',
    label: 'Marruecos Auténtico',
    coords: '31.62°N, 07.98°W',
    tag: 'Riads & Desierto',
  },
  {
    id: 'costarica',
    label: 'Costa Rica / Panamá',
    coords: '09.74°N, 83.75°W',
    tag: 'Selva & Ecolodges',
  },
  {
    id: 'china',
    label: 'China Sin Barreras',
    coords: '39.90°N, 116.40°E',
    tag: 'Imperio & Tren Bala',
  },
  {
    id: 'vietnam',
    label: 'Vietnam de Norte a Sur',
    coords: '21.02°N, 105.83°E',
    tag: 'Bahía Lan Ha & Hoi An',
  },
  {
    id: 'indeciso',
    label: 'Indeciso: necesito consejo',
    coords: 'BRÚJULA ABIERTA',
    tag: 'Asesoría de Destino',
  },
];

const TRAVELER_TYPES = [
  'En pareja',
  'Luna de Miel',
  'En familia',
  'Amigos / Solo',
];

const DURATION_OPTIONS = ['7 días', '10 días', '15 días', '+20 días'];

const BUDGET_RANGES = [
  '1.500 € – 2.200 € / persona',
  '2.200 € – 3.200 € / persona (Boutique & Experiencias)',
  '3.200 € – 4.500 € / persona (Superior & Exclusivo)',
  '+4.500 € / persona (Lujo Artesanal / Luna de Miel)',
];

const SERVICE_OPTIONS = [
  {
    id: 'Auditoría Express',
    title: 'Auditoría Express (Nivel 1)',
    desc: 'Ya tengo un borrador y quiero que lo revisemos en 60 min.',
  },
  {
    id: 'Diseño a Medida',
    title: 'Diseño a Medida (Nivel 2 · Estrella)',
    desc: 'Diseña mi ruta desde cero con el Entregable de 6 Módulos.',
  },
  {
    id: 'Llave en Mano',
    title: 'Viaje Llave en Mano (Nivel 3)',
    desc: 'Quiero delegar tanto el diseño como todas las reservas.',
  },
];

export const FairyWorkshopWizard: React.FC<FairyWorkshopWizardProps> = ({
  preselectedDestination,
  preselectedService,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Form State
  const [destination, setDestination] = useState<string>('Vietnam de Norte a Sur');
  const [travelerType, setTravelerType] = useState<string>('En pareja');
  const [paceValue, setPaceValue] = useState<number>(50);
  const [approxDates, setApproxDates] = useState<string>('');
  const [duration, setDuration] = useState<string>('15 días');
  const [budgetRange, setBudgetRange] = useState<string>(BUDGET_RANGES[1]);
  const [serviceModality, setServiceModality] = useState<string>('Diseño a Medida');
  const [clientName, setClientName] = useState<string>('');
  const [clientContact, setClientContact] = useState<string>('');
  const [mainConcern, setMainConcern] = useState<string>('');

  useEffect(() => {
    if (preselectedDestination) {
      const match = DESTINATION_OPTIONS.find((d) => d.id === preselectedDestination);
      if (match) {
        setDestination(match.label);
      }
    }
  }, [preselectedDestination]);

  useEffect(() => {
    if (preselectedService) {
      if (preselectedService.toLowerCase().includes('auditor')) {
        setServiceModality('Auditoría Express');
      } else if (preselectedService.toLowerCase().includes('llave')) {
        setServiceModality('Llave en Mano');
      } else {
        setServiceModality('Diseño a Medida');
      }
    }
  }, [preselectedService]);

  const paceLabel =
    paceValue < 35
      ? 'Slow & Relax Boutique (Pocas bases, mucha calma)'
      : paceValue > 65
      ? 'Exploración Cultural y Naturaleza Activa'
      : 'Equilibrio Armónico (Visitas con alma + tardes de descanso)';

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Build WhatsApp URL with pre-filled summary
  const whatsappText = encodeURIComponent(
    `¡Hola Andrea! ✨ Acabo de configurar mi boceto de ruta en *El Taller del Hada*:\n\n` +
      `🧭 *Destino:* ${destination}\n` +
      `👥 *Viajeros:* ${travelerType}\n` +
      `⏳ *Ritmo:* ${paceLabel} (${paceValue}%)\n` +
      `📅 *Duración y Fechas:* ${duration} (${approxDates || 'Fechas flexibles'})\n` +
      `💎 *Presupuesto estimado:* ${budgetRange}\n` +
      `🗝️ *Modalidad:* ${serviceModality}\n` +
      `👤 *Nombre:* ${clientName || 'Viajero'}\n` +
      `💬 *Lo que más respeto/pereza nos da:* ${mainConcern || 'Optimizar tiempos y acertar con los alojamientos'}\n\n` +
      `¿Cómo podemos dar el siguiente paso?`
  );
  const whatsappUrl = `https://wa.me/34600000000?text=${whatsappText}`;

  return (
    <section
      id="taller-hada"
      className="relative z-10 py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-limestone border border-gold/50 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
          <span className="font-mono text-[11px] uppercase tracking-widest text-sage font-medium">
            SECCIÓN 08 · EL TALLER DEL HADA · DIAGNÓSTICO EN 4 PASOS
          </span>
        </div>
        <h2 className="font-serif font-semibold text-ink section-display-title tracking-tight mb-3">
          Cuéntame el viaje con el que sueñas{' '}
          <em className="italic font-normal text-sage">en menos de 90 segundos.</em>
        </h2>
        <p className="text-sm sm:text-base text-ink/80">
          Sin formularios fríos ni compromisos. Configura los 4 parámetros de tu ruta para que
          pueda darte una respuesta honesta y artesanal.
        </p>
      </div>

      {/* Wizard Container Card */}
      <div className="rounded-3xl bg-limestone/90 backdrop-blur-md border border-gold/50 p-5 sm:p-8 lg:p-10 shadow-editorial-lg">
        {!submitted ? (
          <>
            {/* Top Step Progress Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between font-mono text-xs text-sage mb-2.5">
                <span>PASO 0{step} DE 04</span>
                <span>{step * 25}% COMPLETADO</span>
              </div>
              <progress max={4} value={step} className="w-full h-2">
                {step * 25}%
              </progress>

              <div className="grid grid-cols-4 gap-2 mt-3">
                {[
                  { s: 1, label: '01 · Destino' },
                  { s: 2, label: '02 · Estilo' },
                  { s: 3, label: '03 · Fechas' },
                  { s: 4, label: '04 · Tu Ruta' },
                ].map((item) => (
                  <button
                    key={item.s}
                    type="button"
                    onClick={() => setStep(item.s as 1 | 2 | 3 | 4)}
                    className={`py-1.5 px-2 rounded-lg font-mono text-[10px] sm:text-xs text-left truncate transition-colors ${
                      step === item.s
                        ? 'bg-sage text-sand font-semibold'
                        : step > item.s
                        ? 'bg-sand text-sage font-medium'
                        : 'bg-sand/50 text-ink/55'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 1: DESTINATION SELECTION */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold block mb-1">
                    PASO 01 · LA LLAMADA DEL MAPA
                  </span>
                  <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-ink">
                    ¿Qué destino te llama para este viaje?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {DESTINATION_OPTIONS.map((opt) => {
                    const isSelected = destination === opt.label;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setDestination(opt.label)}
                        aria-pressed={isSelected}
                        className={`min-h-[88px] p-4 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                          isSelected
                            ? 'bg-sage text-sand border-sage shadow-editorial'
                            : 'bg-sand hover:bg-sand/90 text-ink border-sage-mist/40'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 w-full">
                          <span
                            className={`font-mono text-[10px] uppercase ${
                              isSelected ? 'text-gold-light' : 'text-sage'
                            }`}
                          >
                            {opt.coords}
                          </span>
                          <Compass
                            className={`w-4 h-4 ${
                              isSelected ? 'text-gold-light' : 'text-terracotta'
                            }`}
                            strokeWidth={1.5}
                          />
                        </div>
                        <div className="mt-2">
                          <div className="font-serif font-semibold text-lg leading-snug">
                            {opt.label}
                          </div>
                          <div
                            className={`text-xs ${
                              isSelected ? 'text-sand/80' : 'text-ink/65'
                            }`}
                          >
                            {opt.tag}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="min-h-[50px] px-7 py-3 rounded-full bg-terracotta hover:bg-terracotta-hover text-sand font-semibold text-sm flex items-center gap-2 shadow-editorial"
                  >
                    <span>Siguiente: Quiénes viajáis y ritmo</span>
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: TRAVELERS & PACE SLIDER */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold block mb-1">
                    PASO 02 · COMPAÑÍA Y PULSO DEL VIAJE
                  </span>
                  <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-ink">
                    ¿Quiénes viajáis y qué estilo buscáis?
                  </h3>
                </div>

                {/* Traveler Type Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {TRAVELER_TYPES.map((type) => {
                    const isSelected = travelerType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setTravelerType(type)}
                        aria-pressed={isSelected}
                        className={`min-h-[52px] px-4 py-3 rounded-2xl font-medium text-xs sm:text-sm border transition-all flex items-center justify-center gap-2 ${
                          isSelected
                            ? 'bg-sage text-sand border-sage shadow-sm'
                            : 'bg-sand text-ink border-sage-mist/40 hover:bg-sand/80'
                        }`}
                      >
                        <Users className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                        <span>{type}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Pace Slider */}
                <div className="p-5 rounded-2xl bg-sand border border-sage-mist/40 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <label
                      htmlFor="pace-slider"
                      className="font-mono text-xs uppercase tracking-wider text-sage font-semibold"
                    >
                      CALIBRADOR DE RITMO DIARIO:
                    </label>
                    <span className="font-mono text-xs text-terracotta font-medium">
                      {paceLabel}
                    </span>
                  </div>

                  <input
                    id="pace-slider"
                    type="range"
                    min={10}
                    max={90}
                    value={paceValue}
                    onChange={(e) => setPaceValue(Number(e.target.value))}
                    style={
                      {
                        '--progress': `${((paceValue - 10) / 80) * 100}%`,
                      } as React.CSSProperties
                    }
                    className="w-full cursor-pointer"
                  />

                  <div className="flex justify-between font-mono text-[10px] sm:text-[11px] text-ink/70">
                    <span>← Slow &amp; Relax Boutique</span>
                    <span>Equilibrio Autor</span>
                    <span>Exploración &amp; Naturaleza Activa →</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="min-h-[48px] px-5 py-2.5 rounded-full bg-sand border border-sage-mist/50 text-ink text-xs sm:text-sm font-medium flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
                    <span>Anterior</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="min-h-[50px] px-7 py-3 rounded-full bg-terracotta hover:bg-terracotta-hover text-sand font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-editorial"
                  >
                    <span>Siguiente: Fechas y Presupuesto</span>
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: DATES, DURATION & BUDGET */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold block mb-1">
                    PASO 03 · CALENDARIO Y CALIBRACIÓN DE CONFORT
                  </span>
                  <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-ink">
                    Duración, fechas aproximadas y presupuesto estimado
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Duration Selector */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-sand border border-sage-mist/40 space-y-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-sage font-semibold block">
                      DURACIÓN APROXIMADA:
                    </span>
                    <div className="grid grid-cols-2 gap-2.5">
                      {DURATION_OPTIONS.map((d) => {
                        const isSelected = duration === d;
                        return (
                          <button
                            key={d}
                            type="button"
                            onClick={() => setDuration(d)}
                            aria-pressed={isSelected}
                            className={`min-h-[46px] px-3 py-2 rounded-xl font-mono text-xs font-medium border transition-colors ${
                              isSelected
                                ? 'bg-sage text-sand border-sage'
                                : 'bg-limestone/65 text-ink border-sage-mist/35 hover:bg-limestone'
                            }`}
                          >
                            {d}
                          </button>
                        );
                      })}
                    </div>

                    <div className="pt-2">
                      <label
                        htmlFor="approx-dates-input"
                        className="font-mono text-[11px] uppercase text-ink/75 block mb-1.5"
                      >
                        ¿En qué mes o época os gustaría volar?
                      </label>
                      <div className="relative">
                        <input
                          id="approx-dates-input"
                          type="text"
                          placeholder="Ej: Octubre 2026 / Primavera / Semana Santa"
                          value={approxDates}
                          onChange={(e) => setApproxDates(e.target.value)}
                          className="w-full min-h-[46px] px-3.5 py-2 rounded-xl bg-limestone/50 border border-sage-mist/45 text-xs sm:text-sm text-ink focus:outline-none focus:border-sage"
                        />
                        <Calendar
                          className="w-4 h-4 text-sage absolute right-3.5 top-3.5 pointer-events-none"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Budget Range Selector */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-sand border border-sage-mist/40 space-y-2.5">
                    <span className="font-mono text-xs uppercase tracking-wider text-sage font-semibold block">
                      RANGO DE INVERSIÓN ESTIMADA EN EL VIAJE (POR PERSONA):
                    </span>
                    <p className="text-[11px] text-ink/70">
                      Incluyendo vuelos, hoteles boutique y experiencias para calibrar la categoría:
                    </p>
                    <div className="space-y-2">
                      {BUDGET_RANGES.map((b) => {
                        const isSelected = budgetRange === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setBudgetRange(b)}
                            aria-pressed={isSelected}
                            className={`w-full min-h-[44px] px-3.5 py-2 rounded-xl font-mono text-xs text-left border transition-colors ${
                              isSelected
                                ? 'bg-sage text-sand border-sage font-medium'
                                : 'bg-limestone/60 text-ink border-sage-mist/35 hover:bg-limestone'
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="min-h-[48px] px-5 py-2.5 rounded-full bg-sand border border-sage-mist/50 text-ink text-xs sm:text-sm font-medium flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
                    <span>Anterior</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="min-h-[50px] px-7 py-3 rounded-full bg-terracotta hover:bg-terracotta-hover text-sand font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-editorial"
                  >
                    <span>Último paso: Modalidad y Contacto</span>
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: SERVICE MODALITY & CONTACT */}
            {step === 4 && (
              <form onSubmit={handleFinalSubmit} className="space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold block mb-1">
                    PASO 04 · EL TOQUE FINAL
                  </span>
                  <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-ink">
                    ¿Qué modalidad te encaja mejor y dónde te escribo?
                  </h3>
                </div>

                {/* Service Modality Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {SERVICE_OPTIONS.map((srv) => {
                    const isSelected = serviceModality === srv.id;
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => setServiceModality(srv.id)}
                        aria-pressed={isSelected}
                        className={`p-4 rounded-2xl text-left border transition-all ${
                          isSelected
                            ? 'bg-sage text-sand border-sage shadow-sm'
                            : 'bg-sand text-ink border-sage-mist/40 hover:bg-sand/80'
                        }`}
                      >
                        <div className="font-serif font-semibold text-lg mb-1">
                          {srv.title}
                        </div>
                        <p
                          className={`text-xs ${
                            isSelected ? 'text-sand/85' : 'text-ink/75'
                          }`}
                        >
                          {srv.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="wizard-name"
                      className="font-mono text-xs uppercase text-ink/80 block mb-1.5"
                    >
                      Tu Nombre *
                    </label>
                    <input
                      id="wizard-name"
                      type="text"
                      required
                      placeholder="Ej: Clara y Marcos"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-sand border border-sage-mist/50 text-sm text-ink focus:outline-none focus:border-sage"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="wizard-contact"
                      className="font-mono text-xs uppercase text-ink/80 block mb-1.5"
                    >
                      Tu WhatsApp o Email *
                    </label>
                    <input
                      id="wizard-contact"
                      type="text"
                      required
                      placeholder="Ej: +34 600 000 000 o tu@email.com"
                      value={clientContact}
                      onChange={(e) => setClientContact(e.target.value)}
                      className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-sand border border-sage-mist/50 text-sm text-ink focus:outline-none focus:border-sage"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="wizard-concern"
                    className="font-mono text-xs uppercase text-ink/80 block mb-1.5"
                  >
                    ¿Qué es lo que más respeto o pereza os da de organizar este viaje?
                  </label>
                  <textarea
                    id="wizard-concern"
                    rows={2}
                    placeholder="Ej: No sabemos cómo conectar las ciudades sin perder días enteros ni qué hoteles elegir..."
                    value={mainConcern}
                    onChange={(e) => setMainConcern(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-sand border border-sage-mist/50 text-sm text-ink focus:outline-none focus:border-sage"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="min-h-[48px] px-5 py-2.5 rounded-full bg-sand border border-sage-mist/50 text-ink text-xs sm:text-sm font-medium flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
                    <span>Anterior</span>
                  </button>

                  <button
                    type="submit"
                    className="min-h-[52px] px-8 py-3.5 rounded-full bg-terracotta hover:bg-terracotta-hover text-sand font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-editorial"
                  >
                    <Sparkles className="w-4 h-4 text-gold-light" strokeWidth={1.5} />
                    <span>Generar mi ficha de ruta y hablar con Andrea</span>
                  </button>
                </div>
              </form>
            )}
          </>
        ) : (
          /* MAGICAL CONFIRMATION SCREEN WITH PRE-FILLED WHATSAPP LINK */
          <div className="p-4 sm:p-6 rounded-2xl bg-sand border border-gold/50 space-y-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-sage-mist/35">
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-12 h-12 rounded-full bg-sage text-sand flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-gold-light" strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <span className="font-mono text-xs uppercase tracking-widest text-sage font-semibold block">
                    COORDENADAS DE VIAJE REGISTRADAS
                  </span>
                  <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-ink">
                    ¡Gracias, {clientName || 'viajero'}! Tu boceto está listo.
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                }}
                className="inline-flex items-center justify-center gap-1.5 font-mono text-xs text-ink/70 hover:text-ink"
              >
                <RotateCcw className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span>Editar respuestas</span>
              </button>
            </div>

            {/* Summary Dossier Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-left font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-limestone/70 border border-sage-mist/35">
                <span className="text-[10px] text-sage block mb-0.5">01 · DESTINO ELEGIDO</span>
                <strong className="text-ink text-sm flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0" />
                  {destination}
                </strong>
              </div>
              <div className="p-3.5 rounded-xl bg-limestone/70 border border-sage-mist/35">
                <span className="text-[10px] text-sage block mb-0.5">02 · VIAJEROS &amp; RITMO</span>
                <strong className="text-ink text-sm">
                  {travelerType} · Ritmo {paceValue}%
                </strong>
              </div>
              <div className="p-3.5 rounded-xl bg-limestone/70 border border-sage-mist/35">
                <span className="text-[10px] text-sage block mb-0.5">03 · DURACIÓN &amp; FECHAS</span>
                <strong className="text-ink text-sm">
                  {duration} ({approxDates || 'Fechas flexibles'})
                </strong>
              </div>
              <div className="p-3.5 rounded-xl bg-limestone/70 border border-sage-mist/35">
                <span className="text-[10px] text-sage block mb-0.5">04 · RANGO ESTIMADO</span>
                <strong className="text-ink text-sm">{budgetRange}</strong>
              </div>
              <div className="p-3.5 rounded-xl bg-limestone/70 border border-sage-mist/35">
                <span className="text-[10px] text-sage block mb-0.5">05 · MODALIDAD</span>
                <strong className="text-terracotta text-sm">{serviceModality}</strong>
              </div>
              <div className="p-3.5 rounded-xl bg-limestone/70 border border-sage-mist/35">
                <span className="text-[10px] text-sage block mb-0.5">06 · CONTACTO DIRECTO</span>
                <strong className="text-ink text-sm">{clientContact}</strong>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-sage/10 border border-sage/40 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-left space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-sage font-semibold">
                  SIGUIENTE PASO INMEDIATO
                </span>
                <p className="text-xs sm:text-sm text-ink/90">
                  Pulsa el botón para abrir nuestro chat directo de WhatsApp con tu resumen ya
                  escrito. Te responderé personalmente en menos de 24h laborables.
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto min-h-[52px] px-7 py-3.5 rounded-full bg-terracotta hover:bg-terracotta-hover text-sand font-semibold text-sm flex items-center justify-center gap-2.5 shadow-editorial shrink-0"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                <span>Abrir WhatsApp con mi ruta pre-cargada</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
