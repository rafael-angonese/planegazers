import { useIntersect } from "@react-three/drei";
import { useFrame, useThree, Vector3 } from "@react-three/fiber";
import React, { ReactNode, useMemo, useRef } from "react";
import * as THREE from "three";
import { createRandom } from "utils/random";
import { LEGACY_LIGHT_SCALE } from "utils/three";

export const Objects = () => {
  const { height, width } = useThree((state) => state.viewport);

  return (
    <>
      <pointLight
        color="blue"
        position={[8, -25, 5]}
        intensity={20 * LEGACY_LIGHT_SCALE}
        decay={1}
      />
      <pointLight
        color="red"
        position={[0, -height * 2.25, 5]}
        intensity={10 * LEGACY_LIGHT_SCALE}
        decay={1}
      />
      <Item seed={1} color="red" position={[0, 1, 0]}>
        <boxGeometry />
      </Item>
      <Item seed={2} color="blue" position={[width / 6, -height * 1, 0]}>
        <dodecahedronGeometry />
      </Item>
      <Item seed={3} color="gray" position={[-width / 5, -height * 1.8, -2]}>
        <coneGeometry args={[1, 1, 6]} />
      </Item>
      <Item seed={4} color="purple" position={[width / 4, -height * 2, 0]}>
        <coneGeometry args={[1.5, 2, 3]} />
      </Item>
      <Item seed={5} color="orange" position={[-width / 12, -height * 2.25, 0.5]}>
        <coneGeometry args={[0.75, 2.5, 12]} />
      </Item>
    </>
  );
};

interface ItemProps {
  seed: number;
  color: string;
  position: Vector3;
  children: ReactNode;
}

const Item: React.FC<ItemProps> = ({ seed, color, position, children }) => {
  const visible = useRef(false);

  const ref = useIntersect<THREE.Mesh>(
    (isVisible) => (visible.current = isVisible)
  );
  const [xRandomFactor, yRandomFactor] = useMemo(() => {
    const random = createRandom(seed);
    return [(0.5 - random()) * 0.5, (0.5 - random()) * 0.5];
  }, [seed]);

  useFrame(({ clock }, delta) => {
    if (!ref.current) return;

    const elapsedTime = clock.getElapsedTime();

    ref.current.rotation.x = elapsedTime * xRandomFactor;
    ref.current.rotation.y = elapsedTime * yRandomFactor;

    const scale = THREE.MathUtils.damp(
      ref.current.scale.x,
      visible.current ? 1.5 : 0.2,
      5,
      delta
    );
    ref.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={ref} position={position}>
      {children}
      <meshPhysicalMaterial transparent color={color} />
    </mesh>
  );
};
