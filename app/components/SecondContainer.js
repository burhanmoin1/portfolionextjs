'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./SecondContainer.css";

gsap.registerPlugin(ScrollTrigger);

const SecondContainer = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;

    gsap.fromTo(text, 
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 90%", // Adjust start position as needed
          end: "top 20%", // Adjust end position as needed
          scrub: true,
          onUpdate: self => {
            console.log("Scroll progress:", self.progress);
          }
        }
      }
    );
  }, []);

  return (
    <section id="blackcontainer" ref={sectionRef}>
      <div className="second-container">
        <div ref={textRef} className="black-container-for-second">
          <p className='second-paragraph'>
            I specialize in creating eye-catching and captivating designs. Pairing them with robust and comprehensive backends, making sure that my solutions are responsive, secure and meet the needs of my clients.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SecondContainer;
