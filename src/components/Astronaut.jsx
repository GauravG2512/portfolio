import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useMotionValue, useSpring } from "motion/react";
import { useFrame } from "@react-three/fiber";

export function Astronaut(props) {
  const group = useRef();
  const { scene, animations } = useGLTF(
    "/models/tenhun_falling_spaceman_fanart.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (animations && animations.length > 0 && actions) {
      const firstAction = actions[animations[0].name];
      if (firstAction) {
        firstAction.play();
      }
    }
  }, [actions, animations]);

  const targetY = props.position ? props.position[1] : -1;
  const yPosition = useMotionValue(targetY + 4);
  const ySpring = useSpring(yPosition, { damping: 30 });

  useEffect(() => {
    ySpring.set(targetY);
  }, [ySpring, targetY]);

  useFrame(() => {
    if (group.current) {
      group.current.position.y = ySpring.get();
    }
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={props.rotation || [0, 0, 0]}
      scale={props.scale || 0.3}
      position={props.position || [1.3, -1, 0]}
    >
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/tenhun_falling_spaceman_fanart.glb");
