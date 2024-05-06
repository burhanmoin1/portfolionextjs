'use client'
import "./Portfolio.css";
import {motion} from 'framer-motion';

const Portfolio = () => {
    return (
        <div className="Portfolio">
            <motion.h1  initial={{y:40}}
            whileInView={{y: 0, transition: {delay: 0.1, type: 'tween'}}} className="PortfolioHeading">
                Portfolio
            </motion.h1>
        </div>
    );
};

export default Portfolio;