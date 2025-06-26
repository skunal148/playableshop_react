import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const IPhoneModel = ({ videoSrc }) => {
  const { scene } = useGLTF('/models/iphone15pro.glb');

  useEffect(() => {
    const video = document.createElement('video');
    video.src = videoSrc;
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;

    // Fallback play on user interaction
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        const resume = () => {
          video.play();
          window.removeEventListener('click', resume);
        };
        window.addEventListener('click', resume);
      });
    }

    const texture = new THREE.VideoTexture(video);
    texture.colorSpace = THREE.SRGBColorSpace; // <--- Add this line
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.repeat.set(1, 1);   // Controls zoom/stretch
    texture.offset.set(0, 0); // Controls position shift



    video.onplay = () => console.log("🎥 Video started playing");


    scene.traverse((child) => {
      if (child.isMesh) {
        // Optional: style the body
        if (/frame|body/i.test(child.name)) {
          child.material = child.material.clone();
          child.material.metalness = 1;
          child.material.roughness = 0.9;

        }



        if (child.name === 'xXDHkMplTIDAXLN') {
          console.log('✅ Applying video texture to mesh:', child.name);

          child.material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide,
            toneMapped: false,
          });
        }
      }
    });
  }, [scene, videoSrc]);

  return (
    <group
      scale={27}
      position={[-0.2, 0.2, 0.1]}
      rotation={[-0.2, Math.PI - 0.4, 0.1]}
    >
      <primitive object={scene} />
    </group>
  );
};

export default IPhoneModel;
