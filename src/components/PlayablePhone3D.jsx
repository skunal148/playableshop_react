import React, { useRef, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function PhoneModel({ videoSrc }) {
  const { scene } = useGLTF('/models/phone.glb');
  const videoRef = useRef(null);

useEffect(() => {
  if (!videoRef.current) {
    videoRef.current = document.createElement('video');
  }
  const video = videoRef.current;

  video.src = videoSrc;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.crossOrigin = 'anonymous';

  if (!document.body.contains(video)) {
    document.body.appendChild(video);
  }

  const startPlayback = () => {
    video.play().catch(error => console.error("Video play failed:", error));
  };

  video.addEventListener('canplay', startPlayback);
  video.load();

  let screenMesh = null;

  scene.traverse((child) => {
    if (child.isMesh && child.material.name === "Natural_Titanium_Screen") {
      screenMesh = child;
    }
  });

  if (screenMesh) {
    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.colorSpace = THREE.SRGBColorSpace;
    videoTexture.flipY = false;

    video.addEventListener('loadedmetadata', () => {
      const aspect = video.videoWidth / video.videoHeight;

      if (aspect >= 1) {
        // Landscape video
        videoTexture.repeat.set(1, 1 / aspect);
        videoTexture.offset.set(0, (1 - videoTexture.repeat.y) / 2);
      } else {
        // Portrait video (common for phones)
        videoTexture.repeat.set(aspect, 1);
        videoTexture.offset.set((1 - videoTexture.repeat.x) / 2, 0);
      }

      screenMesh.material.map = videoTexture;
      screenMesh.material.emissiveMap = videoTexture;
      screenMesh.material.emissive = new THREE.Color(0xffffff);
      screenMesh.material.needsUpdate = true;

      console.log(`✅ Video texture applied with aspect ratio: ${aspect.toFixed(2)}`);
    });

  } else {
    console.error("❌ Screen mesh not found. Check the material name.");
  }

  return () => {
    video.pause();
    video.removeEventListener('canplay', startPlayback);
  };
}, [videoSrc, scene]);

  // --- Model Display Logic ---
  const rotationX = 0.7;
  const rotationY = 2;
  const rotationZ = 0.3;
  const positionY = -3;

  // We render a <primitive> element, which can directly display a three.js object.
  // It's a best practice to clone the scene object to prevent multiple instances
  // of this component from accidentally sharing the same object in memory.
  return (
    <primitive
      object={scene}
      scale={[3, 3, 3]}
      rotation={[rotationX, rotationY, rotationZ]}
      position={[0, positionY, 0]}
    />
  );
}

/**
 * This is the main component you will import into your app.
 * It sets up the 3D canvas, lighting, and Suspense boundary.
 */
const PlayablePhone3D = ({ videoSrc }) => {
  return (
    <Canvas camera={{ position: [1, -10, 7], fov: 50 }}>
      {/* Basic lighting for the scene */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <PhoneModel videoSrc={videoSrc} />
      </Suspense>

      {/* Optional OrbitControls for development/testing */}
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
};

export default PlayablePhone3D;
