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

function FirstContainer () {

  return (
    <div className="first-container">
      <motion.img initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: .5, delay: .7}}}  src={meline.src} className="meline"/>
        <a 
          href="https://wa.me/923463637743?text=Hello!" 
          target="_blank" 
          rel="noopener noreferrer" 
        >
        <motion.img initial={{opacity: 0}} animate={{opacity:.8, transition: {duration: .5, delay: .7}}}  src={burhanpic.src} className="burhanpic"/></a>
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
        whileHover={{ scale: 1.4, transition: { delay: 0.01 } }}
        animate={{
          y: [0, 40, 0],
          transition: { repeat: Infinity, duration: 2, delay: 0.4, type: "tween" },
        }}
        className="arrow-button"
      >
        &#8595;
      </motion.button>

      <a href="mailto:m.burhanmoin1@gmail.com">
        <motion.img initial={{opacity: 0}} animate={{opacity:1, transition: {duration: .5, delay: .7}}} src={mail.src} className="mailicon" alt="Email Icon" />
      </a>
      <a href="https://github.com/burhanmoin1">
      <motion.img initial={{opacity: 0}} animate={{opacity:1, transition: {duration: .5, delay: .7}}} src={github.src} className="absolutegithub"/></a>
      <motion.img initial={{opacity: 0}} animate={{opacity:1, transition: {duration: .5, delay: .7}}} src={Arrow.src} alt="line" className="absoluteline"/>
    </div>
    
  );
}
export default FirstContainer;
