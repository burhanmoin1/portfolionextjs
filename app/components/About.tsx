'use client';
import './About.css';
import {motion} from 'framer-motion';

const About = () => {

    const Aboutme = [
        {
            id: 1,
            fact: "I would describe myself as a constant learner. "
        }
    ]

    return (
        <section id='aboutme'>
        <div className='About'>
            <motion.h2
            initial={{opacity: 0}}
            whileInView={{opacity: 1, transition: { type: 'tween'}}}
            className='Aboutheading'>About Me</motion.h2>
            <div className='story'>
                <motion.div
                 initial={{opacity: 0}}
                 whileInView={{opacity: 1, transition: { delay:.2, type: 'tween'}}}
                 className='storytext'>
                <h2 className='storyheading'>Past</h2>
                <p className='storydetails'>Burhan, I am a coding enthusiast who has always been interested in technology. Although I developed an interest in coding when I was really young, I did not start coding until I was 18. Looking back, I realized that starting earlier might have given me a huge head start, but this initial delay has only fueled my desire to learn and make up for lost time.</p>
                </motion.div>
                <motion.div
                 initial={{opacity: 0}}
                 whileInView={{opacity: 1, transition: {delay:0.2,  type: 'tween'}}}
                className='storytext'>
                <h2 className='storyheading'>Present</h2>
                <p className='storydetails'>Once I actually started programming, I immersed yourself in the world of Python and quickly expanded my skill and knowledge on everything that was possible. Set to include various programming languages, frameworks, and technologies. This journey has taken me through the development of websites, Windows software, and even into the realms of machine learning and artificial intelligence.</p>
                </motion.div>
                <motion.div 
                 initial={{opacity: 0}}
                 whileInView={{opacity: 1, transition: {delay:.2, type: 'tween'}}}
                 className='storytext'>
                <h2 className='storyheading'>Future</h2>
                <p className='storydetails'>Despite my initial regret about starting later than I would have liked, I are now making significant strides in the tech world, confidently building and deploying complex applications. This transformation from a late starter to a highly skilled developer speaks to my dedication, adaptability, and relentless pursuit of knowledge. Currently working on multiple projects that I would have never thought I would be able to do. Future looks bright, once I have succesfully built and deployed everything I am aspiring about, it will be amazing.</p>
                </motion.div>
            </div>
        </div>
        </section>
    );
};

export default About;