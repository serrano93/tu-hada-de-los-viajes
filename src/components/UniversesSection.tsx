import React, { useState } from 'react';
import {
  Compass,
  Calendar,
  Clock,
  Sparkles,
  MapPin,
  ArrowRight,
  Globe,
  ChevronDown,
  Check,
  Info,
} from 'lucide-react';
import { TRAVEL_DESTINATIONS, TravelDestination } from '../data/travelData';
import { ActiveTargetCoords } from './ScrollTravelBackground';

interface UniversesSectionProps {
  onSelectGlobeTarget: (target: ActiveTargetCoords | null) => void;
  onStartWizardWithDestination: (destinationId: string) => void;
}

type RegionFilter = 'Todos' | 'Europa' | 'América' | 'Asia' | 'África & Atlántico';

const REGION_FILTERS: { id: RegionFilter; label: string; count: number }[] = [
  { id: 'Todos', label: 'Todos los destinos', count: 13 },
  { id: 'Europa', label: 'Europa', count: 6 },
  { id: 'América', label: 'América', count: 3 },
  { id: 'Asia', label: 'Asia', count: 2 },
  { id: 'África & Atlántico', label: 'Marruecos & Madeira', count: 2 },
];

export const UniversesSection: React.FC<UniversesSectionProps> = ({
  onSelectGlobeTarget,
  onStartWizardWithDestination,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<RegionFilter>('Todos');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredDestinations =
    selectedRegion === 'Todos'
      ? TRAVEL_DESTINATIONS
      : TRAVEL_DESTINATIONS.filter((d) => d.regionTag === selectedRegion);

  const handleToggleDestination = (dest: TravelDestination) => {
    const isOpening = expandedId !== dest.id;
    setExpandedId(isOpening ? dest.id : null);
    onSelectGlobeTarget({
      lat: dest.lat,
      lng: dest.lng,
      label: dest.name,
      coordsText: dest.coordinates,
    });
  };

  return (
    <section
      id="destinos"
      className="relative z-10 py-14 md:py-22 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-limestone border border-sage-mist/40 mb-4">
          <Globe className="w-3.5 h-3.5 text-sage" strokeWidth={1.5} />
          <span className="font-mono text-[11px] uppercase tracking-widest text-sage font-medium">
            CATÁLOGO DE AUTOR · 13 DESTINOS CONECTADOS AL GLOBO 3D
          </span>
        </div>
        <h2 className="font-serif font-semibold text-ink section-display-title tracking-tight mb-3">
          13 destinos por el mundo para{' '}
          <em className="italic font-normal text-sage">diseñar a tu medida.</em>
        </h2>
        <p className="text-base sm:text-lg text-ink/80 leading-relaxed">
          Explora nuestras propuestas por Europa, Marruecos, América y Asia. Toca cualquier destino
          para desplegar qué incluye y ver un ejemplo orientativo de ruta.
        </p>
      </div>

      {/* Mandatory Highlighted Flexibility Notice */}
      <div
        role="note"
        aria-label="Aviso de flexibilidad de itinerarios"
        className="rounded-2xl bg-limestone/95 border-l-4 border-terracotta border-y border-r border-y-gold/40 border-r-gold/40 p-4 sm:p-5 mb-8 shadow-editorial flex items-start gap-3.5"
      >
        <div className="w-9 h-9 rounded-full bg-sand border border-gold/50 flex items-center justify-center shrink-0 mt-0.5 text-terracotta">
          <Info className="w-4 h-4" strokeWidth={1.5} />
        </div>
        <div className="text-xs sm:text-sm md:text-base text-ink leading-relaxed">
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-terracotta font-semibold block mb-0.5">
            NOTA DE FLEXIBILIDAD ARTESANAL · 100% PERSONALIZABLE
          </span>
          <p>
            Todos los itinerarios y duraciones mostrados a continuación son{' '}
            <strong className="font-semibold text-ink underline decoration-gold/60 underline-offset-4">
              ejemplos orientativos
            </strong>
            . Cada viaje es 100% flexible y se adapta o amplía según los días, gustos y ritmo que
            cada viajero quiera.
          </p>
        </div>
      </div>

      {/* Region Filter Pills (Thumb-friendly horizontal scroll on mobile) */}
      <div
        className="flex items-center gap-2 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-3 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0"
        role="tablist"
        aria-label="Filtrar destinos por región"
      >
        {REGION_FILTERS.map((rf) => {
          const active = selectedRegion === rf.id;
          return (
            <button
              key={rf.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setSelectedRegion(rf.id)}
              className={`snap-start shrink-0 min-h-[46px] px-4 py-2 rounded-full font-sans text-xs sm:text-sm font-medium transition-all flex items-center gap-2 border ${
                active
                  ? 'bg-sage text-sand border-sage shadow-sm'
                  : 'bg-limestone/80 text-ink hover:bg-limestone border-sage-mist/40'
              }`}
            >
              <span>{rf.label}</span>
              <span
                className={`font-mono text-[10px] px-2 py-0.5 rounded-full ${
                  active ? 'bg-sand/20 text-sand' : 'bg-sand text-sage'
                }`}
              >
                {rf.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 13 Destinations Progressive Disclosure Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-6 items-start">
        {filteredDestinations.map((dest) => {
          const isExpanded = expandedId === dest.id;

          return (
            <article
              key={dest.id}
              className={`rounded-3xl bg-limestone/90 backdrop-blur-md border transition-all overflow-hidden shadow-editorial flex flex-col ${
                isExpanded
                  ? 'border-terracotta ring-1 ring-terracotta/30 md:col-span-2 lg:col-span-3 shadow-editorial-lg'
                  : 'border-sage-mist/45 hover:border-gold/60'
              }`}
            >
              {/* Default Clean Visual Card Header */}
              <div
                className={`grid grid-cols-1 ${
                  isExpanded ? 'lg:grid-cols-12' : ''
                }`}
              >
                {/* Photographic Frame */}
                <div
                  className={`relative overflow-hidden bg-sage-dark ${
                    isExpanded
                      ? 'lg:col-span-5 min-h-[250px] sm:min-h-[300px]'
                      : 'h-56 sm:h-60'
                  }`}
                >
                  <img
                    src={dest.imageUrl}
                    alt={dest.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(30, 32, 29, 0.80) 0%, rgba(30, 32, 29, 0.18) 55%, rgba(30, 32, 29, 0.12) 100%)',
                    }}
                  />

                  {/* Top Badges: Region & GPS */}
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sand/90 backdrop-blur-md font-mono text-[10px] text-ink font-medium">
                      <MapPin className="w-3 h-3 text-terracotta shrink-0" strokeWidth={1.5} />
                      {dest.coordinates}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-sage/90 backdrop-blur-md text-sand font-mono text-[10px] uppercase tracking-wider">
                      {dest.regionTag}
                    </span>
                  </div>

                  {/* Bottom Overlay: Atmosphere Tags */}
                  <div className="absolute bottom-3.5 inset-x-3.5 flex flex-wrap gap-1.5">
                    {dest.atmosphereTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full bg-sand/20 backdrop-blur-md border border-sand/30 text-[10px] font-mono text-sand"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Summary Content */}
                <div
                  className={`p-5 sm:p-6 flex flex-col justify-between bg-sand/90 ${
                    isExpanded ? 'lg:col-span-7' : ''
                  }`}
                >
                  <div>
                    {/* Orientative Duration Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-limestone border border-gold/40 font-mono text-[11px] text-terracotta font-medium mb-3">
                      <Clock className="w-3.5 h-3.5 shrink-0" strokeWidth={1.5} />
                      <span>{dest.durationBadge}</span>
                    </div>

                    <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-ink leading-tight mb-2">
                      {dest.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-ink/85 leading-relaxed mb-5">
                      {dest.summary}
                    </p>
                  </div>

                  {/* Progressive Disclosure Accordion Trigger Button */}
                  <div className="pt-3 border-t border-sage-mist/30 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => handleToggleDestination(dest)}
                      aria-expanded={isExpanded}
                      aria-controls={`drawer-${dest.id}`}
                      className={`w-full sm:w-auto flex-1 min-h-[46px] px-4 py-2.5 rounded-full font-sans text-xs font-semibold transition-all flex items-center justify-between gap-2 border ${
                        isExpanded
                          ? 'bg-sage text-sand border-sage'
                          : 'bg-limestone/85 hover:bg-limestone text-ink border-sage-mist/50'
                      }`}
                    >
                      <span>
                        {isExpanded
                          ? 'Ocultar detalles y ejemplo de ruta'
                          : 'Explorar qué incluye y ejemplo de ruta'}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-gold-light' : 'text-terracotta'
                        }`}
                        strokeWidth={1.5}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Expandable Drawer Content (Progressive Disclosure via CSS interpolate-size) */}
              <div
                id={`drawer-${dest.id}`}
                data-open={isExpanded ? 'true' : 'false'}
                className="expandable-drawer bg-sand border-t border-sage-mist/35"
              >
                {isExpanded && (
                  <div className="p-5 sm:p-8 space-y-6">
                    {/* Expanded Editorial Description & Metadata */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      <div className="lg:col-span-7 space-y-3">
                        <span className="font-mono text-[11px] uppercase tracking-widest text-sage font-semibold block">
                          LA EXPERIENCIA EN {dest.name.toUpperCase()}
                        </span>
                        <p className="text-sm sm:text-base text-ink/90 leading-relaxed">
                          {dest.expandedDescription}
                        </p>
                      </div>

                      <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-limestone/70 border border-sage-mist/35">
                        <div className="flex items-start gap-2.5">
                          <Calendar
                            className="w-4 h-4 text-sage shrink-0 mt-0.5"
                            strokeWidth={1.5}
                          />
                          <div>
                            <span className="font-mono text-[10px] uppercase text-ink/60 block">
                              ÉPOCA RECOMENDADA
                            </span>
                            <span className="font-mono text-xs font-medium text-ink">
                              {dest.bestSeason}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <Sparkles
                            className="w-4 h-4 text-terracotta shrink-0 mt-0.5"
                            strokeWidth={1.5}
                          />
                          <div>
                            <span className="font-mono text-[10px] uppercase text-ink/60 block">
                              TEMPERATURA MEDIA
                            </span>
                            <span className="font-mono text-xs font-medium text-ink">
                              {dest.avgTemp}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Optional Dual Modalities (Specifically for Marruecos: Escapada 3 días vs Ruta Completa 7+ días) */}
                    {dest.modalities && dest.modalities.length > 0 && (
                      <div className="space-y-3">
                        <span className="font-mono text-[11px] uppercase tracking-widest text-terracotta font-semibold block">
                          DOS MODALIDADES DE EJEMPLO (100% PERSONALIZABLES):
                        </span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {dest.modalities.map((mod, mIdx) => (
                            <div
                              key={mIdx}
                              className="p-5 rounded-2xl bg-limestone/75 border border-gold/50 flex flex-col justify-between space-y-2"
                            >
                              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                <span className="font-serif font-semibold text-xl text-ink">
                                  {mod.title}
                                </span>
                                <span className="px-2.5 py-1 rounded-full bg-terracotta text-sand font-mono text-[11px] font-medium">
                                  {mod.duration}
                                </span>
                              </div>
                              <p className="text-xs sm:text-sm text-ink/85 leading-relaxed">
                                {mod.detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* What We Include + Orientative Route Structure */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                      {/* Left: What We Include in Your Custom Design */}
                      <div className="lg:col-span-5 p-5 rounded-2xl bg-sage/10 border border-sage/35 space-y-3">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-sage font-semibold flex items-center gap-1.5">
                          <Compass className="w-4 h-4 text-gold" strokeWidth={1.5} />
                          QUÉ INCLUYE EL DISEÑO DE TU VIAJE
                        </span>
                        <ul className="space-y-2.5">
                          {dest.whatWeInclude.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/90"
                            >
                              <Check
                                className="w-4 h-4 text-sage shrink-0 mt-0.5"
                                strokeWidth={1.5}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: Orientative Route Example */}
                      <div className="lg:col-span-7 p-5 rounded-2xl bg-limestone/65 border border-sage-mist/40 space-y-3.5">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-mono text-[11px] uppercase tracking-wider text-terracotta font-semibold">
                            EJEMPLO ORIENTATIVO DE ESTRUCTURA DE RUTA
                          </span>
                          <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-sand text-sage border border-sage-mist/35">
                            Adaptable a tus días
                          </span>
                        </div>

                        <div className="space-y-2.5">
                          {dest.orientativeRoute.map((step, sIdx) => (
                            <div
                              key={sIdx}
                              className="p-3.5 rounded-xl bg-sand border border-sage-mist/30 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3.5"
                            >
                              <span className="font-mono text-[11px] font-semibold text-terracotta shrink-0 sm:w-44">
                                {step.stageLabel}
                              </span>
                              <div className="flex-1">
                                <h4 className="font-serif font-semibold text-base sm:text-lg text-ink leading-snug mb-0.5">
                                  {step.title}
                                </h4>
                                <p className="text-xs text-ink/80 leading-relaxed">
                                  {step.highlights}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Flexibility Note & Direct CTA */}
                    <div className="pt-4 border-t border-sage-mist/35 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <p className="text-xs text-ink/75 italic max-w-xl">
                        * {dest.flexibilityNote}
                      </p>

                      <button
                        type="button"
                        onClick={() => onStartWizardWithDestination(dest.id)}
                        className="min-h-[48px] px-6 py-3 rounded-full bg-terracotta hover:bg-terracotta-hover text-sand font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-editorial shrink-0 transition-all"
                      >
                        <span>Personalizar mi viaje a {dest.name}</span>
                        <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
