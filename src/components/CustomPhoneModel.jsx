import React, { useRef, Suspense, useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, RoundedBox, Environment } from '@react-three/drei';
import * as THREE from 'three';

// This component handles the video texture for the screen
function VideoScreen({ videoSrc }) {
  // Memoize the video element to prevent re-creation
  const video = useMemo(() => {
    const vid = document.createElement('video');
    vid.src = videoSrc;
    vid.crossOrigin = 'Anonymous';
    vid.loop = true;
    vid.muted = true; // Muting is essential for autoplay
    vid.playsInline = true;
    vid.style.display = 'none'; // Keep the video element out of the layout
    return vid;
  }, [videoSrc]);

  useEffect(() => {
    const handleCanPlay = () => {
      video.play().catch(error => {
        console.error("Autoplay was prevented. A user interaction may be required.", error);
        // Fallback to play on the first user interaction
        const playOnClick = () => {
          video.play().catch(err => console.error("Could not play video on click.", err));
          window.removeEventListener('click', playOnClick);
        }
        window.addEventListener('click', playOnClick);
      });
    };
    
    document.body.appendChild(video);
    video.addEventListener('canplay', handleCanPlay);
    video.load();

    // Cleanup function
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.pause();
      if (document.body.contains(video)) {
        document.body.removeChild(video);
      }
    };
  }, [video]);

  // Memoize the video texture
  const texture = useMemo(() => {
    const tex = new THREE.VideoTexture(video);
    tex.wrapS = THREE.RepeatWrapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, [video]);

  return (
    <mesh position={[0, 0, 0.101]}>
      <planeGeometry args={[1.8, 3.9]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}


// This component assembles the complete phone model
function PhoneModel({ videoSrc }) {
  return (
    <group rotation-x={-0.10} rotation-y={-0.30}>
      {/* Phone Body with RoundedBox */}
      <RoundedBox
        args={[2, 4.2, 0.2]} // width, height, depth
        radius={0.1}         // corner radius
        smoothness={10}        // subdivision level for rounded corners
      >
        <meshStandardMaterial 
          color='#737373'
          roughness={0.5} 
          metalness={1} 
          
        />
      </RoundedBox>
    <Environment preset='city' background={false}/>

      {/* Screen Component */}
      <Suspense fallback={<meshBasicMaterial color="black" />}>
        <VideoScreen videoSrc={videoSrc} />
      </Suspense>
    </group>
  );
}

// Main component to export, which sets up the 3D scene
const CustomPhoneModel = ({ videoSrc }) => {
  return (
    <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }}>
      <ambientLight intensity={1.5} />
      <pointLight position={[5, 10, 5]} intensity={0.6}/>
      <directionalLight position={[0, 5, 5]} intensity={1.5} />

      <Suspense fallback={null}>
        <PhoneModel videoSrc={videoSrc} />
      </Suspense>

      <OrbitControls enableRotate={false} enablePan={true} enableZoom={true} />
    </Canvas>
  );
};

export default CustomPhoneModel;
