import React from 'react';
import {
  Compass,
  Sparkles,
  MapPin,
  HeartHandshake,
  Home,
} from 'lucide-react';
import { SERVICE_ESSENCE_PILLARS } from '../data/travelData';

export const GuideSealSection: React.FC = () => {
  const icons = [Compass, Home, MapPin, HeartHandshake];

  return (
    <section
      id="esencia-servicio"
      className="relative z-10 py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Clean Editorial Header */}
      <div className="max-w-3xl mb-10 md:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-limestone border border-sage-mist/40 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
          <span className="font-mono text-[11px] uppercase tracking-widest text-sage font-medium">
            LA ESENCIA DEL SERVICIO · ARTESANÍA VIAJERA
          </span>
        </div>
        <h2 className="font-serif font-semibold text-ink section-display-title tracking-tight mb-4">
          Cómo diseño tu viaje:{' '}
          <em className="italic font-normal text-sage">
            organización a medida, alojamientos con encanto y flexibilidad total.
          </em>
        </h2>
        <p className="text-base sm:text-lg text-ink/80 leading-relaxed">
          Como guía turística profesional, organizo cada ruta hablando directamente contigo para que
          los tiempos, los hoteles y las experiencias encajen al 100% con vuestro gusto y vuestro
          presupuesto.
        </p>
      </div>

      {/* 4 Clean Service Essence Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {SERVICE_ESSENCE_PILLARS.map((pillar, idx) => {
          const IconComponent = icons[idx % icons.length];
          return (
            <div
              key={pillar.step}
              className="rounded-3xl bg-limestone/85 backdrop-blur-md border border-sage-mist/45 p-6 flex flex-col justify-between shadow-editorial"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-sand text-sage font-semibold border border-sage-mist/40">
                    {pillar.step} · {pillar.tag}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-sand border border-gold/40 flex items-center justify-center text-terracotta shrink-0">
                    <IconComponent className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="font-serif font-semibold text-xl sm:text-2xl text-ink leading-snug mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink/85 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
