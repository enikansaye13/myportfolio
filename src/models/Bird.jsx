import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import birdScene from "../assets/3d/bird.glb"
import { useFrame } from "@react-three/fiber";

const Bird = () => {
    const birdRef = useRef();
    const {scene, animations } = useGLTF(birdScene);
    const {actions} = useAnimations(animations, birdRef)

    useEffect(() =>{
      actions['Take 001'].play();
    }, [])

    useFrame(({clock, camera}) => {
      // update the y position to simulate the flight moving in a sin wave
birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

// check if the bird reach a setain endpoint relative to the camera
if(birdRef.current.position.x > camera.position.x + 10) {
  //change the direction backward and rotate the bird 180 degree on y-axis
  birdRef.current.rotation.y = Math.PI;
}else if(birdRef.current.rotation.x < camera.position.x - 10) {
  //change the position to forward and repeat the bird rotation
  birdRef.current.rotation.y = 0;
}

//update the x and z position base on the position
if(birdRef.current.rotation.y === 0){
  birdRef.current.position.x += 0.01;
  birdRef.current.position.z -= 0.01;
} else {
  birdRef.current.position.x -= 0.01;
  birdRef.current.position.z += 0.01;
}
    })

  return (
    <mesh 
      position={[-5, 2, 1]} 
      scale={[0.003, 0.003, 0.003]}
      ref={birdRef}
    >
        <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
