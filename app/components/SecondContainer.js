'use client';
import "./SecondContainer.css";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

function SecondContainer ({refProp}) {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })
  const opacity = useTransform(scrollY, [100,500], [0,1]);
  const scale = useTransform(scrollY, [100, 500], [0.8, 1]);

  return (
    <section id="blackcontainer">
    <div className="second-container">
        <motion.div ref={refProp} style={{scale}} className="black-container-for-second">
            <p className='second-paragraph'>I specialize in creating eye-catching and captivating designs. Pairing them with robust and comprehensive backends, making sure that my solutions are responsive, secure and meet the needs of my clients.</p>
        </motion.div>
    </div>
    </section>
  );
}

export default SecondContainer;