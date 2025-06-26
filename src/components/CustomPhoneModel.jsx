import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import IPhoneModel from './IPhoneModel';

const CustomPhoneModel = () => {
    
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} shadows dpr={[1, 2]}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <Environment preset="sunset" background={false} />
      <Suspense fallback={null}>
        <IPhoneModel videoSrc="/videos/demo.mp4"/>
      </Suspense>
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
};

export default CustomPhoneModel;