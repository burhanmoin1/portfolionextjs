'use client';
import './ThirdContainer.css';
import {motion} from 'framer-motion';

const ThirdContainer = () => {

    const chooseme = [
        {
            id: 1,
            statement: 'Full-Stack Expertise',
            details: "My proficiency in both front-end and back-end frameworks makes me a one-stop shop for complete web development. You don't need to hire separate developers for each layer of the stack, as you can handle everything from database to UI."
        },
        {
            id: 2,
            statement: 'Attention To Detail',
            details: "My passion for delivering high-quality, user-friendly solutions makes it so that I prioritize customer satisfaction and I take pride in my work. This attention to detail ensures that you will receive a polished product."
        },
        {
            id: 3,
            statement: 'Problem-Solving Skills',
            details: "My experience with challenging projects, such as integrating Django with MongoDB and creating custom authentication engines, shows my complex problems and finding innovation skills."
        },
    ]

    return (
        <div className="thirdcontainer">
            <h2 className='thirdheading'>Why Choose Me?</h2>
            <div className='chooseme'>
            {chooseme.map((reason) => (
            <motion.div 
            initial={{scale:0.9}}
            whileInView={{scale: 1, transition: {delay: 0.2}}}
            key={reason.id}
            className='square'>
                <p className='numberid'>{reason.id}</p>
                <h2 className='reason'>{reason.statement}</h2>
                <p className='details'>{reason.details}</p>
            </motion.div>
             ))}
             </div>
        </div>
    );
};

export default ThirdContainer;