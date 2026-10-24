import React, { useState } from 'react';
import {
  Compass,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  BookOpen,
  Layers,
  CheckCircle2,
  MapPin,
} from 'lucide-react';
import { HERO_SAVINGS_DESTINATIONS, HeroSavingsDestination } from '../data/travelData';
import { ActiveTargetCoords } from './ScrollTravelBackground';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onSelectGlobeTarget: (target: ActiveTargetCoords | null) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onSelectGlobeTarget,
}) => {
  const [selectedDest, setSelectedDest] = useState<HeroSavingsDestination>(
    HERO_SAVINGS_DESTINATIONS[0]
  );

  const handleSelectDest = (dest: HeroSavingsDestination) => {
    setSelectedDest(dest);
    onSelectGlobeTarget({
      lat: dest.lat,
      lng: dest.lng,
      label: dest.name,
      coordsText: dest.coordinates,
    });
  };

  return (
    <section
      id="hero"
      className="relative z-10 pt-6 pb-16 md:pt-14 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Editorial Column (7 cols on Desktop) */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Top Monospace Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-limestone/90 border border-gold/45 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-sage font-medium">
              DISEÑO DE VIAJES DE AUTOR · SIN PAQUETES EN SERIE
            </span>
          </div>

          {/* Main Editorial Display Headline */}
          <h1 className="font-serif font-semibold text-ink hero-display-title tracking-tight mb-6">
            Viaja a tu aire con la magia de llevar a una{' '}
            <em className="italic font-normal text-sage underline decoration-gold/50 decoration-1 underline-offset-8">
              guía profesional en el bolsillo.
            </em>
          </h1>

          {/* Editorial Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-ink/85 leading-relaxed mb-8 editorial-prose">
            Soy <strong className="font-semibold text-ink">Andrea</strong>, guía turística de
            profesión y tu Hada de los Viajes. Transformo 40 horas de pestañas abiertas, dudas
            logísticas y miedo a equivocarte en una ruta artesanal diseñada al milímetro para ti por{' '}
            <span className="text-sage font-medium">
              Europa, Marruecos, Costa Rica, Panamá, China o Vietnam.
            </span>
          </p>

          {/* Dual CTA Buttons (Minimum 48px height for mobile thumbs) */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            <button
              type="button"
              onClick={() => onNavigate('taller-hada')}
              className="min-h-[52px] px-7 py-3.5 rounded-full bg-terracotta hover:bg-terracotta-hover text-sand font-semibold text-sm sm:text-base shadow-editorial flex items-center justify-center gap-2.5 transition-all active:scale-[0.99]"
            >
              <span>Empezar a diseñar mi viaje</span>
              <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('entregable-estrella')}
              className="min-h-[52px] px-6 py-3.5 rounded-full bg-sand/85 hover:bg-limestone border border-sage text-sage font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors"
            >
              <BookOpen className="w-4 h-4 shrink-0" strokeWidth={1.5} />
              <span>Ver un itinerario real por dentro</span>
            </button>
          </div>

          {/* Editorial Credentials Strip */}
          <div className="w-full grid grid-cols-3 gap-3 pt-6 border-t border-sage-mist/35">
            <div>
              <div className="font-mono text-xs sm:text-sm font-medium text-sage">
                0% COMISIONES
              </div>
              <p className="text-xs text-ink/75 mt-0.5">
                Reservas a precio directo de hotel sin sobreprecios ocultos.
              </p>
            </div>
            <div>
              <div className="font-mono text-xs sm:text-sm font-medium text-terracotta">
                +40H AHORRADAS
              </div>
              <p className="text-xs text-ink/75 mt-0.5">
                De investigación, foros contradictorios y estrés logístico.
              </p>
            </div>
            <div>
              <div className="font-mono text-xs sm:text-sm font-medium text-ink">
                PLAN A + PLAN B
              </div>
              <p className="text-xs text-ink/75 mt-0.5">
                Alternativa climática y píldoras de audio en destino.
              </p>
            </div>
          </div>
        </div>

        {/* Right Interactive Micro-Widget Column: "Tu Ahorro Real" (5 cols on Desktop) */}
        <div className="lg:col-span-5 w-full">
          <div className="rounded-3xl bg-limestone/90 backdrop-blur-md border border-gold/45 p-5 sm:p-6 shadow-editorial-lg relative overflow-hidden">
            {/* Subtle Corner Astronomical Ornament */}
            <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-sage-mist/35">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-gold" strokeWidth={1.5} />
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-sage block">
                    CALCULADORA DE FRICCIÓN CERO
                  </span>
                  <h2 className="font-serif font-semibold text-xl text-ink leading-tight">
                    Tu Ahorro Real por Destino
                  </h2>
                </div>
              </div>
              <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-sand text-sage border border-sage-mist/40">
                {selectedDest.regionCode}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-ink/80 mb-3">
              Toca un destino para girar el globo y ver qué obstáculo logístico resuelvo por ti:
            </p>

            {/* Quick Destination Selector Pills (Thumb-friendly >= 44-48px) */}
            <div
              className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-5"
              role="group"
              aria-label="Seleccionar destino para calcular ahorro"
            >
              {HERO_SAVINGS_DESTINATIONS.map((dest) => {
                const isSelected = dest.id === selectedDest.id;
                return (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => handleSelectDest(dest)}
                    aria-pressed={isSelected}
                    className={`min-h-[48px] px-3 py-2 rounded-xl font-sans text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-1.5 text-left border ${
                      isSelected
                        ? 'bg-sage text-sand border-sage shadow-sm'
                        : 'bg-sand/85 text-ink hover:bg-sand border-sage-mist/40'
                    }`}
                  >
                    <span className="truncate">{dest.name}</span>
                    <span
                      className={`font-mono text-[10px] shrink-0 ${
                        isSelected ? 'text-gold-light' : 'text-terracotta'
                      }`}
                    >
                      -{dest.hoursSaved}h
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Output Card for Selected Destination */}
            <div className="rounded-2xl bg-sand p-4 sm:p-5 border border-sage-mist/35 space-y-4">
              {/* Top Telemetry Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-limestone">
                <div className="flex items-center gap-1.5 font-mono text-xs text-sage">
                  <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0" strokeWidth={1.5} />
                  <span>{selectedDest.coordinates}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 font-mono text-xs font-medium text-terracotta">
                    <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                    {selectedDest.hoursSaved}h ahorradas
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-ink/70">
                    <Layers className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
                    ~{selectedDest.tabsClosed} pestañas menos
                  </span>
                </div>
              </div>

              {/* Obstacle vs Andrea Solution */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3 rounded-xl bg-limestone/55 border-l-2 border-terracotta">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-terracotta font-semibold block mb-1">
                    EL OBSTÁCULO QUE BLOQUEA AL VIAJERO EN {selectedDest.name.toUpperCase()}:
                  </span>
                  <p className="text-ink/90 leading-snug">{selectedDest.mainObstacle}</p>
                </div>

                <div className="p-3 rounded-xl bg-sage/10 border-l-2 border-sage">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-sage font-semibold flex items-center gap-1 mb-1">
                    <Sparkles className="w-3 h-3 text-gold" strokeWidth={1.5} />
                    CÓMO LO RESUELVE ANDREA POR TI:
                  </span>
                  <p className="text-ink leading-snug font-medium">
                    {selectedDest.andreaSolution}
                  </p>
                </div>
              </div>

              {/* Bottom Micro Metric & Action */}
              <div className="pt-1 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-sage">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sage shrink-0" strokeWidth={1.5} />
                  {selectedDest.microMetric}
                </span>
                <button
                  type="button"
                  onClick={() => onNavigate('universos')}
                  className="font-mono text-[11px] text-terracotta hover:underline font-medium shrink-0"
                >
                  Explorar destino →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
