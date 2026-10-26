import React from 'react';
import {
  Compass,
  Sparkles,
  ArrowRight,
  Globe,
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
}) => {
  return (
    <section
      id="hero"
      className="relative z-10 pt-8 pb-12 md:pt-16 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="max-w-4xl">
        {/* Top Monospace Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-limestone/90 border border-gold/45 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-gold" />
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-sage font-medium">
            DISEÑO DE VIAJES PERSONALIZADOS · BY ANDREA
          </span>
        </div>

        {/* Main Editorial Display Headline (Single H1 on page with SEO keywords) */}
        <h1 className="font-serif font-semibold text-ink hero-display-title tracking-tight mb-6">
          Viajes a medida y rutas personalizadas con la mirada de una{' '}
          <em className="italic font-normal text-sage underline decoration-gold/50 decoration-1 underline-offset-8">
            guía profesional.
          </em>
        </h1>

        {/* Clean Editorial Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-ink/85 leading-relaxed mb-8 editorial-prose">
          Soy <strong className="font-semibold text-ink">Andrea</strong>, guía turística profesional y
          organizadora de viajes personalizados por el mundo. Diseño rutas flexibles, pensadas desde
          cero según vuestros días, gustos y presupuesto, para que disfrutéis de cada destino sin el
          estrés de planificarlo.
        </p>

        {/* Dual CTA Buttons (Minimum 48px height for mobile thumbs) */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
          <button
            type="button"
            onClick={() => onNavigate('taller-hada')}
            className="min-h-[52px] px-7 py-3.5 rounded-full bg-terracotta hover:bg-terracotta-hover text-sand font-semibold text-sm sm:text-base shadow-editorial flex items-center justify-center gap-2.5 transition-all active:scale-[0.99]"
          >
            <Sparkles className="w-4 h-4 text-gold-light shrink-0" strokeWidth={1.5} />
            <span>Empezar a diseñar mi viaje</span>
            <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={() => onNavigate('destinos')}
            className="min-h-[52px] px-6 py-3.5 rounded-full bg-sand/90 hover:bg-limestone border border-sage text-sage font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors"
          >
            <Globe className="w-4 h-4 shrink-0" strokeWidth={1.5} />
            <span>Explorar los 13 destinos</span>
          </button>
        </div>

        {/* Clean Editorial Pillars Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-sage-mist/35">
          <div className="flex items-start gap-2.5">
            <Compass className="w-4 h-4 text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <div className="font-mono text-xs sm:text-sm font-medium text-sage">
                13 DESTINOS CON ALMA
              </div>
              <p className="text-xs text-ink/75 mt-0.5">
                Europa, Marruecos, América y Asia diseñados a tu medida.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-terracotta shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <div className="font-mono text-xs sm:text-sm font-medium text-terracotta">
                100% FLEXIBLE Y A TU RITMO
              </div>
              <p className="text-xs text-ink/75 mt-0.5">
                Desde escapadas de fin de semana hasta grandes rutas de +21 días.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Globe className="w-4 h-4 text-sage shrink-0 mt-0.5" strokeWidth={1.5} />
            <div>
              <div className="font-mono text-xs sm:text-sm font-medium text-ink">
                TRATO DIRECTO CONMIGO
              </div>
              <p className="text-xs text-ink/75 mt-0.5">
                Alojamientos y experiencias adaptados a vuestro presupuesto real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
