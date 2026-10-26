import React, { Suspense, useEffect, useRef, useState } from 'react';

const LazyEditorialGlobeCanvas = React.lazy(() => import('./EditorialGlobeCanvas'));

export interface ActiveTargetCoords {
  lat: number;
  lng: number;
  label: string;
  coordsText: string;
}

interface ScrollTravelBackgroundProps {
  activeOverride?: ActiveTargetCoords | null;
}

interface TelemetryStop {
  maxProgress: number;
  phase: string;
  coords: string;
  destinationTag: string;
  lat: number;
  lng: number;
}

const TELEMETRY_WAYPOINTS: TelemetryStop[] = [
  {
    maxProgress: 0.12,
    phase: 'ÓRBITA EDITORIAL',
    coords: '40.41°N 03.70°W',
    destinationTag: 'ESPAÑA → 13 DESTINOS',
    lat: 40.41,
    lng: -3.7,
  },
  {
    maxProgress: 0.22,
    phase: 'CANALES & PATRIMONIO',
    coords: '51.20°N 03.22°E',
    destinationTag: 'BRUJAS · EUROPA',
    lat: 51.2,
    lng: 3.22,
  },
  {
    maxProgress: 0.32,
    phase: 'MEDINAS & DESIERTO',
    coords: '31.62°N 07.98°W',
    destinationTag: 'MARRUECOS',
    lat: 31.62,
    lng: -7.98,
  },
  {
    maxProgress: 0.44,
    phase: 'NATURALEZA & SKYLINE',
    coords: '09.74°N 83.75°W',
    destinationTag: 'COSTA RICA · PANAMÁ · NY',
    lat: 9.74,
    lng: -83.75,
  },
  {
    maxProgress: 0.56,
    phase: 'ASIA MILENARIA',
    coords: '21.02°N 105.83°E',
    destinationTag: 'CHINA & VIETNAM [HA LONG]',
    lat: 21.02,
    lng: 105.83,
  },
  {
    maxProgress: 0.72,
    phase: 'EUROPA CON ALMA',
    coords: '41.90°N 12.49°E',
    destinationTag: 'FRANCIA · ITALIA · PORTUGAL · ALEMANIA',
    lat: 45.0,
    lng: 8.0,
  },
  {
    maxProgress: 1.01,
    phase: 'TALLER DEL HADA · RUTA A MEDIDA',
    coords: 'CARTOGRAFÍA 13 DESTINOS',
    destinationTag: 'DISEÑO 100% FLEXIBLE',
    lat: 34.0,
    lng: 12.0,
  },
];

export const ScrollTravelBackground: React.FC<ScrollTravelBackgroundProps> = ({
  activeOverride,
}) => {
  const scrollProgressRef = useRef<number>(0);
  const targetProgressRef = useRef<number>(0);
  const pathRef = useRef<SVGPathElement | null>(null);
  const drawnPathRef = useRef<SVGPathElement | null>(null);
  const planeGroupRef = useRef<SVGGElement | null>(null);

  const [telemetry, setTelemetry] = useState<TelemetryStop>(TELEMETRY_WAYPOINTS[0]);
  const [percentDisplay, setPercentDisplay] = useState<number>(0);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [webglAvailable, setWebglAvailable] = useState<boolean>(true);
  const [globeReadyToMount, setGlobeReadyToMount] = useState<boolean>(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handleMq = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handleMq);

    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglAvailable(false);
      }
    } catch {
      setWebglAvailable(false);
    }

    // Defer 3D WebGL initialization after Hero LCP paint (requestIdleCallback + 300ms delay)
    let idleId: number | null = null;
    const timerId = window.setTimeout(() => {
      if ('requestIdleCallback' in window) {
        idleId = (
          window as Window & {
            requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number;
          }
        ).requestIdleCallback(() => setGlobeReadyToMount(true), { timeout: 800 });
      } else {
        setGlobeReadyToMount(true);
      }
    }, 300);

    return () => {
      mq.removeEventListener('change', handleMq);
      window.clearTimeout(timerId);
      if (idleId !== null && 'cancelIdleCallback' in window) {
        (window as Window & { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(
          idleId
        );
      }
    };
  }, []);

  useEffect(() => {
    let rafId: number;
    let lastWaypointIndex = 0;
    let lastPct = -1;

    const handleScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const raw = docHeight > 0 ? window.scrollY / docHeight : 0;
      targetProgressRef.current = Math.max(0, Math.min(1, raw));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const animateLoop = () => {
      const diff = targetProgressRef.current - scrollProgressRef.current;
      const step = reducedMotion ? diff : diff * 0.09;
      scrollProgressRef.current += step;

      const currentP = scrollProgressRef.current;

      const pathEl = pathRef.current;
      const drawnEl = drawnPathRef.current;
      const planeEl = planeGroupRef.current;

      if (pathEl && drawnEl && planeEl) {
        const totalLen = pathEl.getTotalLength();
        if (totalLen > 0) {
          const drawLen = Math.max(12, totalLen * Math.min(0.98, 0.04 + currentP * 0.94));
          drawnEl.style.strokeDasharray = `${drawLen} ${totalLen}`;

          const pt = pathEl.getPointAtLength(drawLen);
          const aheadLen = Math.min(totalLen, drawLen + 6);
          const nextPt = pathEl.getPointAtLength(aheadLen);
          const angleDeg =
            (Math.atan2(nextPt.y - pt.y, nextPt.x - pt.x) * 180) / Math.PI;

          planeEl.setAttribute(
            'transform',
            `translate(${pt.x.toFixed(1)}, ${pt.y.toFixed(1)}) rotate(${angleDeg.toFixed(1)})`
          );
        }
      }

      const pct = Math.round(currentP * 100);
      if (pct !== lastPct) {
        lastPct = pct;
        setPercentDisplay(pct);
      }

      const wpIndex = TELEMETRY_WAYPOINTS.findIndex(
        (w) => currentP <= w.maxProgress
      );
      const resolvedIdx = wpIndex === -1 ? TELEMETRY_WAYPOINTS.length - 1 : wpIndex;
      if (resolvedIdx !== lastWaypointIndex) {
        lastWaypointIndex = resolvedIdx;
        setTelemetry(TELEMETRY_WAYPOINTS[resolvedIdx]);
      }

      rafId = requestAnimationFrame(animateLoop);
    };

    rafId = requestAnimationFrame(animateLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  const fallbackGlobeSvg = (
    <div className="w-full h-full flex items-center justify-center opacity-25">
      <svg
        viewBox="0 0 400 400"
        className="w-[340px] h-[340px] md:w-[520px] md:h-[520px]"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="145" fill="#E8DFD1" fillOpacity="0.4" stroke="#C5A059" strokeWidth="1" />
        <ellipse cx="200" cy="200" rx="145" ry="55" fill="none" stroke="#8FA392" strokeWidth="0.8" strokeDasharray="4 4" />
        <ellipse cx="200" cy="200" rx="65" ry="145" fill="none" stroke="#8FA392" strokeWidth="0.8" />
        <ellipse cx="200" cy="200" rx="115" ry="145" fill="none" stroke="#C5A059" strokeWidth="0.6" strokeOpacity="0.5" />
      </svg>
    </div>
  );

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Subtle Ambient Radial Aura */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 75% 28%, rgba(232, 223, 209, 0.55) 0%, rgba(245, 240, 230, 0.15) 55%, rgba(245, 240, 230, 0) 100%)',
        }}
      />

      {/* Layer 1: Deferred Editorial 3D Globe (React.lazy + Suspense + requestIdleCallback) */}
      <div className="absolute inset-0 opacity-65 md:opacity-75">
        {webglAvailable && globeReadyToMount ? (
          <Suspense fallback={fallbackGlobeSvg}>
            <LazyEditorialGlobeCanvas
              scrollProgressRef={scrollProgressRef}
              activeOverride={activeOverride}
              reducedMotion={reducedMotion}
              fallback={fallbackGlobeSvg}
            />
          </Suspense>
        ) : (
          fallbackGlobeSvg
        )}
      </div>

      {/* Layer 2: Vertical SVG Flight Path & Editorial Airplane with Fairy Trail */}
      <svg
        viewBox="0 0 390 1200"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full opacity-75"
      >
        <defs>
          <linearGradient id="fairyTrailGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.18" />
            <stop offset="55%" stopColor="#C5A059" stopOpacity="0.58" />
            <stop offset="100%" stopColor="#C86D51" stopOpacity="0.75" />
          </linearGradient>
          <filter id="goldGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          ref={pathRef}
          d="M 342 28 C 368 180, 28 290, 42 450 C 56 610, 355 710, 342 870 C 328 1010, 48 1090, 195 1175"
          fill="none"
          stroke="#8FA392"
          strokeWidth="1"
          strokeDasharray="3 7"
          strokeOpacity="0.28"
        />

        <path
          ref={drawnPathRef}
          d="M 342 28 C 368 180, 28 290, 42 450 C 56 610, 355 710, 342 870 C 328 1010, 48 1090, 195 1175"
          fill="none"
          stroke="url(#fairyTrailGrad)"
          strokeWidth="1.75"
          strokeLinecap="round"
        />

        <g stroke="#C5A059" strokeWidth="1" opacity="0.45">
          <circle cx="342" cy="28" r="3.5" fill="#F5F0E6" />
          <circle cx="42" cy="450" r="3.5" fill="#F5F0E6" />
          <circle cx="342" cy="870" r="3.5" fill="#F5F0E6" />
        </g>

        <g ref={planeGroupRef} transform="translate(342, 28) rotate(90)" filter="url(#goldGlow)">
          <circle cx="-3" cy="0" r="10" fill="#C5A059" fillOpacity="0.2" />
          <path
            d="M 11 0 L -7 -6.5 L -3.5 0 L -7 6.5 Z"
            fill="#C86D51"
            stroke="#C5A059"
            strokeWidth="0.8"
          />
          <path d="M 11 0 L -3.5 0 L -7 2.2 Z" fill="#C5A059" fillOpacity="0.85" />
          <circle cx="-9.5" cy="0" r="1.6" fill="#C5A059" />
        </g>
      </svg>

      {/* Discrete Travel Telemetry HUD */}
      <div className="fixed bottom-[64px] sm:bottom-5 inset-x-0 sm:inset-x-auto sm:left-6 z-30 pointer-events-none flex justify-center sm:justify-start px-3 sm:px-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-t-xl sm:rounded-full bg-[#F5F0E6]/95 backdrop-blur-md border border-b-0 sm:border-b border-sage-mist/45 shadow-sm text-[10px] md:text-[11px] font-mono text-ink/90 tracking-tight max-w-full">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold pulse-halo shrink-0" />
          <span className="text-sage font-medium">
            {telemetry.phase} ·
          </span>
          <span className="truncate">
            RUMBO:{' '}
            <strong className="font-medium text-ink">
              {activeOverride ? activeOverride.coordsText : telemetry.coords}
            </strong>{' '}
            <span className="text-terracotta font-medium">
              [{activeOverride ? activeOverride.label.toUpperCase() : telemetry.destinationTag}]
            </span>
          </span>
          <span className="text-ink/50 hidden md:inline">({percentDisplay}%)</span>
        </div>
      </div>
    </div>
  );
};
