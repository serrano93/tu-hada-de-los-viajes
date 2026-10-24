import React, { useState } from 'react';
import {
  Compass,
  Calendar,
  Clock,
  Thermometer,
  AlertOctagon,
  Sparkles,
  MapPin,
  ArrowRight,
  Globe,
} from 'lucide-react';
import { TRAVEL_UNIVERSES, TravelUniverse } from '../data/travelData';
import { ActiveTargetCoords } from './ScrollTravelBackground';

interface UniversesSectionProps {
  onSelectGlobeTarget: (target: ActiveTargetCoords | null) => void;
  onStartWizardWithDestination: (universeId: string) => void;
}

export const UniversesSection: React.FC<UniversesSectionProps> = ({
  onSelectGlobeTarget,
  onStartWizardWithDestination,
}) => {
  const [activeUniverse, setActiveUniverse] = useState<TravelUniverse>(
    TRAVEL_UNIVERSES[0]
  );

  const handleSelectUniverse = (u: TravelUniverse) => {
    setActiveUniverse(u);
    onSelectGlobeTarget({
      lat: u.lat,
      lng: u.lng,
      label: u.shortTitle,
      coordsText: u.coordinates,
    });
  };

  return (
    <section
      id="universos"
      className="relative z-10 py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-limestone border border-sage-mist/40 mb-4">
            <Globe className="w-3.5 h-3.5 text-sage" strokeWidth={1.5} />
            <span className="font-mono text-[11px] uppercase tracking-widest text-sage font-medium">
              SECCIÓN 04 · LOS 5 UNIVERSOS DE VIAJE · SINCRONIZADO CON EL GLOBO 3D
            </span>
          </div>
          <h2 className="font-serif font-semibold text-ink section-display-title tracking-tight mb-3">
            Cinco territorios que conozco{' '}
            <em className="italic font-normal text-sage">calle a calle y sendero a sendero.</em>
          </h2>
          <p className="text-base sm:text-lg text-ink/80 leading-relaxed">
            No diseño rutas a destinos en los que no sepa cómo huele el café por la mañana o qué
            carretera secundaria evita las caravanas. Desliza y toca un universo para explorar su
            cartografía editorial.
          </p>
        </div>

        <div className="font-mono text-xs text-sage bg-limestone/80 border border-gold/40 px-4 py-2.5 rounded-2xl shrink-0">
          COORDENADA ACTIVA:{' '}
          <strong className="text-ink">{activeUniverse.coordinates}</strong>
        </div>
      </div>

      {/* Horizontal Swipeable Tabs (snap-x for Mobile First) */}
      <div
        className="flex items-center gap-2.5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-3 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0"
        role="tablist"
        aria-label="Los 5 universos de viaje de Andrea"
      >
        {TRAVEL_UNIVERSES.map((u, idx) => {
          const isSelected = u.id === activeUniverse.id;
          return (
            <button
              key={u.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => handleSelectUniverse(u)}
              className={`snap-start shrink-0 min-h-[50px] px-5 py-2.5 rounded-full font-sans text-xs sm:text-sm font-medium transition-all flex items-center gap-2.5 border ${
                isSelected
                  ? 'bg-sage text-sand border-sage shadow-editorial'
                  : 'bg-limestone/85 text-ink hover:bg-limestone border-sage-mist/40'
              }`}
            >
              <span
                className={`font-mono text-[11px] ${
                  isSelected ? 'text-gold-light' : 'text-terracotta'
                }`}
              >
                0{idx + 1}
              </span>
              <span>{u.shortTitle}</span>
            </button>
          );
        })}
      </div>

      {/* Detailed Editorial Universe Card */}
      <div className="rounded-3xl bg-limestone/90 backdrop-blur-md border border-gold/45 overflow-hidden shadow-editorial-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Visual / Photographic Frame (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[290px] sm:min-h-[360px] lg:min-h-full bg-sage-dark overflow-hidden">
            <img
              src={activeUniverse.imageUrl}
              alt={activeUniverse.imageAlt}
              loading="lazy"
              className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto opacity-90 transition-all duration-700"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(30, 32, 29, 0.85) 0%, rgba(30, 32, 29, 0.25) 55%, rgba(30, 32, 29, 0.15) 100%)',
              }}
            />

            {/* Top GPS & Savings Overlay */}
            <div className="absolute top-4 inset-x-4 flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sand/90 backdrop-blur-md font-mono text-[11px] text-ink font-medium">
                <MapPin className="w-3.5 h-3.5 text-terracotta" strokeWidth={1.5} />
                {activeUniverse.coordinates}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-terracotta text-sand font-mono text-[11px] font-medium">
                {activeUniverse.hoursSaved}
              </span>
            </div>

            {/* Bottom Atmosphere Tags & Signature Moment */}
            <div className="absolute bottom-4 inset-x-4 text-sand space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {activeUniverse.atmosphereTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-sand/15 backdrop-blur-md border border-sand/25 text-[11px] font-mono text-sand"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="p-3.5 rounded-2xl bg-ink/75 backdrop-blur-md border border-gold/40">
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold-light block mb-1">
                  INSTANTE INOLVIDABLE DE ESTA RUTA
                </span>
                <p className="font-serif italic text-base sm:text-lg text-sand leading-snug">
                  «{activeUniverse.signatureMoment}»
                </p>
              </div>
            </div>
          </div>

          {/* Right Editorial Specification (7 cols) */}
          <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10 flex flex-col justify-between bg-sand/90">
            <div>
              {/* Title & Subtitle */}
              <div className="mb-6">
                <h3 className="font-serif font-semibold text-2xl sm:text-3xl lg:text-4xl text-ink leading-tight mb-2">
                  {activeUniverse.title}
                </h3>
                <p className="text-sm sm:text-base text-ink/80 leading-relaxed">
                  {activeUniverse.subtitle}
                </p>
              </div>

              {/* Technical Telemetry Metadata Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-limestone/70 border border-sage-mist/35 mb-6">
                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-sage shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <span className="font-mono text-[10px] uppercase text-ink/60 block">
                      MEJOR ÉPOCA
                    </span>
                    <span className="font-mono text-xs font-medium text-ink">
                      {activeUniverse.bestSeason}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-terracotta shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <span className="font-mono text-[10px] uppercase text-ink/60 block">
                      DURACIÓN ÓPTIMA
                    </span>
                    <span className="font-mono text-xs font-medium text-ink">
                      {activeUniverse.recommendedDays}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Thermometer className="w-4 h-4 text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <span className="font-mono text-[10px] uppercase text-ink/60 block">
                      RANGO TÉRMICO
                    </span>
                    <span className="font-mono text-xs font-medium text-ink">
                      {activeUniverse.avgTemp}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dual Contrast Cards: Fatal Mistake vs Andrea's Magic Touch */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {/* Fatal Mistake */}
                <div className="p-4 sm:p-5 rounded-2xl bg-limestone/60 border border-terracotta/40">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-terracotta font-semibold mb-2">
                    <AlertOctagon className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                    <span>El error que arruina el 80% de los viajes aquí</span>
                  </div>
                  <p className="text-xs sm:text-sm text-ink/85 leading-relaxed">
                    {activeUniverse.fatalMistake}
                  </p>
                </div>

                {/* Andrea's Magic Touch */}
                <div className="p-4 sm:p-5 rounded-2xl bg-sage/10 border border-sage/45">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-sage font-semibold mb-2">
                    <Sparkles className="w-4 h-4 text-gold shrink-0" strokeWidth={1.5} />
                    <span>El toque mágico de Andrea</span>
                  </div>
                  <p className="text-xs sm:text-sm text-ink leading-relaxed font-medium">
                    {activeUniverse.andreaMagicTouch}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="pt-4 border-t border-sage-mist/35 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-ink/75">
                <Compass className="w-4 h-4 text-gold shrink-0" strokeWidth={1.5} />
                <span>
                  Incluye el Entregable Estrella de 6 módulos + Píldoras de Audio + Plan B diario
                </span>
              </div>

              <button
                type="button"
                onClick={() => onStartWizardWithDestination(activeUniverse.id)}
                className="min-h-[48px] px-6 py-3 rounded-full bg-terracotta hover:bg-terracotta-hover text-sand font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-editorial shrink-0 transition-all"
              >
                <span>Diseñar mi viaje a {activeUniverse.shortTitle}</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
