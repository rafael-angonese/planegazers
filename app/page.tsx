"use client";

import { Canvas } from "@react-three/fiber";
import { Scene } from "components/screens/Home/Scene";
import { Suspense } from "react";
import { LEGACY_LIGHT_SCALE } from "utils/three";
// Efeito colateral: filtra avisos de depreciação do three.js vindos do r3f.
import "utils/three-console";

export default function Home() {
  return (
    <Canvas>
      <ambientLight intensity={LEGACY_LIGHT_SCALE} />
      <directionalLight color="red" intensity={10 * LEGACY_LIGHT_SCALE} />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
