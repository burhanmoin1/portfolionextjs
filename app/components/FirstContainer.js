"use client";
import React from "react";
import "./FirstContainer.css";
import { motion } from "framer-motion";
import Line from './line.png';
import Arrow from './arrowtwo.png';
import github from './github.png';
import linkedin from './linkedin.png';
import meline from './itis.png';
import burhanpic from './Burhanpic.png';

function FirstContainer () {

  return (
    <div className="first-container">
      <h2 className="first-heading">
        <img src={meline.src} className="meline"/>
        <img src={burhanpic.src} className="burhanpic"/>
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
      <img src={linkedin.src} className="linkedinicon"/>
      <img src={github.src} className="absolutegithub"/>
      <img src={Arrow.src} alt="line" className="absoluteline"/>
    </div>
    
  );
}
export default FirstContainer;
