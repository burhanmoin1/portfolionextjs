'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerExample = () => {
  const containerRef = useRef(null);
  const pinElementRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const pinElement = pinElementRef.current;

    gsap.to(pinElement, {
      scrollTrigger: {
        trigger: pinElement,
        start: "top top",
        end: "+=200vh", // Unpins after 200% of the viewport height
        pin: true,
        pinSpacing: false, // Keeps the spacing correct when pinning
        markers: true, // Add markers to debug
      },
    });

    // Cleanup function to remove the scrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: '300vh', // Increased height for demonstration
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '100px',
      }}
    >
      <div
        ref={pinElementRef}
        style={{
          padding: '20px',
          backgroundColor: 'lightcoral',
          width: '80%',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        This element will be pinned at the top.
      </div>
      <div
        style={{
          padding: '20px',
          backgroundColor: 'lightblue',
          width: '80%',
          textAlign: 'center',
          marginTop: '20px',
        }}
      >
        Other content goes here...
      </div>
      <div
        style={{
          padding: '20px',
          backgroundColor: 'lightgreen',
          width: '80%',
          textAlign: 'center',
          marginTop: '20px',
        }}
      >
        More content...
      </div>
    </div>
  );
};

export default ScrollTriggerExample;


