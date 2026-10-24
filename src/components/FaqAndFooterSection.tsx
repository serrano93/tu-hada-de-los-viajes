import React from 'react';
import { HelpCircle, ChevronDown, Compass, Sparkles, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { FAQ_ITEMS } from '../data/travelData';

interface FaqAndFooterProps {
  onNavigate: (sectionId: string) => void;
}

export const FaqAndFooterSection: React.FC<FaqAndFooterProps> = ({ onNavigate }) => {
  return (
    <>
      {/* SECTION 9: PREGUNTAS FRECUENTES (FAQ HONESTOS) */}
      <section
        id="faq"
        className="relative z-10 py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-limestone border border-sage-mist/40 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-sage" strokeWidth={1.5} />
            <span className="font-mono text-[11px] uppercase tracking-widest text-sage font-medium">
              SECCIÓN 09 · PREGUNTAS FRECUENTES · RESPUESTAS CLARAS
            </span>
          </div>
          <h2 className="font-serif font-semibold text-ink section-display-title tracking-tight mb-3">
            Todo lo que necesitas saber{' '}
            <em className="italic font-normal text-sage">antes de empezar a diseñar tu ruta.</em>
          </h2>
          <p className="text-sm sm:text-base text-ink/80">
            Sin letra pequeña: así funciona el diseño de viajes de autor frente a las agencias
            convencionales.
          </p>
        </div>

        {/* Native HTML <details> exclusive accordion group (Modern Web Guidance: search-hidden-content) */}
        <div className="space-y-3.5 accordion-group">
          {FAQ_ITEMS.map((faq, idx) => (
            <details
              key={faq.id}
              name="faq-accordion"
              open={idx === 0}
              className="disclosure group rounded-2xl bg-limestone/85 border border-sage-mist/45 overflow-hidden shadow-sm transition-colors open:bg-limestone open:border-gold/60"
            >
              <summary className="min-h-[64px] px-5 sm:px-6 py-4 cursor-pointer flex items-center justify-between gap-4 select-none">
                <div className="flex items-start sm:items-center gap-3">
                  <span className="font-mono text-xs text-terracotta font-semibold mt-1 sm:mt-0">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif font-semibold text-lg sm:text-xl text-ink leading-snug">
                    {faq.question}
                  </h3>
                </div>
                <span className="w-9 h-9 rounded-full bg-sand border border-sage-mist/40 flex items-center justify-center shrink-0 text-sage transition-transform duration-300 group-open:rotate-180">
                  <ChevronDown className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </summary>

              <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-sage-mist/25 space-y-3">
                <p className="text-xs sm:text-sm md:text-base text-ink/90 leading-relaxed">
                  {faq.answer}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand font-mono text-[10px] sm:text-[11px] text-sage border border-sage-mist/35">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
                  <span>{faq.codeNote}</span>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* EDITORIAL FOOTER */}
      <footer className="relative z-10 mt-12 border-t border-sage-mist/40 bg-limestone/90 backdrop-blur-md pb-24 sm:pb-12 pt-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-sage-mist/35">
            {/* Brand Column (5 cols) */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sand border border-gold/50 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="font-serif font-semibold text-2xl text-ink block leading-none">
                    Tu Hada de los Viajes
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-sage">
                    BY ANDREA · TRAVEL DESIGN &amp; GUÍA OFICIAL
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-ink/80 leading-relaxed max-w-sm">
                Estudio independiente de diseño de rutas a medida. Logística invisible, hoteles
                boutique con alma y la mirada experta de una guía turística profesional en tu
                bolsillo.
              </p>

              <div className="font-mono text-[11px] text-sage flex flex-wrap items-center gap-x-4 gap-y-1">
                <span>BASE: ESPAÑA</span>
                <span>·</span>
                <span>CUPO: MÁX. 6 RUTAS / MES</span>
              </div>
            </div>

            {/* Universes Links (4 cols) */}
            <div className="md:col-span-4 space-y-2.5">
              <span className="font-mono text-xs uppercase tracking-widest text-sage font-semibold block mb-3">
                LOS 5 UNIVERSOS DE ESPECIALIDAD
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-ink/85">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('universos')}
                    className="hover:text-terracotta transition-colors"
                  >
                    01 · Europa con Alma: Brujas, Flandes y Países Nórdicos
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('universos')}
                    className="hover:text-terracotta transition-colors"
                  >
                    02 · Marruecos Auténtico y Seguro (Medinas, Atlas y Desierto)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('universos')}
                    className="hover:text-terracotta transition-colors"
                  >
                    03 · Naturaleza Salvaje: Costa Rica y Caribe de Panamá
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('universos')}
                    className="hover:text-terracotta transition-colors"
                  >
                    04 · China Sin Barreras Digitales (Alipay, Tren Bala y Cultura)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('universos')}
                    className="hover:text-terracotta transition-colors"
                  >
                    05 · Vietnam de Norte a Sur (Pu Luong, Lan Ha y Hoi An)
                  </button>
                </li>
              </ul>
            </div>

            {/* Direct Action Column (3 cols) */}
            <div className="md:col-span-3 flex flex-col justify-between space-y-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-sage font-semibold block mb-3">
                  EMPEZAR TU VIAJE
                </span>
                <p className="text-xs text-ink/80 leading-relaxed mb-4">
                  Reserva tu diagnóstico en El Taller del Hada o explora el Entregable Estrella en
                  vivo.
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate('taller-hada')}
                  className="w-full min-h-[48px] px-5 py-3 rounded-full bg-terracotta hover:bg-terracotta-hover text-sand font-semibold text-xs flex items-center justify-center gap-2 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 text-gold-light" strokeWidth={1.5} />
                  <span>Ir al Taller del Hada</span>
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink/65 font-mono">
            <div>
              © {new Date().getFullYear()} Tu Hada de los Viajes · Fundado por Andrea. Todos los
              derechos reservados.
            </div>
            <div className="flex items-center gap-4">
              <span>Contraste Editorial AAA (#1E201D / #F5F0E6)</span>
              <span>·</span>
              <span>Artesanía Viajera</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
