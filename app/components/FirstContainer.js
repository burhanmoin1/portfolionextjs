"use client";
import React from "react";
import "./FirstContainer.css";
import { motion } from "framer-motion";
import Line from './line.png';
import Arrow from './arrowtwo.png';
import github from './github.png';
import mail from './mail.png';
import meline from './itis.png';
import burhanpic from './Burhanpic.png';
import resume from './resume-black.png';

function FirstContainer () {
  

  const handleWhatIDoButtonClick = () => {
    let scrollAmount = 900;
    if (window.innerWidth <= 767.98) {
      scrollAmount = 680;
    }
    
    const currentScroll = window.scrollY;
    const targetScroll = currentScroll + scrollAmount;
    const scrollDuration = 500;
    
    const startTime = performance.now();
    
    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / scrollDuration, 1);
      
      const easing = 1 - Math.pow(1 - progress, 3); // Ease-out cubic
      const scrollPosition = currentScroll + (scrollAmount * easing);
      
      window.scrollTo(0, scrollPosition);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };
  
    requestAnimationFrame(animateScroll);
  };

  return (
    <div className="first-container">
      <motion.img initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: .5, delay: .4}}}  src={meline.src} className="meline"/>
        <a 
          href="https://wa.me/923463637743?text=Hello!" 
          target="_blank" 
          rel="noopener noreferrer" 
        >
        <motion.img initial={{opacity: 0}} animate={{opacity:.8, transition: {duration: .5, delay: .4}}}  src={burhanpic.src} className="burhanpic"/></a>
      <h2 className="first-heading">
        
        <span className="hey">Hey,</span>
        <br />
        <span className="burhan">I&apos;m Burhan</span> {/* Fixed with &apos; */}
      </h2>
      <p className="first-paragraph">
        — an expert full stack developer, assisting clients with all of their
        developer needs.
      </p>
      <motion.button
        onClick={handleWhatIDoButtonClick}
        whileHover={{ scale: 1.4, transition: { delay: 0.01 } }}
        animate={{
          y: [0, 40, 0],
          transition: { repeat: Infinity, duration: 2, delay: 0.4, type: "tween" },
        }}
        className="arrow-button"
      >
        &#8595;
      </motion.button>
      <a href="/burhansresume.pdf">
      <motion.img initial={{opacity: 0}} animate={{opacity:1, transition: {duration: .5, delay: 1}}} src={resume.src} className="resumeicon" alt="Burhan Moin resume" /></a>
      <a href="mailto:m.burhanmoin1@gmail.com">
        <motion.img initial={{opacity: 0}} animate={{opacity:1, transition: {duration: .5, delay: .8}}} src={mail.src} className="mailicon" alt="Burhan Moin email" />
      </a>
      <a href="https://github.com/burhanmoin1">
      <motion.img initial={{opacity: 0}} animate={{opacity:1, transition: {duration: .5, delay: .6}}} src={github.src} alt="burhanmoingithub" className="absolutegithub"/></a>
      <motion.img initial={{opacity: 0}} animate={{opacity:1, transition: {duration: .5, delay: .4}}} src={Arrow.src} alt="line" className="absoluteline"/>
    </div>
    
  );
}
export default FirstContainer;
