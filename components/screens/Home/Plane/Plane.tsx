import { useFrame } from "@react-three/fiber";
import Plane from "components/Plane";
import useWindowScrollPositions from "hooks/useWindowScrollPositions";
import useWindowSize from "hooks/useWindowSize";
import { useEffect, useRef, useState } from "react";

const PlaneScene: React.FC = () => {
  const { scrollX, scrollY } = useWindowScrollPositions();
  const { height, width } = useWindowSize();
  const [lastPosition, setLastPosition] = useState(scrollY);

  const ref = useRef<THREE.Group>(null!);

  // useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  useFrame(({ camera }) => {
    // Move mesh to be flush with camera
    // console.log("mudou algo aqui");
    //  console.log(ref)
    //  ref.current.rotation.y += 0.05;
    //    ref.current.position.x =+ 10;
    //  ref.current.rotation.x += 0.01
    // Apply offset
    //   ref.current.translateZ(+0.05);
    // ref.current.translateY(+0.01);
    // if (ref.current.position.z >= 10) {
    //   ref.current.translateZ(-20);
    // ref.current.translateY(-20);
    // }
    // console.log(ref.current.position)
    console.log("------------------------");
    console.log(camera.position);
    
    console.log("------------------------");
  });

  useEffect(() => {
    // ref.current.translateZ(0.1);
    console.log(ref.current);
    ref.current.position.z = -20;
  }, [scrollY]);

  return (
    <>
      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-3, -3, 2]} />
      {/* <CameraController /> */}

      <Plane ref={ref} scale={4} position={[0, 2, -20]} />

      {/* <Float
                speed={6}
                // rotationIntensity={1.3}
                rotationIntensity={0}
                position={[0, 0.1, 0]}
                // floatIntensity={2}
                floatIntensity={2}
              >
                <MyPlane />
              </Float> */}

      {/* <ScrollControls
                pages={3} // Each page takes 100% of the height of the canvas
                distance={1} // A factor that increases scroll bar travel (default: 1)
                damping={2} // Friction, higher is faster (default: 4)
                horizontal={false} // Can also scroll horizontally (default: false)
                infinite={false} // Can also scroll infinitely (default: false)
              >
                <Scroll>
              <MyPlane />
              </Scroll>
              </ScrollControls> */}
    </>
  );
};

export default PlaneScene;
