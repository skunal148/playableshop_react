import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import SecondIPhoneModel from './SecondIPhoneModel';

const SecondPhoneModel = () => {
    
  return (
   
        <SecondIPhoneModel videoSrc="/videos/demo (1).mp4"/>
      
  );
};

export default SecondPhoneModel;