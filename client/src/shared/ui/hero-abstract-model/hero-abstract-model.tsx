"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bounds, Center, Environment, Float, useGLTF } from "@react-three/drei";
import type { Group } from "three";

const MODEL_URL = "/images/abstract_shape.glb";

const heroScroll = { y: 0, impulse: 0 };

useGLTF.preload(MODEL_URL);

function useHeroScrollSync() {
  useEffect(() => {
    const sync = () => {
      heroScroll.y = window.scrollY;
      heroScroll.impulse = Math.min(heroScroll.impulse + 0.18, 1.35);
    };
    heroScroll.y = window.scrollY;
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, []);
}

function GltfShape() {
  const { scene } = useGLTF(MODEL_URL);
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;

    const decay = Math.pow(0.9, delta * 60);
    heroScroll.impulse *= decay;

    const depthBoost = Math.min(heroScroll.y * 0.00022, 0.85);
    const spin = 0.38 + depthBoost + heroScroll.impulse;

    g.rotation.y += delta * spin;
    g.rotation.x += (heroScroll.y * 0.0002 - 0.06 - g.rotation.x) * 0.04;
    g.rotation.z += (Math.sin(heroScroll.y * 0.00085) * 0.08 - g.rotation.z) * 0.04;
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

function Scene() {
  return (
    <Float speed={2.2} rotationIntensity={0.28} floatIntensity={0.34}>
      <Bounds fit clip margin={1.32}>
        <Center>
          <GltfShape />
        </Center>
      </Bounds>
    </Float>
  );
}

export function HeroAbstractModel() {
  useHeroScrollSync();

  return (
    <div className="mx-auto aspect-square w-full max-w-[340px] shrink-0 touch-none select-none md:w-[380px] md:max-w-[380px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        dpr={[1, 2]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.72} />
          <directionalLight position={[6, 10, 6]} intensity={1.15} />
          <directionalLight position={[-5, -2, -5]} intensity={0.45} color="#93c5fd" />
          <Scene />
          <Environment preset="studio" environmentIntensity={0.65} />
        </Suspense>
      </Canvas>
    </div>
  );
}
