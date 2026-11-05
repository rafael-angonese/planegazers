import { Point, Points } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useMemo } from "react";
import { createRandom } from "utils/random";

const particleColors = [
  "#673ab7",
  "#f4b677",
  "orange",
  "blue",
  "#8bc34a",
  "purple",
];

export const Particles = ({ size = 5000 }) => {
  const { width, height } = useThree((state) => state.viewport);

  const particles = useMemo(() => {
    const random = createRandom(size);

    return Array.from({ length: size }, () => ({
      position: [
        (0.5 - random()) * width * 2,
        0.5 * height + random() ** 0.25 * height * -3,
        (0.5 - random()) * 25,
      ] as [number, number, number],
      color:
        particleColors[Math.floor(random() * (particleColors.length - 1))],
    }));
  }, [size, width, height]);

  return (
    <Points limit={size}>
      <pointsMaterial size={0.05} vertexColors />
      {particles.map((particle, i) => (
        <Point key={i} position={particle.position} color={particle.color} />
      ))}
    </Points>
  );
};
