import React, { useState } from 'react';
import {
  Users,
  Heart,
  Compass,
  Check,
  Sparkles,
  ArrowRight,
  Star,
  CalendarCheck,
  CheckCircle2,
} from 'lucide-react';
import { TRAVELER_PROFILES, SERVICE_LADDER } from '../data/travelData';

interface ProfilesAndServicesProps {
  onSelectServiceForWizard: (serviceTitle: string) => void;
}

export const ProfilesAndServicesSection: React.FC<ProfilesAndServicesProps> = ({
  onSelectServiceForWizard,
}) => {
  const [waitlistOpen, setWaitlistOpen] = useState<boolean>(false);
  const [waitlistEmail, setWaitlistEmail] = useState<string>('');
  const [waitlistName, setWaitlistName] = useState<string>('');
  const [waitlistEdition, setWaitlistEdition] = useState<string>('Brujas de Autor');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState<boolean>(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistName.trim() || !waitlistEmail.trim()) return;
    setWaitlistSubmitted(true);
  };

  return (
    <>
      {/* SECTION 6: ¿PARA QUIÉN DISEÑA EL HADA? (3 TRAVELER PROFILES - KEPT EXACTLY INTACT) */}
      <section
        id="perfiles"
        className="relative z-10 py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-limestone border border-sage-mist/40 mb-4">
            <Users className="w-3.5 h-3.5 text-sage" strokeWidth={1.5} />
            <span className="font-mono text-[11px] uppercase tracking-widest text-sage font-medium">
              SECCIÓN 06 · ¿PARA QUIÉN DISEÑA EL HADA?
            </span>
          </div>
          <h2 className="font-serif font-semibold text-ink section-display-title tracking-tight mb-3">
            Para viajeros que aman ir por libre,{' '}
            <em className="italic font-normal text-sage">
              pero valoran demasiado su tiempo libre como para jugársela.
            </em>
          </h2>
          <p className="text-base sm:text-lg text-ink/80 leading-relaxed">
            Mis clientes suelen tener entre 30 y 55 años, criterio propio y una certeza: las
            vacaciones son sagradas y merecen la precisión de una profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TRAVELER_PROFILES.map((profile, idx) => (
            <article
              key={profile.id}
              className="rounded-3xl bg-limestone/85 backdrop-blur-md border border-sage-mist/45 p-6 sm:p-7 flex flex-col justify-between shadow-editorial"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-sand text-sage font-semibold border border-sage-mist/35">
                    {profile.badge}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-sand border border-gold/40 flex items-center justify-center text-terracotta">
                    {idx === 0 ? (
                      <Compass className="w-4 h-4" strokeWidth={1.5} />
                    ) : idx === 1 ? (
                      <Heart className="w-4 h-4" strokeWidth={1.5} />
                    ) : (
                      <Users className="w-4 h-4" strokeWidth={1.5} />
                    )}
                  </span>
                </div>

                <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-ink leading-tight mb-1">
                  {profile.title}
                </h3>
                <p className="font-mono text-xs text-terracotta mb-4">{profile.subtitle}</p>

                <blockquote className="p-4 rounded-2xl bg-sand border-l-2 border-gold font-serif italic text-base sm:text-lg text-ink mb-5">
                  {profile.quote}
                </blockquote>

                <ul className="space-y-2.5 mb-6">
                  {profile.painPoints.map((pt, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/85"
                    >
                      <Check
                        className="w-4 h-4 text-sage shrink-0 mt-0.5"
                        strokeWidth={1.5}
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-sage-mist/35">
                <span className="font-mono text-[10px] uppercase tracking-wider text-sage block mb-1">
                  RUTAS FAVORITAS DE ESTE PERFIL:
                </span>
                <p className="font-mono text-xs font-medium text-ink">
                  {profile.idealDestinations}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 7: ESCALERA DE SERVICIOS (CÓMO TRABAJAMOS JUNTOS) */}
      <section
        id="servicios"
        className="relative z-10 py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-limestone border border-gold/50 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
            <span className="font-mono text-[11px] uppercase tracking-widest text-sage font-medium">
              ESCALERA DE SERVICIOS · 4 MODALIDADES CLARAS
            </span>
          </div>
          <h2 className="font-serif font-semibold text-ink section-display-title tracking-tight mb-3">
            Cómo trabajamos juntos:{' '}
            <em className="italic font-normal text-sage">
              elige el grado de delegación que necesitas.
            </em>
          </h2>
          <p className="text-base sm:text-lg text-ink/80 leading-relaxed">
            Desde auditar en 60 minutos un borrador que ya has empezado hasta diseñar tu viaje a
            medida desde cero, reservarlo juntos en videollamada o acompañarte en grupo reducido.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {SERVICE_LADDER.map((tier) => {
            const isStar = tier.highlighted;
            const isWaitlist = 'isWaitlist' in tier && tier.isWaitlist;

            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all border ${
                  isStar
                    ? 'bg-limestone border-terracotta shadow-editorial-lg ring-1 ring-terracotta/30'
                    : 'bg-limestone/75 border-sage-mist/45 shadow-editorial'
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span
                      className={`font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full font-semibold ${
                        isStar
                          ? 'bg-terracotta text-sand'
                          : 'bg-sand text-sage border border-sage-mist/40'
                      }`}
                    >
                      {tier.level}
                    </span>
                    <span className="font-mono text-[11px] text-sage font-medium flex items-center gap-1">
                      {isStar && <Star className="w-3.5 h-3.5 text-gold fill-gold" />}
                      {tier.tag}
                    </span>
                  </div>

                  <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-ink mb-1">
                    {tier.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-terracotta mb-3">
                    {tier.subtitle}
                  </p>

                  <div className="inline-block font-mono text-xs px-3 py-1.5 rounded-xl bg-sand border border-sage-mist/35 text-ink mb-4">
                    {tier.priceReference}
                  </div>

                  <p className="text-xs sm:text-sm text-ink/85 leading-relaxed mb-5">
                    {tier.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-sand/85 border border-sage-mist/30 mb-6">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-sage font-semibold block mb-2.5">
                      QUÉ INCLUYE ESTA MODALIDAD:
                    </span>
                    <ul className="space-y-2">
                      {tier.deliverables.map((del, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/90"
                        >
                          <Check
                            className="w-4 h-4 text-sage shrink-0 mt-0.5"
                            strokeWidth={1.5}
                          />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Button or Inline Priority Waitlist Form for Level 4 */}
                {isWaitlist ? (
                  <div className="space-y-3">
                    {!waitlistOpen ? (
                      <button
                        type="button"
                        onClick={() => setWaitlistOpen(true)}
                        className="w-full min-h-[50px] px-6 py-3 rounded-full bg-sage hover:bg-sage-dark text-sand font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
                      >
                        <CalendarCheck className="w-4 h-4 text-gold-light" strokeWidth={1.5} />
                        <span>{tier.ctaLabel} (8-12 plazas)</span>
                      </button>
                    ) : waitlistSubmitted ? (
                      <div className="p-4 rounded-2xl bg-sage/15 border border-sage text-xs sm:text-sm text-ink flex items-start gap-2.5">
                        <CheckCircle2
                          className="w-5 h-5 text-sage shrink-0 mt-0.5"
                          strokeWidth={1.5}
                        />
                        <div>
                          <strong className="block text-sage">
                            ¡Plaza prioritaria registrada, {waitlistName}!
                          </strong>
                          <span>
                            Te avisaré personalmente a <strong>{waitlistEmail}</strong> antes de
                            abrir el cupo público para la expedición a{' '}
                            <strong>{waitlistEdition}</strong>.
                          </span>
                        </div>
                      </div>
                    ) : (
                      <form
                        onSubmit={handleWaitlistSubmit}
                        className="p-4 rounded-2xl bg-sand border border-gold/50 space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-sage font-semibold">
                            LISTA DE ESPERA PRIORITARIA · NIVEL 04
                          </span>
                          <button
                            type="button"
                            onClick={() => setWaitlistOpen(false)}
                            className="text-xs font-mono text-ink/60 hover:text-ink"
                          >
                            Cerrar ✕
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          <input
                            type="text"
                            required
                            placeholder="Tu nombre"
                            value={waitlistName}
                            onChange={(e) => setWaitlistName(e.target.value)}
                            className="min-h-[44px] px-3.5 py-2 rounded-xl bg-limestone/60 border border-sage-mist/45 text-xs sm:text-sm text-ink focus:outline-none focus:border-sage"
                          />
                          <input
                            type="email"
                            required
                            placeholder="Tu email de contacto"
                            value={waitlistEmail}
                            onChange={(e) => setWaitlistEmail(e.target.value)}
                            className="min-h-[44px] px-3.5 py-2 rounded-xl bg-limestone/60 border border-sage-mist/45 text-xs sm:text-sm text-ink focus:outline-none focus:border-sage"
                          />
                        </div>

                        <select
                          value={waitlistEdition}
                          onChange={(e) => setWaitlistEdition(e.target.value)}
                          aria-label="Seleccionar expedición de interés"
                          className="w-full min-h-[44px] px-3.5 py-2 rounded-xl bg-limestone/60 border border-sage-mist/45 text-xs sm:text-sm text-ink focus:outline-none focus:border-sage"
                        >
                          <option value="Brujas de Autor">
                            Próxima Edición: Escapada Brujas de Autor (Grupos 8-12)
                          </option>
                          <option value="Marruecos de Autor con Andrea">
                            Próxima Edición: Marruecos de Autor (Grupos 8-12)
                          </option>
                          <option value="Europa con Alma (Italia / Portugal / Madeira)">
                            Próxima Edición: Europa con Alma (Grupos 8-12)
                          </option>
                        </select>

                        <button
                          type="submit"
                          className="w-full min-h-[46px] rounded-full bg-terracotta hover:bg-terracotta-hover text-sand font-semibold text-xs sm:text-sm transition-colors"
                        >
                          Guardar mi prioridad en la Lista de Espera
                        </button>
                      </form>
                    )}
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => onSelectServiceForWizard(tier.title)}
                    className={`w-full min-h-[50px] px-6 py-3 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                      isStar
                        ? 'bg-terracotta hover:bg-terracotta-hover text-sand shadow-editorial'
                        : 'bg-sand hover:bg-sage text-ink hover:text-sand border border-sage'
                    }`}
                  >
                    <span>{tier.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
