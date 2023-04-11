import { Scroll, ScrollControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { KBarQuery } from "kbar";
import React from "react";
import * as THREE from "three";
import { Html } from "./Html";
import { Objects } from "./Objects";
import { Particles } from "./Particles";


const Scene: React.FC = () => {
  useFrame(({ mouse, camera }) => {
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.x * 0.5,
      0.03
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mouse.y * 0.8,
      0.01
    );
    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      Math.max(4, Math.abs(mouse.x * mouse.y * 8)),
      0.01
    );
    camera.rotation.y = THREE.MathUtils.lerp(
      camera.rotation.y,
      mouse.x * -Math.PI * 0.025,
      0.001
    );
  });

  return (
    <ScrollControls pages={3}>
      <Scroll>
        <Particles size={1000} />
        <Objects />
      </Scroll>
      <Scroll html>
        <Html />
      </Scroll>
    </ScrollControls>
  );
};

export { Scene };
