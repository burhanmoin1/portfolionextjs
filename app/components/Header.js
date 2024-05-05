"use client";
import React , { useState, useEffect } from 'react';
import './Header.css';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = () => {
      const section = document.getElementById('blackcontainer');
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
  };

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
            <motion.h1 initial={{ opacity: 0}} animate={{ opacity:1}} transition={{duration: 0.6, type: "tween", delay: 1.4}}
                className='HeaderLogoText' title=' Codecraft' >B.M. 
            </motion.h1>
            <motion.button initial={{ opacity:0}} animate={{opacity: 1}} transition={{duration: 0.6, type: "tween", delay: 1.4}} className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
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
                        <motion.div className='menu-item' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.1}} >Home</motion.div>
                        <motion.div className='menu-item' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.18}}>Blogs</motion.div>
                        <motion.div className='menu-item' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.26}} onClick={scrollToSection}>What I Do</motion.div>
                        <motion.div className='menu-item' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.32}}>Portfolio</motion.div>

                        <motion.div className='menu-item' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.44}}>Contact</motion.div>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </motion.div>
        );
    }

export default Header;
