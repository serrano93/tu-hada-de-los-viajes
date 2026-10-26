import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { ActiveTargetCoords } from './ScrollTravelBackground';

const GLOBE_MARKERS = [
  { name: 'Brujas', lat: 51.2, lng: 3.22 },
  { name: 'Marruecos', lat: 31.62, lng: -7.98 },
  { name: 'Costa Rica', lat: 9.74, lng: -83.75 },
  { name: 'Panamá', lat: 8.98, lng: -79.51 },
  { name: 'China', lat: 39.9, lng: 116.4 },
  { name: 'Vietnam', lat: 21.02, lng: 105.83 },
  { name: 'Nueva York', lat: 40.71, lng: -74.0 },
  { name: 'Madeira', lat: 32.66, lng: -16.92 },
  { name: 'Francia', lat: 48.85, lng: 2.35 },
  { name: 'Italia', lat: 41.9, lng: 12.49 },
  { name: 'España', lat: 40.41, lng: -3.7 },
  { name: 'Portugal', lat: 38.72, lng: -9.13 },
  { name: 'Alemania', lat: 52.52, lng: 13.4 },
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

  const { continentDotsGeo, dustGeo, markerPositions, routeArcsGeo } = useMemo(() => {
    const dotCount = 1100;
    const positions: number[] = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < dotCount; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / dotCount);
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

    const markers = GLOBE_MARKERS.map((m) => ({
      ...m,
      pos: latLngToVector3(m.lat, m.lng, radius * 1.015),
    }));

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
        opacity: 0.32,
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

    let targetLat = 35;
    let targetLng = 10;

    if (activeOverride) {
      targetLat = activeOverride.lat;
      targetLng = activeOverride.lng;
    } else if (progress <= 0.15) {
      targetLat = 38 + progress * 60;
      targetLng = -3 + progress * 35;
    } else if (progress <= 0.55) {
      const t = (progress - 0.15) / 0.4;
      if (t < 0.33) {
        const sub = t / 0.33;
        targetLat = THREE.MathUtils.lerp(51.2, 9.74, sub);
        targetLng = THREE.MathUtils.lerp(3.22, -83.75, sub);
      } else if (t < 0.66) {
        const sub = (t - 0.33) / 0.33;
        targetLat = THREE.MathUtils.lerp(9.74, 21.02, sub);
        targetLng = THREE.MathUtils.lerp(-83.75, 105.83, sub);
      } else {
        const sub = (t - 0.66) / 0.34;
        targetLat = THREE.MathUtils.lerp(21.02, 41.9, sub);
        targetLng = THREE.MathUtils.lerp(105.83, 12.49, sub);
      }
    } else {
      const t = (progress - 0.55) / 0.45;
      targetLat = THREE.MathUtils.lerp(41.9, 34.0, t);
      targetLng = THREE.MathUtils.lerp(12.49, 12.0 + t * 90, t);
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
        <mesh>
          <sphereGeometry args={[radius * 0.99, 36, 36]} />
          <meshBasicMaterial color="#E8DFD1" transparent opacity={0.42} />
        </mesh>

        <mesh>
          <sphereGeometry args={[radius, 24, 18]} />
          <meshBasicMaterial
            color="#8FA392"
            wireframe
            transparent
            opacity={0.18}
          />
        </mesh>

        <points geometry={continentDotsGeo}>
          <pointsMaterial
            color="#4A5D4E"
            size={0.024}
            transparent
            opacity={0.34}
            sizeAttenuation
          />
        </points>

        {markerPositions.map((m) => (
          <group key={m.name} position={m.pos}>
            <mesh>
              <sphereGeometry args={[0.04, 12, 12]} />
              <meshBasicMaterial color="#C86D51" transparent opacity={0.85} />
            </mesh>
            <mesh>
              <sphereGeometry args={[0.072, 12, 12]} />
              <meshBasicMaterial color="#C5A059" transparent opacity={0.32} />
            </mesh>
          </group>
        ))}

        {arcLines.map((lineObj, idx) => (
          <primitive key={idx} object={lineObj} />
        ))}
      </group>

      <mesh ref={outerRingRef} rotation={[Math.PI / 2.6, 0.25, 0]}>
        <torusGeometry args={[radius * 1.24, 0.004, 12, 100]} />
        <meshBasicMaterial color="#C5A059" transparent opacity={0.32} />
      </mesh>
      <mesh rotation={[-Math.PI / 3.1, -0.35, 0.4]}>
        <torusGeometry args={[radius * 1.34, 0.003, 12, 100]} />
        <meshBasicMaterial color="#8FA392" transparent opacity={0.22} />
      </mesh>

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

interface EditorialGlobeCanvasProps extends EditorialGlobeProps {
  fallback: React.ReactNode;
}

export const EditorialGlobeCanvas: React.FC<EditorialGlobeCanvasProps> = ({
  scrollProgressRef,
  activeOverride,
  reducedMotion,
  fallback,
}) => {
  return (
    <WebGLErrorBoundary fallback={fallback}>
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
  );
};

export default EditorialGlobeCanvas;
