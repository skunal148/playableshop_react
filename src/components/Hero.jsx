import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';

// Create a component that will display a phone with video
const PhoneWithVideo = ({ position, rotation, videoSrc, fromTop = false }) => {
  const { scene } = useGLTF('/models/iphone15pro.glb', true);
  const clonedScene = scene.clone();
  const [visible, setVisible] = useState(false);
  
  // Animation spring for the phone
  const { springPosition, springOpacity } = useSpring({
    springPosition: visible ? position : [
      position[0], 
      fromTop ? position[1] + 10 : position[1] - 10, 
      position[2],
    ],
    springOpacity: visible ? 1 : 0,
    config: { mass: 1, tension: 120, friction: 14 },
    delay: fromTop ? 0 : 300 // Delay the second phone animation
  });
  
  // Set visible after component mounts to trigger animation
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  React.useEffect(() => {
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
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.repeat.set(1, 1);
    texture.offset.set(0, 0);

    clonedScene.traverse((child) => {
      if (child.isMesh) {
        if (/frame|body/i.test(child.name)) {
          child.material = child.material.clone();
          child.material.metalness = 1;
          child.material.roughness = 0.9;
        }

        if (child.name === 'xXDHkMplTIDAXLN') {
          child.material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.DoubleSide,
            toneMapped: false,
          });
        }
      }
    });
  }, [clonedScene, videoSrc]);

  // Add subtle floating animation using useFrame
  const phoneRef = useRef();
  
  useFrame(({ clock }) => {
    if (phoneRef.current && visible) {
      // Very subtle floating effect, similar to float-elements CSS
      const speed = fromTop ? 1.6 : 1.4; // Slower speed for more subtle movement
      const amplitude = fromTop ? 0.005 : 0.005; // Even smaller amplitude for top phone to prevent cutoff
      phoneRef.current.position.y = Math.sin(clock.elapsedTime * speed) * amplitude;
    }
  });
  
  return (
    <animated.group
      scale={27}
      position={springPosition}
      rotation={rotation}
      opacity={springOpacity}
    >
      <group ref={phoneRef}>
        <primitive object={clonedScene} />
      </group>
    </animated.group>
  );
};

const Hero = () => {
  // Check if the screen is mobile size
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Function to check if screen is mobile size
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        {/* Conditionally render content based on screen size */}
        {isMobile ? (
          // Mobile layout - phones on top, content below
          <>
            <div className="hero-image mobile-hero-image">
              <Canvas camera={{ position: [0, 0, 7.5], fov: 50 }} shadows dpr={[1, 2]}>
                <ambientLight intensity={1.2} />
                <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
                <Environment preset="night" background={false} intensity={1.2} />
                <Suspense fallback={null}>
                  {/* First phone on the left - transitions from top */}
                  <PhoneWithVideo 
                    position={[-1, 0.6, 0]} 
                    rotation={[-0.2, Math.PI - 0.4, 0.1]} 
                    videoSrc="/videos/demo (1).mp4" 
                    fromTop={true}
                  />
                  
                  {/* Second phone on the right - transitions from bottom */}
                  <PhoneWithVideo 
                    position={[0.9, 0.1, 0.2]} 
                    rotation={[-0.2, Math.PI + 0.4, -0.1]} 
                    videoSrc="/videos/demo (1).mp4" 
                    fromTop={false}
                  />
                </Suspense>
                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
              </Canvas>
              <div className="floating-elements">
                <div className="float-element float-1">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="float-element float-2">
                  <i className="fas fa-users"></i>
                </div>
                <div className="float-element float-3">
                  <i className="fas fa-rocket"></i>
                </div>
              </div>
            </div>
            <div className="hero-content">
              <h1>
                Create<br /><span className="highlight">Playable</span> Ads<br />That
                Convert.
              </h1>
              <p>
                Interactive playable ads, powered by data. Track users and get
                actionable insights.
              </p>
              <div className="hero-buttons">
                <a href="#solutions" className="btn btn-secondary">Explore Solutions</a>
              </div>
            </div>
          </>
        ) : (
          // Desktop layout - original layout
          <>
            <div className="hero-content">
              <h1>
                Create<br /><span className="highlight">Playable</span> Ads<br />That
                Convert.
              </h1>
              <p>
                Interactive playable ads, powered by data. Track users and get
                actionable insights.
              </p>
              <div className="hero-buttons">
                <a href="#solutions" className="btn btn-secondary">Explore Solutions</a>
              </div>
            </div>
            <div className="hero-image">
              <Canvas camera={{ position: [0, 0, 8.5], fov: 45 }} shadows dpr={[1, 2]}>
                <ambientLight intensity={1.2} />
                <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
                <Environment preset="night" background={false} intensity={1.2} />
                <Suspense fallback={null}>
                  {/* First phone on the left - transitions from top */}
                  <PhoneWithVideo 
                    position={[-0.9, 1.1, 0]} 
                    rotation={[-0.2, Math.PI - 0.4, 0.1]} 
                    videoSrc="/videos/demo (1).mp4" 
                    fromTop={true}
                  />
                  
                  {/* Second phone on the right - transitions from bottom */}
                  <PhoneWithVideo 
                    position={[1, 0.5, 0.2]} 
                    rotation={[-0.2, Math.PI + 0.4, -0.1]} 
                    videoSrc="/videos/demo (1).mp4" 
                    fromTop={false}
                  />
                </Suspense>
                <OrbitControls enablePan enableZoom enableRotate />
              </Canvas>
              <div className="floating-elements">
                <div className="float-element float-1">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="float-element float-2">
                  <i className="fas fa-users"></i>
                </div>
                <div className="float-element float-3">
                  <i className="fas fa-rocket"></i>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;