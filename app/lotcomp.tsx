"use client"

import React, { useEffect, useRef } from 'react';
import Lottie, { LottieProps } from 'lottie-react';
import animationData from '../public/Lottie/BH.json';

const Lotcomp: React.FC = () => {
  const myRef = useRef<LottieProps['lottieRef']>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const startScroll = 0;
      const endScroll = 1800;
      const maxScroll = endScroll - startScroll;
      const maxFrame = 180;
      const scrollFactor = 0.5;

      if (scrollPosition >= startScroll && scrollPosition <= endScroll) {
        let frame = Math.floor(((scrollPosition - startScroll) / maxScroll) * maxFrame * scrollFactor);
        frame = frame > maxFrame ? maxFrame : frame;
        if (myRef.current) {
          // @ts-ignore
          myRef.current.goToAndStop(frame, true); // TypeScript may not recognize goToAndStop without type definition
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Lottie
          lottieRef={myRef}
          animationData={animationData}
          autoplay={false}
          style={{ height: '100%', width: '1100px', position: 'sticky', top: '0' }}
        />
      </div>
    </div>
  );
};

export default Lotcomp;
