import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

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
  hoursSaved: string;
  lat: number;
  lng: number;
}

const TELEMETRY_WAYPOINTS: TelemetryStop[] = [
  {
    maxProgress: 0.15,
    phase: 'DESPEGUE · ÓRBITA EDITORIAL',
    coords: '40.41°N 03.70°W',
    destinationTag: 'MADRID → MUNDO',
    hoursSaved: '+40H',
    lat: 28.0,
    lng: 10.0,
  },
  {
    maxProgress: 0.25,
    phase: 'SELLO DE GUÍA · EUROPA',
    coords: '51.20°N 03.22°E',
    destinationTag: 'BRUJAS & FLANDES',
    hoursSaved: '+28H',
    lat: 51.2,
    lng: 3.22,
  },
  {
    maxProgress: 0.35,
    phase: 'CÍRCULO ÁRTICO · AURORAS',
    coords: '68.23°N 14.56°E',
    destinationTag: 'PAÍSES NÓRDICOS',
    hoursSaved: '+36H',
    lat: 68.23,
    lng: 14.56,
  },
  {
    maxProgress: 0.41,
    phase: 'MEDINAS & DESIERTO',
    coords: '31.62°N 07.98°W',
    destinationTag: 'MARRUECOS',
    hoursSaved: '+34H',
    lat: 31.62,
    lng: -7.98,
  },
  {
    maxProgress: 0.46,
    phase: 'TRÓPICO & BOSQUE NUBOSO',
    coords: '09.74°N 83.75°W',
    destinationTag: 'COSTA RICA & PANAMÁ',
    hoursSaved: '+38H',
    lat: 9.74,
    lng: -83.75,
  },
  {
    maxProgress: 0.51,
    phase: 'IMPERIO SIN BARRERAS',
    coords: '39.90°N 116.40°E',
    destinationTag: 'CHINA [PEK·SHA]',
    hoursSaved: '+48H',
    lat: 39.9,
    lng: 116.4,
  },
  {
    maxProgress: 0.58,
    phase: 'ALT: CRUCERO · KARST & SEDA',
    coords: '21.02°N 105.83°E',
    destinationTag: 'VIETNAM [LAN HA]',
    hoursSaved: '+42H',
    lat: 21.02,
    lng: 105.83,
  },
  {
    maxProgress: 0.78,
    phase: 'ENTREGABLE 6 MÓDULOS',
    coords: '21.02°N 105.83°E',
    destinationTag: 'LOOKBOOK INTERACTIVO',
    hoursSaved: '+42H',
    lat: 25.0,
    lng: 95.0,
  },
  {
    maxProgress: 1.01,
    phase: 'TALLER DEL HADA · RUTA A MEDIDA',
    coords: 'ÓRBITA GLOBAL 5 DESTINOS',
    destinationTag: 'DISEÑO ARTESANAL',
    hoursSaved: '+48H',
    lat: 32.0,
    lng: 25.0,
  },
];

const GLOBE_MARKERS = [
  { name: 'Brujas', lat: 51.2, lng: 3.22 },
  { name: 'Nórdicos', lat: 68.23, lng: 14.56 },
  { name: 'Marruecos', lat: 31.62, lng: -7.98 },
  { name: 'Costa Rica & Panamá', lat: 9.74, lng: -83.75 },
  { name: 'China', lat: 39.9, lng: 116.4 },
  { name: 'Vietnam', lat: 21.02, lng: 105.83 },
];

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

interface EditorialGlobeProps {
  scrollProgressRef: React.MutableRefObject<number>;
  activeOverride?: ActiveTargetCoords | null;
  reducedMotion: boolean;
}

const EditorialGlobeScene: React.FC<EditorialGlobeProps> = ({
  scrollProgressRef,
  activeOverride,
  reducedMotion,
}) => {
  const globeGroupRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const dustRef = useRef<THREE.Points>(null);

  const radius = 1.65;

  // Create subtle continental dot matrix + meridians + destination markers + orbital arcs
  const { continentDotsGeo, dustGeo, markerPositions, routeArcsGeo } = useMemo(() => {
    // 1.Fibonacci sphere dots simulating organic continental texture
    const dotCount = 1100;
    const positions: number[] = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < dotCount; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / dotCount);
      // Create organic clusters resembling landmasses using harmonic waves
      const landMask =
        Math.sin(phi * 3.2 + Math.cos(theta * 2.1)) *
          Math.cos(theta * 1.8 - Math.sin(phi * 2.5)) +
        0.25 * Math.sin(theta * 4 + phi * 3);

      if (landMask > -0.12) {
        const r = radius * 1.003;
        positions.push(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.cos(phi),
          r * Math.sin(phi) * Math.sin(theta)
        );
      }
    }

    const cGeo = new THREE.BufferGeometry();
    cGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    // 2. Floating fairy gold dust particles
    const dustCount = 90;
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      const r = 2.0 + Math.random() * 1.6;
      const u = Math.random() * Math.PI * 2;
      const v = Math.acos(2 * Math.random() - 1);
      dustPos[i * 3] = r * Math.sin(v) * Math.cos(u);
      dustPos[i * 3 + 1] = r * Math.cos(v);
      dustPos[i * 3 + 2] = r * Math.sin(v) * Math.sin(u);
    }
    const dGeo = new THREE.BufferGeometry();
    dGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));

    // 3. Destination Marker 3D vectors
    const markers = GLOBE_MARKERS.map((m) => ({
      ...m,
      pos: latLngToVector3(m.lat, m.lng, radius * 1.015),
    }));

    // 4. Great circle arcs connecting destinations
    const arcGeometries: THREE.BufferGeometry[] = [];
    for (let i = 0; i < markers.length - 1; i++) {
      const start = markers[i].pos;
      const end = markers[i + 1].pos;
      const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(radius * 1.22);
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const points = curve.getPoints(36);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(points);
      arcGeometries.push(arcGeo);
    }

    return {
      continentDotsGeo: cGeo,
      dustGeo: dGeo,
      markerPositions: markers,
      routeArcsGeo: arcGeometries,
    };
  }, [radius]);

  const arcLineMaterial = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: '#C5A059',
        transparent: true,
        opacity: 0.34,
      }),
    []
  );

  const arcLines = useMemo(
    () => routeArcsGeo.map((geo) => new THREE.Line(geo, arcLineMaterial)),
    [routeArcsGeo, arcLineMaterial]
  );

  useFrame((state, delta) => {
    if (!globeGroupRef.current) return;

    const progress = scrollProgressRef.current;

    // Determine target latitude and longitude from scroll progress or interactive override
    let targetLat = 35;
    let targetLng = 15;

    if (activeOverride) {
      targetLat = activeOverride.lat;
      targetLng = activeOverride.lng;
    } else if (progress <= 0.15) {
      // Hero: Global view with gentle drift
      targetLat = 28 + progress * 80;
      targetLng = 5 + progress * 40;
    } else if (progress <= 0.35) {
      // Sello de Guía: Europe (Brujas -> Nórdicos)
      const t = (progress - 0.15) / 0.2;
      targetLat = THREE.MathUtils.lerp(51.2, 68.23, t);
      targetLng = THREE.MathUtils.lerp(3.22, 14.56, t);
    } else if (progress <= 0.58) {
      // 5 Universos: Marruecos -> Costa Rica -> China -> Vietnam
      const t = (progress - 0.35) / 0.23;
      if (t < 0.33) {
        const sub = t / 0.33;
        targetLat = THREE.MathUtils.lerp(31.62, 9.74, sub);
        targetLng = THREE.MathUtils.lerp(-7.98, -83.75, sub);
      } else if (t < 0.66) {
        const sub = (t - 0.33) / 0.33;
        targetLat = THREE.MathUtils.lerp(9.74, 39.9, sub);
        targetLng = THREE.MathUtils.lerp(-83.75, 116.4, sub);
      } else {
        const sub = (t - 0.66) / 0.34;
        targetLat = THREE.MathUtils.lerp(39.9, 21.02, sub);
        targetLng = THREE.MathUtils.lerp(116.4, 105.83, sub);
      }
    } else {
      // 58% - 100%: Orbital view showcasing all 5 markers
      const t = (progress - 0.58) / 0.42;
      targetLat = THREE.MathUtils.lerp(21.02, 32.0, t);
      targetLng = THREE.MathUtils.lerp(105.83, 25.0 + t * 120, t);
    }

    const targetRotX = THREE.MathUtils.degToRad(targetLat * 0.55);
    const targetRotY = THREE.MathUtils.degToRad(-targetLng - 65);

    const damping = reducedMotion ? 1 : Math.min(1, delta * 3.2);
    globeGroupRef.current.rotation.x = THREE.MathUtils.lerp(
      globeGroupRef.current.rotation.x,
      targetRotX,
      damping
    );
    globeGroupRef.current.rotation.y = THREE.MathUtils.lerp(
      globeGroupRef.current.rotation.y,
      targetRotY + (reducedMotion ? 0 : state.clock.elapsedTime * 0.03),
      damping
    );

    if (outerRingRef.current && !reducedMotion) {
      outerRingRef.current.rotation.z = state.clock.elapsedTime * 0.04 + progress * 1.4;
    }

    if (dustRef.current && !reducedMotion) {
      dustRef.current.rotation.y = state.clock.elapsedTime * 0.02 - progress * 0.6;
    }
  });

  return (
    <>
      <ambientLight intensity={1.3} />
      <directionalLight position={[4, 5, 4]} intensity={0.7} color="#FFFDF9" />

      <group ref={globeGroupRef} position={[0, 0.05, 0]}>
        {/* Inner Translucent Limestone Sphere */}
        <mesh>
          <sphereGeometry args={[radius * 0.99, 36, 36]} />
          <meshBasicMaterial color="#E8DFD1" transparent opacity={0.42} />
        </mesh>

        {/* Subtle Geodesic Meridian Grid in Sage Mist */}
        <mesh>
          <sphereGeometry args={[radius, 24, 18]} />
          <meshBasicMaterial
            color="#8FA392"
            wireframe
            transparent
            opacity={0.18}
          />
        </mesh>

        {/* Continental Organic Dot Matrix in Sage */}
        <points geometry={continentDotsGeo}>
          <pointsMaterial
            color="#4A5D4E"
            size={0.024}
            transparent
            opacity={0.34}
            sizeAttenuation
          />
        </points>

        {/* Luminous Destination Markers */}
        {markerPositions.map((m) => (
          <group key={m.name} position={m.pos}>
            <mesh>
              <sphereGeometry args={[0.042, 12, 12]} />
              <meshBasicMaterial color="#C86D51" transparent opacity={0.85} />
            </mesh>
            <mesh>
              <sphereGeometry args={[0.078, 12, 12]} />
              <meshBasicMaterial color="#C5A059" transparent opacity={0.32} />
            </mesh>
          </group>
        ))}

        {/* Golden Route Arcs */}
        {arcLines.map((lineObj, idx) => (
          <primitive key={idx} object={lineObj} />
        ))}
      </group>

      {/* Astronomical Compass Rings in Compass Gold (#C5A059) */}
      <mesh ref={outerRingRef} rotation={[Math.PI / 2.6, 0.25, 0]}>
        <torusGeometry args={[radius * 1.24, 0.004, 12, 100]} />
        <meshBasicMaterial color="#C5A059" transparent opacity={0.32} />
      </mesh>
      <mesh rotation={[-Math.PI / 3.1, -0.35, 0.4]}>
        <torusGeometry args={[radius * 1.34, 0.003, 12, 100]} />
        <meshBasicMaterial color="#8FA392" transparent opacity={0.22} />
      </mesh>

      {/* Floating Fairy Dust Particles */}
      <points ref={dustRef} geometry={dustGeo}>
        <pointsMaterial
          color="#C5A059"
          size={0.032}
          transparent
          opacity={0.42}
          sizeAttenuation
        />
      </points>
    </>
  );
};

class WebGLErrorBoundary extends React.Component<
  { fallback: React.ReactNode; children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { fallback: React.ReactNode; children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

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

  useEffect(() => {
    // Check reduced motion preference
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handleMq = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handleMq);

    // Check WebGL availability cleanly to avoid console errors in restricted environments
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

    return () => mq.removeEventListener('change', handleMq);
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

      // Update SVG Path & Airplane Tangent Position
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

      // Update Telemetry HUD discretely when waypoint or percentage changes
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

      {/* Layer 1: Editorial 3D Globe (Three.js / WebGL Optimized for Mobile 9:16 & Desktop) */}
      <div className="absolute inset-0 opacity-65 md:opacity-75">
        {webglAvailable ? (
          <WebGLErrorBoundary fallback={fallbackGlobeSvg}>
            <Canvas
              dpr={[1, 1.5]}
              camera={{ position: [0, 0, 4.6], fov: 42 }}
              gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
            >
              <EditorialGlobeScene
                scrollProgressRef={scrollProgressRef}
                activeOverride={activeOverride}
                reducedMotion={reducedMotion}
              />
            </Canvas>
          </WebGLErrorBoundary>
        ) : (
          fallbackGlobeSvg
        )}
      </div>

      {/* Layer 2: Vertical SVG Flight Path & Paper/Editorial Airplane with Fairy Trail */}
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

        {/* Faint Full Guide Curve along the margins */}
        <path
          ref={pathRef}
          d="M 342 28 C 368 180, 28 290, 42 450 C 56 610, 355 710, 342 870 C 328 1010, 48 1090, 195 1175"
          fill="none"
          stroke="#8FA392"
          strokeWidth="1"
          strokeDasharray="3 7"
          strokeOpacity="0.28"
        />

        {/* Progressively Drawn Golden/Terracotta Trail */}
        <path
          ref={drawnPathRef}
          d="M 342 28 C 368 180, 28 290, 42 450 C 56 610, 355 710, 342 870 C 328 1010, 48 1090, 195 1175"
          fill="none"
          stroke="url(#fairyTrailGrad)"
          strokeWidth="1.75"
          strokeLinecap="round"
        />

        {/* Waypoint Astronomical Crosshairs along the path */}
        <g stroke="#C5A059" strokeWidth="1" opacity="0.45">
          <circle cx="342" cy="28" r="3.5" fill="#F5F0E6" />
          <circle cx="42" cy="450" r="3.5" fill="#F5F0E6" />
          <circle cx="342" cy="870" r="3.5" fill="#F5F0E6" />
        </g>

        {/* Stylized Editorial Airplane with Golden Sparkle */}
        <g ref={planeGroupRef} transform="translate(342, 28) rotate(90)" filter="url(#goldGlow)">
          {/* Soft Halo */}
          <circle cx="-3" cy="0" r="10" fill="#C5A059" fillOpacity="0.2" />
          {/* Editorial Craft Silhouette pointing +X */}
          <path
            d="M 11 0 L -7 -6.5 L -3.5 0 L -7 6.5 Z"
            fill="#C86D51"
            stroke="#C5A059"
            strokeWidth="0.8"
          />
          <path d="M 11 0 L -3.5 0 L -7 2.2 Z" fill="#C5A059" fillOpacity="0.85" />
          {/* Sparkle Star at Tail */}
          <circle cx="-9.5" cy="0" r="1.6" fill="#C5A059" />
        </g>
      </svg>

      {/* Discrete Travel Telemetry HUD (Docked cleanly above Mobile Bar on Mobile, Bottom-Left Pill on Desktop) */}
      <div className="fixed bottom-[64px] sm:bottom-5 inset-x-0 sm:inset-x-auto sm:left-6 z-30 pointer-events-none flex justify-center sm:justify-start px-3 sm:px-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-t-xl sm:rounded-full bg-[#F5F0E6]/95 backdrop-blur-md border border-b-0 sm:border-b border-sage-mist/45 shadow-sm text-[10px] md:text-[11px] font-mono text-ink/90 tracking-tight max-w-full">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold pulse-halo shrink-0" />
          <span className="text-sage font-medium">
            ALT: CRUCERO ·
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
          <span className="text-sage-mist hidden xs:inline">|</span>
          <span className="text-sage font-medium shrink-0 hidden xs:inline">
            AHORRO: {telemetry.hoursSaved}
          </span>
          <span className="text-ink/50 hidden md:inline">({percentDisplay}%)</span>
        </div>
      </div>
    </div>
  );
};
