import { Canvas } from "@react-three/fiber";
import { Scene } from "components/screens/Home/Scene";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Canvas>
        <ambientLight />
        <directionalLight color="red" intensity={10} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </>
  );
}
