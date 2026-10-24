import React, { useState } from 'react';
import {
  Compass,
  ShieldCheck,
  Calendar,
  Home,
  MapPin,
  Wallet,
  CloudRain,
  Sun,
  CheckSquare,
  Square,
  ExternalLink,
  Sparkles,
  Headphones,
  ArrowRight,
  Coffee,
  Utensils,
  Eye,
  PlusCircle,
} from 'lucide-react';
import { LOOKBOOK_DEMOS } from '../data/travelData';

interface LookbookSectionProps {
  onNavigate: (sectionId: string) => void;
}

type ModuleId = 1 | 2 | 3 | 4 | 5 | 6;

const MODULE_TABS: { id: ModuleId; shortLabel: string; fullTitle: string; icon: React.ReactNode }[] = [
  {
    id: 1,
    shortLabel: '01 · Brújula',
    fullTitle: 'Módulo 1 · La Brújula del Viaje',
    icon: <Compass className="w-4 h-4" strokeWidth={1.5} />,
  },
  {
    id: 2,
    shortLabel: '02 · Bóveda 0%',
    fullTitle: 'Módulo 2 · Bóveda de Fricción Cero',
    icon: <ShieldCheck className="w-4 h-4" strokeWidth={1.5} />,
  },
  {
    id: 3,
    shortLabel: '03 · Día a Día + Plan B',
    fullTitle: 'Módulo 3 · Bitácora Día a Día con Botón "Plan B"',
    icon: <Calendar className="w-4 h-4" strokeWidth={1.5} />,
  },
  {
    id: 4,
    shortLabel: '04 · Refugios',
    fullTitle: 'Módulo 4 · Curaduría de Refugios con Alma',
    icon: <Home className="w-4 h-4" strokeWidth={1.5} />,
  },
  {
    id: 5,
    shortLabel: '05 · Mapa Radar',
    fullTitle: 'Módulo 5 · Mapa Gastronómico y Fuera de Radar',
    icon: <MapPin className="w-4 h-4" strokeWidth={1.5} />,
  },
  {
    id: 6,
    shortLabel: '06 · Presupuesto Real',
    fullTitle: 'Módulo 6 · Billetera Digital y Presupuesto Transparente',
    icon: <Wallet className="w-4 h-4" strokeWidth={1.5} />,
  },
];

export const LookbookSection: React.FC<LookbookSectionProps> = ({ onNavigate }) => {
  const [activeCountry, setActiveCountry] = useState<'vietnam' | 'china'>('vietnam');
  const [activeModule, setActiveModule] = useState<ModuleId>(3); // Start on Module 3 or allow switching all 6; let's make Module 1-6 easily accessible, starting on Module 1 or 3? Let's start on Module 1 and provide a prominent quick-jump to Module 3 Plan B too!
  const [planBActive, setPlanBActive] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'vnm-c1': true,
    'vnm-c2': true,
    'chn-c1': true,
    'chn-c2': true,
  });
  const [pinFilter, setPinFilter] = useState<'all' | 'cafe' | 'food' | 'viewpoint' | 'utility'>(
    'all'
  );
  const [selectedPinId, setSelectedPinId] = useState<string | null>(null);

  const demo = LOOKBOOK_DEMOS[activeCountry];

  const handleToggleChecklist = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = demo.vaultChecklist.filter((c) => checkedItems[c.id]).length;
  const totalChecklist = demo.vaultChecklist.length;

  const filteredPins =
    pinFilter === 'all'
      ? demo.radarPins
      : demo.radarPins.filter((p) => p.category === pinFilter);

  const activePin =
    filteredPins.find((p) => p.id === selectedPinId) || filteredPins[0] || demo.radarPins[0];

  const dayLog = demo.dailyLog[0];
  const currentSchedule = planBActive ? dayLog.planB.schedule : dayLog.planA;

  return (
    <section
      id="entregable-estrella"
      className="relative z-10 py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-limestone border border-gold/50 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
            <span className="font-mono text-[11px] uppercase tracking-widest text-sage font-medium">
              SECCIÓN 05 · EL ENTREGABLE ESTRELLA · SIMULADOR INTERACTIVO EN VIVO
            </span>
          </div>
          <h2 className="font-serif font-semibold text-ink section-display-title tracking-tight mb-3">
            No recibes un PDF aburrido:{' '}
            <em className="italic font-normal text-sage">
              recibes tu propia App Editorial de Viaje en 6 Módulos.
            </em>
          </h2>
          <p className="text-base sm:text-lg text-ink/80 leading-relaxed">
            Toca y explora por dentro una demostración real de lo que entrego a mis viajeros.
            Alterna entre la ruta de <strong>Vietnam</strong> y la de <strong>China</strong>, marca
            el checklist y pon a prueba el interruptor del <strong>Plan B de Andrea</strong>.
          </p>
        </div>

        {/* Live Demo Country Switcher (Vietnam vs China) */}
        <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
          <span className="font-mono text-[10px] uppercase tracking-widest text-sage">
            ALTERNAR DEMO EN VIVO (15 DÍAS):
          </span>
          <div
            className="inline-grid grid-cols-2 p-1.5 rounded-full bg-limestone border border-gold/50 shadow-sm"
            role="group"
            aria-label="Alternar demo entre Vietnam y China"
          >
            <button
              type="button"
              onClick={() => {
                setActiveCountry('vietnam');
                setSelectedPinId(null);
              }}
              aria-pressed={activeCountry === 'vietnam'}
              className={`min-h-[44px] px-5 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all ${
                activeCountry === 'vietnam'
                  ? 'bg-terracotta text-sand shadow-sm'
                  : 'text-ink/75 hover:text-ink'
              }`}
            >
              🇻🇳 Demo Vietnam (15D)
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveCountry('china');
                setSelectedPinId(null);
              }}
              aria-pressed={activeCountry === 'china'}
              className={`min-h-[44px] px-5 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all ${
                activeCountry === 'china'
                  ? 'bg-terracotta text-sand shadow-sm'
                  : 'text-ink/75 hover:text-ink'
              }`}
            >
              🇨🇳 Demo China (15D)
            </button>
          </div>
        </div>
      </div>

      {/* Lookbook App Frame */}
      <div className="rounded-[2rem] bg-ink p-2.5 sm:p-4 shadow-editorial-lg border border-gold/45">
        <div className="rounded-[1.6rem] bg-sand overflow-hidden border border-sage-mist/35">
          {/* App Top Status & Route Header Bar */}
          <div className="bg-limestone px-4 sm:px-7 py-4 border-b border-sage-mist/35 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-sage text-sand flex items-center justify-center font-serif font-semibold text-base shrink-0">
                A
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-sage font-semibold">
                    {demo.routeCode}
                  </span>
                  <span className="hidden sm:inline-block font-mono text-[10px] px-2 py-0.5 rounded-full bg-sand text-terracotta border border-terracotta/30">
                    {demo.duration}
                  </span>
                </div>
                <h3 className="font-serif font-semibold text-lg sm:text-2xl text-ink leading-tight">
                  {demo.routeTitle}
                </h3>
              </div>
            </div>

            <div className="font-mono text-[11px] text-ink/75 bg-sand px-3 py-1.5 rounded-full border border-sage-mist/35">
              GPS: <strong className="text-sage">{demo.coordinates}</strong>
            </div>
          </div>

          {/* 6-Module Navigation Bar (Swipeable on Mobile) */}
          <div className="bg-sand/90 border-b border-sage-mist/30 px-3 sm:px-6 py-2.5">
            <div
              className="flex items-center gap-2 overflow-x-auto no-scrollbar snap-x"
              role="tablist"
              aria-label="Los 6 módulos del Entregable Estrella"
            >
              {MODULE_TABS.map((tab) => {
                const isSelected = activeModule === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveModule(tab.id)}
                    className={`snap-start shrink-0 min-h-[46px] px-4 py-2 rounded-xl font-sans text-xs sm:text-sm font-medium transition-all flex items-center gap-2 border ${
                      isSelected
                        ? 'bg-sage text-sand border-sage shadow-sm'
                        : 'bg-limestone/65 text-ink hover:bg-limestone border-sage-mist/35'
                    }`}
                  >
                    <span className={isSelected ? 'text-gold-light' : 'text-sage'}>
                      {tab.icon}
                    </span>
                    <span>{tab.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Module Body */}
          <div className="p-4 sm:p-7 lg:p-9 min-h-[460px]">
            {/* MODULE 1: LA BRÚJULA DEL VIAJE */}
            {activeModule === 1 && (
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-sage-mist/30">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-sage font-semibold">
                      MÓDULO 01 · VISIÓN ESTRATÉGICA
                    </span>
                    <h4 className="font-serif font-semibold text-2xl sm:text-3xl text-ink mt-0.5">
                      La Brújula del Viaje y Curva de Energía
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveModule(3)}
                    className="self-start md:self-auto px-4 py-2 rounded-full bg-terracotta/15 text-terracotta font-mono text-xs font-medium hover:bg-terracotta/25 transition-colors"
                  >
                    Ir al Día a Día + Botón Plan B →
                  </button>
                </div>

                <p className="text-sm sm:text-base text-ink/85 leading-relaxed max-w-4xl">
                  {demo.compass.summary}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Stops Sequence */}
                  <div className="lg:col-span-6 rounded-2xl bg-limestone/65 border border-sage-mist/35 p-5">
                    <span className="font-mono text-xs uppercase tracking-wider text-sage font-semibold block mb-4">
                      SECUENCIA DE BASES CON ENCANTO ({demo.countryName.toUpperCase()})
                    </span>
                    <div className="space-y-3.5">
                      {demo.compass.stops.map((st, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-sand border border-sage-mist/30 flex items-start justify-between gap-3"
                        >
                          <div>
                            <span className="font-mono text-[11px] text-terracotta font-semibold">
                              {st.dayRange}
                            </span>
                            <h5 className="font-serif font-semibold text-lg text-ink">
                              {st.city}
                            </h5>
                            <span className="text-xs text-ink/75">{st.vibe}</span>
                          </div>
                          <span className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-limestone text-sage shrink-0">
                            {st.coords}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Energy Curve Day by Day */}
                  <div className="lg:col-span-6 rounded-2xl bg-limestone/65 border border-sage-mist/35 p-5 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-sage font-semibold block mb-1">
                        CURVA DE ENERGÍA CALIBRADA DÍA A DÍA
                      </span>
                      <p className="text-xs text-ink/75 mb-5">
                        Alternamos días de exploración activa con tardes de calma en alojamientos
                        especiales para que nunca acabéis agotados:
                      </p>

                      <div className="space-y-3.5">
                        {demo.compass.energyCurve.map((ec, i) => (
                          <div key={i} className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-mono font-medium text-ink">
                                {ec.day} · {ec.label}
                              </span>
                              <span className="font-mono text-sage">
                                Intensidad: {ec.energy}%
                              </span>
                            </div>
                            <div className="w-full h-2.5 rounded-full bg-sand overflow-hidden">
                              <div
                                className="h-full rounded-full bg-sage transition-all duration-500"
                                style={{ width: `${ec.energy}%` }}
                              />
                            </div>
                            <p className="text-[11px] text-ink/70">{ec.note}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* What we discarded and why */}
                <div className="rounded-2xl bg-terracotta/10 border border-terracotta/35 p-5">
                  <span className="font-mono text-xs uppercase tracking-wider text-terracotta font-semibold block mb-3">
                    FILTRO DE HONESTIDAD: QUÉ HEMOS DESCARTADO EN ESTA RUTA Y POR QUÉ
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {demo.compass.discarded.map((d, i) => (
                      <div key={i} className="p-4 rounded-xl bg-sand border border-terracotta/25">
                        <h5 className="font-serif font-semibold text-lg text-ink mb-1">
                          ✗ Descartado: {d.place}
                        </h5>
                        <p className="text-xs sm:text-sm text-ink/85 leading-relaxed">
                          {d.reason}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* MODULE 2: BÓVEDA DE FRICCIÓN CERO (INTERACTIVE CHECKLIST) */}
            {activeModule === 2 && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-sage-mist/30">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-sage font-semibold">
                      MÓDULO 02 · PREPARACIÓN PASO A PASO
                    </span>
                    <h4 className="font-serif font-semibold text-2xl sm:text-3xl text-ink mt-0.5">
                      Bóveda de Fricción Cero (Checklist Interactivo)
                    </h4>
                  </div>

                  <div className="bg-limestone px-4 py-2.5 rounded-2xl border border-sage-mist/40 flex items-center gap-3">
                    <div className="font-mono text-xs text-ink">
                      PROGRESO DEMO:{' '}
                      <strong className="text-sage">
                        {completedCount}/{totalChecklist} COMPLETADOS
                      </strong>
                    </div>
                    <progress
                      max={totalChecklist}
                      value={completedCount}
                      className="w-20 h-2"
                    >
                      {Math.round((completedCount / totalChecklist) * 100)}%
                    </progress>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-ink/80">
                  Toca cualquier casilla para probar cómo el viajero lleva el control de sus
                  visados, pagos móviles y conectividad antes de volar:
                </p>

                <div className="space-y-3">
                  {demo.vaultChecklist.map((item) => {
                    const isChecked = !!checkedItems[item.id];
                    return (
                      <div
                        key={item.id}
                        onClick={() => handleToggleChecklist(item.id)}
                        role="checkbox"
                        aria-checked={isChecked}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleToggleChecklist(item.id);
                          }
                        }}
                        className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                          isChecked
                            ? 'bg-sage/10 border-sage/50'
                            : 'bg-limestone/60 hover:bg-limestone border-sage-mist/40'
                        }`}
                      >
                        <div className="mt-0.5 text-sage shrink-0">
                          {isChecked ? (
                            <CheckSquare className="w-5 h-5 text-sage" strokeWidth={1.5} />
                          ) : (
                            <Square className="w-5 h-5 text-ink/50" strokeWidth={1.5} />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sand text-terracotta font-semibold border border-terracotta/30">
                              {item.window}
                            </span>
                            {isChecked && (
                              <span className="font-mono text-[10px] text-sage font-medium">
                                ✓ VERIFICADO CON ANDREA
                              </span>
                            )}
                          </div>
                          <h5
                            className={`font-serif font-semibold text-lg sm:text-xl ${
                              isChecked ? 'line-through text-ink/70' : 'text-ink'
                            }`}
                          >
                            {item.task}
                          </h5>
                          <p className="text-xs sm:text-sm text-ink/80 mt-1 leading-relaxed">
                            {item.andreaNote}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* MODULE 3: BITÁCORA DÍA A DÍA CON BOTÓN "PLAN B" */}
            {activeModule === 3 && (
              <div className="space-y-6">
                {/* Top Header & Prominent Interactive Plan B Switch */}
                <div className="rounded-2xl bg-limestone/80 border border-gold/50 p-4 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-mono text-xs uppercase tracking-wider text-sage font-semibold">
                        {dayLog.location}
                      </span>
                      <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-sand text-ink/80">
                        {dayLog.coordinates}
                      </span>
                      <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-sage/15 text-sage font-medium flex items-center gap-1">
                        <Headphones className="w-3 h-3" strokeWidth={1.5} />
                        {dayLog.audioPillCode}
                      </span>
                    </div>
                    <h4 className="font-serif font-semibold text-xl sm:text-2xl text-ink">
                      {dayLog.dayTitle}
                    </h4>
                  </div>

                  {/* Interactive Plan B Toggle Button */}
                  <button
                    type="button"
                    onClick={() => setPlanBActive((prev) => !prev)}
                    aria-pressed={planBActive}
                    className={`min-h-[52px] px-5 py-3 rounded-2xl font-sans text-xs sm:text-sm font-semibold transition-all flex items-center gap-3 shadow-editorial shrink-0 border ${
                      planBActive
                        ? 'bg-terracotta text-sand border-terracotta'
                        : 'bg-sand hover:bg-sage text-ink hover:text-sand border-terracotta/60'
                    }`}
                  >
                    {planBActive ? (
                      <>
                        <Sun className="w-5 h-5 text-gold-light shrink-0" strokeWidth={1.5} />
                        <div className="text-left">
                          <span className="block text-[10px] font-mono uppercase opacity-90">
                            PLAN B CLIMÁTICO ACTIVO · PULSA PARA VOLVER
                          </span>
                          <span>☀️ Volver al Plan A (Día Soleado)</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <CloudRain className="w-5 h-5 text-terracotta shrink-0" strokeWidth={1.5} />
                        <div className="text-left">
                          <span className="block text-[10px] font-mono uppercase text-terracotta">
                            PRUEBA EL INTERRUPTOR EN VIVO:
                          </span>
                          <span>🌧️ ¿Y si hoy llueve o estamos cansados? Activar Plan B</span>
                        </div>
                      </>
                    )}
                  </button>
                </div>

                {/* Banner if Plan B is active */}
                {planBActive && (
                  <div className="p-4 rounded-2xl bg-terracotta/15 border border-terracotta/40 flex items-start gap-3">
                    <CloudRain
                      className="w-5 h-5 text-terracotta shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <div>
                      <span className="font-mono text-xs font-semibold text-terracotta block">
                        {dayLog.planB.weatherTrigger}
                      </span>
                      <p className="font-serif italic text-base sm:text-lg text-ink mt-0.5">
                        {dayLog.planB.andreaMessage}
                      </p>
                    </div>
                  </div>
                )}

                {/* Day Schedule Timeline (Mañana / Mediodía / Tarde / Noche) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentSchedule.map((slot, idx) => (
                    <div
                      key={`${planBActive ? 'B' : 'A'}-${idx}`}
                      className={`p-5 rounded-2xl border transition-all ${
                        planBActive
                          ? 'bg-limestone/90 border-terracotta/45'
                          : 'bg-limestone/55 border-sage-mist/40'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-sand text-sage">
                          {slot.time} · {slot.period}
                        </span>
                        <span className="font-mono text-[10px] text-terracotta font-medium">
                          {slot.logisticsCode}
                        </span>
                      </div>
                      <h5 className="font-serif font-semibold text-xl text-ink mb-1.5">
                        {slot.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-ink/85 leading-relaxed">
                        {slot.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MODULE 4: CURADURÍA DE REFUGIOS CON ALMA */}
            {activeModule === 4 && (
              <div className="space-y-6">
                <div className="pb-4 border-b border-sage-mist/30">
                  <span className="font-mono text-xs uppercase tracking-widest text-sage font-semibold">
                    MÓDULO 04 · ALOJAMIENTOS BOUTIQUE SIN INTERMEDIARIOS
                  </span>
                  <h4 className="font-serif font-semibold text-2xl sm:text-3xl text-ink mt-0.5">
                    Curaduría de Refugios con Alma ({demo.countryName})
                  </h4>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                  {demo.stays.map((stay) => (
                    <div
                      key={stay.id}
                      className="rounded-2xl bg-limestone/70 border border-sage-mist/40 p-5 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-sage font-semibold">
                            {stay.location}
                          </span>
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-sand text-ink/75">
                            {stay.coordinates}
                          </span>
                        </div>

                        <h5 className="font-serif font-semibold text-xl sm:text-2xl text-ink mb-1">
                          {stay.name}
                        </h5>
                        <div className="font-mono text-xs text-terracotta font-medium mb-4">
                          {stay.pricePerNight}
                        </div>

                        <div className="space-y-3 text-xs sm:text-sm mb-5">
                          <div className="p-3 rounded-xl bg-sand border border-sage-mist/30">
                            <span className="font-mono text-[10px] uppercase text-sage font-semibold block mb-1">
                              POR QUÉ LO HE ELEGIDO PARA VOSOTROS:
                            </span>
                            <p className="text-ink/85 leading-snug">{stay.whyChosen}</p>
                          </div>

                          <div className="p-3 rounded-xl bg-sage/10 border border-sage/35">
                            <span className="font-mono text-[10px] uppercase text-sage font-semibold block mb-1">
                              QUÉ HABITACIÓN EXACTA PEDIR:
                            </span>
                            <p className="text-ink font-medium leading-snug">
                              {stay.exactRoomToAsk}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-sage-mist/30 flex items-center justify-between text-xs font-mono text-sage">
                        <span>{stay.directBookingUrl}</span>
                        <ExternalLink className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MODULE 5: MAPA GASTRONÓMICO Y FUERA DE RADAR */}
            {activeModule === 5 && (
              <div className="space-y-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-sage-mist/30">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-sage font-semibold">
                      MÓDULO 05 · CARTOGRAFÍA PRIVADA GEOLOCALIZADA
                    </span>
                    <h4 className="font-serif font-semibold text-2xl sm:text-3xl text-ink mt-0.5">
                      Mapa Gastronómico y Fuera de Radar
                    </h4>
                  </div>

                  {/* Pin Category Filter Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { id: 'all', label: 'Todos los Pines' },
                      { id: 'cafe', label: '☕ Cafés Especialidad' },
                      { id: 'food', label: '🍜 Comida Local Segura' },
                      { id: 'viewpoint', label: '🌅 Miradores sin Autobuses' },
                      { id: 'utility', label: '🏧 Cajeros 0% / Utilidades' },
                    ].map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() =>
                          setPinFilter(
                            f.id as 'all' | 'cafe' | 'food' | 'viewpoint' | 'utility'
                          )
                        }
                        className={`min-h-[38px] px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          pinFilter === f.id
                            ? 'bg-sage text-sand'
                            : 'bg-limestone text-ink/80 hover:bg-limestone/90'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Interactive Vector Map Canvas (7 cols) */}
                  <div className="lg:col-span-7 relative h-[280px] sm:h-[340px] rounded-2xl bg-limestone border border-gold/45 overflow-hidden p-4">
                    {/* Topographic Editorial SVG Grid Background */}
                    <svg
                      viewBox="0 0 600 340"
                      className="absolute inset-0 w-full h-full opacity-35"
                      aria-hidden="true"
                    >
                      <defs>
                        <pattern
                          id="mapGrid"
                          width="40"
                          height="40"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke="#8FA392"
                            strokeWidth="0.7"
                          />
                        </pattern>
                      </defs>
                      <rect width="600" height="340" fill="url(#mapGrid)" />
                      <path
                        d="M 40 260 Q 180 180, 290 210 T 550 95"
                        fill="none"
                        stroke="#C5A059"
                        strokeWidth="2"
                        strokeDasharray="5 5"
                      />
                      <path
                        d="M 90 60 Q 260 140, 420 80 T 560 270"
                        fill="none"
                        stroke="#4A5D4E"
                        strokeWidth="1.2"
                        strokeOpacity="0.5"
                      />
                    </svg>

                    <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-sage">
                      <span>CAPA ACTIVA: {demo.countryName.toUpperCase()} · OFFLINE READY</span>
                      <span>TOCA UN PIN PARA ABRIR SU FICHA</span>
                    </div>

                    {/* Interactive Pins */}
                    {filteredPins.map((pin) => {
                      const isSelected = activePin?.id === pin.id;
                      return (
                        <button
                          key={pin.id}
                          type="button"
                          onClick={() => setSelectedPinId(pin.id)}
                          style={{
                            left: `${pin.xPercent}%`,
                            top: `${pin.yPercent}%`,
                          }}
                          className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 px-3 py-1.5 rounded-full font-mono text-[11px] font-medium flex items-center gap-1.5 shadow-editorial transition-transform ${
                            isSelected
                              ? 'bg-terracotta text-sand scale-110 ring-4 ring-terracotta/25'
                              : 'bg-sand text-ink border border-sage hover:scale-105'
                          }`}
                        >
                          {pin.category === 'cafe' && <Coffee className="w-3.5 h-3.5" />}
                          {pin.category === 'food' && <Utensils className="w-3.5 h-3.5" />}
                          {pin.category === 'viewpoint' && <Eye className="w-3.5 h-3.5" />}
                          {pin.category === 'utility' && <PlusCircle className="w-3.5 h-3.5" />}
                          <span className="max-w-[130px] truncate">{pin.name.split('(')[0]}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Pin Inspector Card (5 cols) */}
                  <div className="lg:col-span-5 rounded-2xl bg-limestone/80 border border-sage-mist/40 p-5 sm:p-6">
                    {activePin && (
                      <>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-sage text-sand">
                            {activePin.categoryLabel}
                          </span>
                          <span className="font-mono text-xs text-sage">
                            {activePin.coordinates}
                          </span>
                        </div>

                        <h5 className="font-serif font-semibold text-2xl text-ink mb-1">
                          {activePin.name}
                        </h5>
                        <span className="font-mono text-xs text-terracotta block mb-4">
                          Ciudad: {activePin.city}
                        </span>

                        <div className="space-y-3 text-xs sm:text-sm">
                          <div className="p-3.5 rounded-xl bg-sand border border-sage-mist/30">
                            <span className="font-mono text-[10px] uppercase text-sage font-semibold block mb-1">
                              POR QUÉ ESTÁ EN MI MAPA SECRETO:
                            </span>
                            <p className="text-ink/90 leading-relaxed">{activePin.whySpecial}</p>
                          </div>

                          <div className="p-3.5 rounded-xl bg-sage/10 border border-sage/35">
                            <span className="font-mono text-[10px] uppercase text-sage font-semibold block mb-1">
                              QUÉ PEDIR / CÓMO HACERLO:
                            </span>
                            <p className="text-ink font-medium leading-relaxed">
                              {activePin.whatToOrderOrDo}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* MODULE 6: BILLETERA DIGITAL Y PRESUPUESTO TRANSPARENTE */}
            {activeModule === 6 && (
              <div className="space-y-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-sage-mist/30">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-sage font-semibold">
                      MÓDULO 06 · CERO SOBREPRECIOS OCULTOS
                    </span>
                    <h4 className="font-serif font-semibold text-2xl sm:text-3xl text-ink mt-0.5">
                      Billetera Digital y Desglose de Presupuesto Real ({demo.countryName})
                    </h4>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-sage text-sand font-mono text-xs flex items-center gap-4">
                    <div>
                      <span className="block text-[10px] text-gold-light">
                        PRECIO REAL DIRECTO
                      </span>
                      <strong className="text-lg">
                        {demo.budget.perPersonDirectTotal} {demo.budget.currency} / pax
                      </strong>
                    </div>
                    <div className="border-l border-sand/25 pl-4">
                      <span className="block text-[10px] text-sand/75 line-through">
                        AGENCIA: {demo.budget.traditionalAgencyTotal} €
                      </span>
                      <strong className="text-gold-light">
                        AHORRAS{' '}
                        {demo.budget.traditionalAgencyTotal - demo.budget.perPersonDirectTotal} €
                      </strong>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-ink/85 bg-limestone/70 p-4 rounded-2xl border border-gold/40">
                  💡 <strong>Transparencia Radical:</strong> {demo.budget.designFeeNote}
                </p>

                {/* Itemized Monospace Table */}
                <div className="space-y-3">
                  {demo.budget.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-limestone/55 border border-sage-mist/35 flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1 max-w-2xl">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-sage font-semibold">
                          {item.code}
                        </span>
                        <h5 className="font-serif font-semibold text-lg sm:text-xl text-ink">
                          {item.category}
                        </h5>
                        <p className="text-xs text-ink/75">{item.detail}</p>
                      </div>

                      <div className="flex items-center gap-4 shrink-0 font-mono">
                        <div className="text-right">
                          <span className="block text-[10px] text-ink/55">AGENCIA TRADICIONAL</span>
                          <span className="text-xs text-ink/60 line-through">
                            {item.agencyCost} €
                          </span>
                        </div>
                        <div className="px-3.5 py-2 rounded-xl bg-sand border border-sage/40 text-right">
                          <span className="block text-[10px] text-sage font-semibold">
                            TARIFA DIRECTA
                          </span>
                          <span className="text-sm sm:text-base font-semibold text-ink">
                            {item.directCost} €
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Bar inside the Lookbook Simulator */}
          <div className="bg-limestone/85 border-t border-sage-mist/35 px-4 sm:px-7 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-xs sm:text-sm text-ink/85">
              ¿Quieres recibir este <strong>Entregable de 6 Módulos</strong> personalizado al
              milímetro para vuestro próximo viaje?
            </div>
            <button
              type="button"
              onClick={() => onNavigate('taller-hada')}
              className="min-h-[48px] px-6 py-2.5 rounded-full bg-terracotta hover:bg-terracotta-hover text-sand font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm shrink-0"
            >
              <span>Crear mi ruta personalizada</span>
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
