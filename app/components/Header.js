"use client";
import React , { useState, useEffect } from 'react';
import './Header.css';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (menuOpen && window.scrollY > 0.01) {
            setMenuOpen(false);
          }
        };

        if (menuOpen) {
          window.addEventListener('scroll', handleScroll);
        }
 
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [menuOpen]);

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

    const navContainer = {
        visible: {
          y: 0,
          transition: {
            delay: 0.1,
            type: 'tween'
          }
        },
        hidden: {
          y: -1200,
          transition: {
            delay: 0.1,
            duration: 0.2,
            type: 'tween'
          }
        }
      };

    return ( 
        <motion.div className="main-header">
            <motion.h1 initial={{ opacity: 0}} animate={{ opacity:1}} transition={{duration: 0.6, type: "tween", delay: 1.8}}
                className='HeaderLogoText' title=' Codecraft' >B.M. 
            </motion.h1>
            <motion.button initial={{ opacity:0}} animate={{opacity: 1}} transition={{duration: 0.6, type: "tween", delay: 1.8}} className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                <motion.div className="menu-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </motion.div>
            </motion.button>
            <AnimatePresence>
            {menuOpen && (
                <motion.div
                    className="menu-overlay"
                    initial="hidden"
                    animate={menuOpen ? "visible" : "hidden"}
                    exit="hidden"
                    variants={navContainer}
                >
                    <div className="menu-items">
                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.1}} >Home</motion.div>
                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.18}}>Blogs</motion.div>
                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.26}}onClick={handleWhatIDoButtonClick}>What I Do</motion.div>
                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.32}}>Portfolio</motion.div>

                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.44}}>Contact</motion.div>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </motion.div>
        );
    }

export default Header;
