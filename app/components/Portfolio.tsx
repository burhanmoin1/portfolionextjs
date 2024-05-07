'use client'
import "./Portfolio.css";
import deltagif from './deltacommunication3.gif';
import wizardrygif from './wizardrybrews.gif';
import westgatecapitalimg from './westgatecapitalimg.jpg';
import chordengine from './chordengine.jpg';
import {motion} from 'framer-motion';

const Portfolio = () => {
    const portfoliodetails = [
        {
            id: 1,
            image: deltagif.src,
            name: "Delta Communication",
            link: "https://www.deltacommunication.xyz/",
            details: "Delta communication is a local internet and cable provider. I successfully created and deployed a website for them. Used nextjs for the complete website stack, apis and routes all done using nextjs routing.",
            tech: 'Made using: Next.js, TypeScript, HTML, CSS, mongoDB',
        },
        {
            id: 2,
            image: wizardrygif.src,
            name: "Wizardry Brews",
            link: "https://wizardry-brews.vercel.app/",
            details: "Created a web app using next.js for my coffee startup",
            tech: 'Made using: Next.js, TypeScript, HTML, CSS',
        },
        {
            id: 2,
            image: westgatecapitalimg.src,
            name: "Westgate Capital",
            link: "https://westgatecapital.netlify.app/",
            details: "Westgate Capital was a startup real estate company based in Montreal, Canada. I was assigned to create a website for them where users will be able to view all of their listings. Used react.js for development then migrated to next.js and deployed.",
            tech: 'Made using: React.js, JavaScript, HTML, CSS, mongoDB',
        },
        {
            id: 2,
            image: chordengine.src,
            link: "https://chordengine.com",
            name: "Chordengine",
            details: "Chordengine is a tech/music startup taking inspiration from websites like soundcloud. The main goal is to have a platform where guitars can share guitar chords and comment on others.",
            tech: 'Made using: React.js, Django, python, HTML, CSS, mongoDB',
        },
    ]
    return (
        <section id="portfolio">
        <div className="Portfolio">
            <motion.h1  initial={{y:40}}
            whileInView={{y: 0, transition: {delay: 0.1, type: 'tween'}}} className="PortfolioHeading">
                Portfolio
            </motion.h1>
            {portfoliodetails.map((project) => (
            <motion.div 
                 initial={{opacity: 0}}
                 whileInView={{opacity: 1, transition: { type: 'tween'}}}
            key={project.id}
            className='projects'>
                <a href={project.link}>
                <motion.img 
                 initial={{scale:0.8}}
                 whileInView={{scale: 1, transition: {delay: 0.1, type: 'tween'}}}
                 src={project.image}
                 whileHover={{scale: 1.02, transition: {delay: 0.1, type: 'tween'}}} alt="Burhan Moin Projects Portfolio" className='projectimg'/></a>
                <div className="projecttext">
                <h2 className='projectname'>{project.name}</h2>
                <p className='projectdetails'>{project.details}</p>
                <p className="techused">{project.tech}</p>
                </div>
            </motion.div>
             ))}
        </div>
        </section>
    );
};

export default Portfolio;