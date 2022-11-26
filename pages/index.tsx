import ShortcutHome from "components/screens/Home/Shortcut";

import { OrbitControls, Float } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Plane from "components/Plane";
import { Suspense, useRef } from "react";
import useWindowScrollPositions from "hooks/useWindowScrollPositions";
import useWindowSize from "hooks/useWindowSize";
import PlaneScene from "components/screens/Home/Plane/Plane";
import { Scene } from "components/screens/Home/Scene";

const MyPlane = () => {
  // const {
  //   camera,
  //   gl: { domElement },
  // } = useThree();
  // const ref = useRef();
  const ref = useRef<THREE.Group>(null!);

  // useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  useFrame(({ camera }) => {
    // Move mesh to be flush with camera
    // console.log("mudou algo aqui");
    //  console.log(ref)
    //  ref.current.rotation.y += 0.05;
    //  ref.current.position.x =+ 1;
    //  ref.current.rotation.x += 0.01
    // Apply offset
    ref.current.translateZ(+0.05);
    // ref.current.translateY(+0.01);
    if (ref.current.position.z >= 10) {
      ref.current.translateZ(-20);
      // ref.current.translateY(-20);
    }
    // console.log(ref.current.position)
  });

  return <Plane ref={ref} scale={4} position={[0, 2, -20]} />;
};

export default function Home() {
  const { scrollX, scrollY } = useWindowScrollPositions();
  const { height, width } = useWindowSize();

  return (
    <>
      {/* <div className="relative flex flex-col justify-center h-full">
        <div className="mx-auto container max-w-6xl">
          <div className="max-w-fit">
            <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Rafael Angonese
            </h1>
            <span className="text-white flex justify-end">
              Criando mundos com letras e números.
            </span>
          </div>

          <p className="text-gray-200 mt-8 text-xl">
            Sou um desenvolvedor web full-stack focado em frontend.
          </p>

          <p className="text-gray-400 mt-2 tex-lg">
            Eu me especializei na criação de software utilizando as melhores
            tecnologias que são amplamente utilizadas e valorizadas no mercado
            de tecnologia.
          </p>

          <ShortcutHome />
        </div>

        <div className="absolute h-full w-full z-10 inset">
          <Canvas>
            <Suspense fallback={null}>
              <PlaneScene />
            </Suspense>
          </Canvas>
        </div>
      </div> */}
      {/* <div className="relative border-red-100 border w-full">
        <div className="absolute z-30 top-0 right-0 ">
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight />
              <pointLight position={[5, 5, 5]} intensity={1} />
              <pointLight position={[-3, -3, 2]} />

              <MyPlane />
            </Suspense>
          </Canvas>
        </div>
      </div> */}
      {/* <ShortcutHome /> */}
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
