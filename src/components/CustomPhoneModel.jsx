import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import IPhoneModel from './IPhoneModel';

const CustomPhoneModel = () => {
    
  return (
    
        <IPhoneModel videoSrc="/videos/demo1.mp4"/>
      
  );
};

export default CustomPhoneModel;