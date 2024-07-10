'use client';
import './ThirdContainer.css';
import {motion} from 'framer-motion';

const ThirdContainer = () => {

    const services = [
        {
            id: 1,
            Service: "Single Page Application",
            Description: "I will design and develop a landing page that introduces users to your brand, creating a welcoming and engaging experience.",
            Time: "from 3 to 5 days"
        },
        {
            id: 2,
            Service: "Multi-Page Website",
            Description: "I will create a multi-page, upto 5 pages, website to showcase your business's services, portfolio, and contact information, offering users a comprehensive and easy-to-navigate experience.",
            Time: "from 5 to 8 days"         
        },
        {
            id: 3,
            Service: "E-commerce Platform",
            Description: "I will design and develop a full-featured e-commerce platform that includes product listings, shopping cart functionality, and a secure checkout process, providing your customers with a seamless online shopping experience.",
            Time: "from 5 to 8 days"  
        },
        {
            id: 4,
            Service: "Full Custom Website",
            Description: "I will design and build a fully customized website tailored to your specific requirements, offering unique design elements, custom functionalities, and a seamless user experience that reflects your brand identity.",
            Time: "from 5 to 8 days"  
        },
    ]

    const chooseme = [
        {
            id: 1,
            statement: 'Full-Stack Expertise',
            details: "My proficiency in both front-end and back-end frameworks makes me a one-stop shop for complete web development. You don't need to hire separate developers for each layer of the stack, I can handle everything from database to UI."
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
            initial={{scale:0.8}}
            whileInView={{scale: 1, transition: {delay: 0.1, type: 'tween'}}}
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