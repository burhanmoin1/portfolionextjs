'use client';
import './Footer.css';
import {motion} from 'framer-motion';

const Footer = () => {
    return (
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1, transition: {delay:.1, type: 'tween'}}}
        className='footer'>
            <h2 className='footerheading'>© Burhan Moin 2024</h2>
            <p className='footerpara'>Full Stack Developer</p>
        </motion.div>
    );
};

export default Footer;