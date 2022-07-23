import { Canvas, useFrame } from "@react-three/fiber";
import { useTheme } from "next-themes";
import { FC, useRef } from "react";

type TorusKnotProps = {
  torusColor: string;
};
const TorusKnot: FC<JSX.IntrinsicElements["mesh"] & TorusKnotProps> = (
  props
) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    ref.current.rotation.y += 0.002;
    ref.current.rotation.x += 0.002;;
    ref.current.rotation.z += 0.002;;
  });
  return (
    <mesh ref={ref} {...props}>
      <torusKnotGeometry args={[10, 3, 128, 32]} />
      <meshPhysicalMaterial
        color={props.torusColor}
        emissive={"#000000"}
        roughness={0}
        metalness={0.0}
        reflectivity={1}
        clearcoat={0}
        clearcoatRoughness={0}
      />
    </mesh>
  );
};

export const TorusKnotScene: FC = () => {
  const theme = useTheme();
  return (
    <Canvas camera={{ position: [0, 0, 30] }}>
      <spotLight />
      <pointLight position={[-10, 10, 10]} />
      <ambientLight intensity={1} />
      <TorusKnot
        position={[0, 0, 0]}
        torusColor={theme.resolvedTheme === "light" ? "#fafafa" : "#18181b"}
      />
    </Canvas>
  );
};
