import React, { useState } from 'react';
import { Compass, Menu, X, Sparkles, ArrowRight, Headphones, BookOpen } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const NavbarAndStickyBar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Top Editorial Navigation Bar with Warm Glassmorphism */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#F5F0E6]/85 border-b border-sage-mist/30 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 md:h-20 flex items-center justify-between py-2.5">
          {/* Brand Logo Lockup */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-limestone border border-gold/50 flex items-center justify-center shadow-sm group-hover:border-terracotta transition-colors shrink-0">
              {/* Minimalist 4-Point Astronomical Star / Compass in #C5A059 */}
              <svg
                viewBox="0 0 28 28"
                className="w-5 h-5 text-gold transition-transform duration-500 group-hover:rotate-45"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M14 2L16.6 11.4L26 14L16.6 16.6L14 26L11.4 16.6L2 14L11.4 11.4L14 2Z"
                  fill="#C5A059"
                  fillOpacity="0.22"
                  stroke="#C5A059"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <circle cx="14" cy="14" r="2" fill="#C86D51" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-semibold text-xl sm:text-2xl tracking-tight text-ink leading-none">
                Tu Hada de los Viajes
              </span>
              <span className="font-mono text-[9.5px] sm:text-[10.5px] tracking-widest text-sage uppercase mt-1">
                BY ANDREA · TRAVEL DESIGN &amp; GUÍA OFICIAL
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-ink/85" aria-label="Navegación principal">
            <button
              type="button"
              onClick={() => handleNavClick('sello-guia')}
              className="hover:text-terracotta transition-colors py-2 flex items-center gap-1.5"
            >
              <Headphones className="w-4 h-4 text-gold" strokeWidth={1.5} />
              El Sello de Guía
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('universos')}
              className="hover:text-terracotta transition-colors py-2"
            >
              5 Universos
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('entregable-estrella')}
              className="hover:text-terracotta transition-colors py-2 flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-sage" strokeWidth={1.5} />
              Entregable Estrella (Demo)
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('servicios')}
              className="hover:text-terracotta transition-colors py-2"
            >
              Modalidades
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('faq')}
              className="hover:text-terracotta transition-colors py-2"
            >
              FAQs
            </button>
          </nav>

          {/* Desktop Primary CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => handleNavClick('taller-hada')}
              className="hidden sm:inline-flex items-center gap-2 px-5 min-h-[48px] rounded-full bg-terracotta hover:bg-terracotta-hover text-sand font-medium text-sm shadow-editorial transition-all active:scale-[0.99]"
            >
              <span>Diseñar mi ruta a medida</span>
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden inline-flex items-center justify-center w-12 h-12 rounded-full bg-limestone/80 border border-sage-mist/40 text-ink hover:border-sage transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" strokeWidth={1.5} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-sand/95 backdrop-blur-xl border-b border-sage-mist/40 px-4 pt-3 pb-6 shadow-editorial-lg">
            <div className="flex flex-col gap-1.5">
              <button
                type="button"
                onClick={() => handleNavClick('sello-guia')}
                className="w-full text-left px-4 min-h-[48px] rounded-xl hover:bg-limestone/70 font-medium text-ink flex items-center justify-between"
              >
                <span>01 · El Sello de Guía &amp; Píldoras de Audio</span>
                <Headphones className="w-4 h-4 text-gold" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('universos')}
                className="w-full text-left px-4 min-h-[48px] rounded-xl hover:bg-limestone/70 font-medium text-ink flex items-center justify-between"
              >
                <span>02 · Los 5 Universos de Viaje</span>
                <Compass className="w-4 h-4 text-sage" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('entregable-estrella')}
                className="w-full text-left px-4 min-h-[48px] rounded-xl hover:bg-limestone/70 font-medium text-ink flex items-center justify-between"
              >
                <span>03 · Demo Entregable Estrella (6 Módulos)</span>
                <BookOpen className="w-4 h-4 text-terracotta" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('perfiles')}
                className="w-full text-left px-4 min-h-[48px] rounded-xl hover:bg-limestone/70 font-medium text-ink flex items-center justify-between"
              >
                <span>04 · ¿Para Quién Diseña el Hada?</span>
                <Sparkles className="w-4 h-4 text-gold" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('servicios')}
                className="w-full text-left px-4 min-h-[48px] rounded-xl hover:bg-limestone/70 font-medium text-ink flex items-center justify-between"
              >
                <span>05 · Escalera de Servicios (4 Niveles)</span>
                <ArrowRight className="w-4 h-4 text-sage" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('faq')}
                className="w-full text-left px-4 min-h-[48px] rounded-xl hover:bg-limestone/70 font-medium text-ink flex items-center justify-between"
              >
                <span>06 · Preguntas Frecuentes (FAQ Honestos)</span>
                <ArrowRight className="w-4 h-4 text-sage" strokeWidth={1.5} />
              </button>

              <div className="pt-2 mt-1 border-t border-sage-mist/30">
                <button
                  type="button"
                  onClick={() => handleNavClick('taller-hada')}
                  className="w-full min-h-[50px] rounded-full bg-terracotta hover:bg-terracotta-hover text-sand font-semibold text-sm flex items-center justify-center gap-2 shadow-editorial"
                >
                  <span>Diseñar mi ruta a medida</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Floating Bottom Bar (Glassmorphism + High Conversion CTA >= 48px) */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 backdrop-blur-md bg-[#F5F0E6]/90 border-t border-sage-mist/40 px-3 py-2 shadow-editorial-lg">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onNavigate('entregable-estrella')}
            className="px-3.5 min-h-[48px] rounded-full bg-limestone border border-sage/40 text-ink font-medium text-xs shrink-0 flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-sage" strokeWidth={1.5} />
            <span>Ver Demo</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate('taller-hada')}
            className="flex-1 min-h-[48px] rounded-full bg-terracotta active:bg-terracotta-hover text-sand font-semibold text-xs px-4 flex items-center justify-center gap-2 shadow-editorial"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-light shrink-0" strokeWidth={1.5} />
            <span className="truncate">Diseñar mi ruta a medida</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </>
  );
};
