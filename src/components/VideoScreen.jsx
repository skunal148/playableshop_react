import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const VideoScreen = ({ videoSrc, mesh }) => {
    console.log('🎥 Attaching video to:', mesh?.name);
    mesh.material = new THREE.MeshBasicMaterial({ color: 'red' });
  const videoRef = useRef(document.createElement('video'));

  useEffect(() => {
    const video = videoRef.current;
    video.src = videoSrc;
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.warn('Video play failed:', error);
      });
    }

    const texture = new THREE.VideoTexture(video);
    texture.flipY = false; // sometimes needed depending on UVs
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;
    
   //mesh.material = new THREE.MeshBasicMaterial({ map: texture });
  }, [videoSrc, mesh]);

};

export default VideoScreen;