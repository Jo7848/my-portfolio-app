// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Animation Variants (can be defined once and reused, or inline)
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.6
    }
  }
};

function About() {
  return (
    <motion.section
      id="about"
      className="about-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible" // Animate when in view
      viewport={{ once: true, amount: 0.3 }} // Only animate once, when 30% of element is visible
    >
      <div className="container">
        <motion.h2 variants={textVariants} className="section-title">About Me</motion.h2>
        <motion.p variants={textVariants} className="about-text">
          Hello! I'm Joshua Indiatsi William, a passionate and dedicated Full-Stack Web Developer. My journey into the world of coding began with a fascination for how digital solutions can solve real-world problems. I thrive on bringing ideas to life through clean, efficient, and user-friendly code.
        </motion.p>
        <motion.p variants={textVariants} className="about-text">
          I specialize in building dynamic web applications from the ground up, covering both front-end development with technologies like React, and robust back-end systems with Node.js and MongoDB. I'm constantly learning and exploring new technologies to enhance my skillset and deliver the best possible results.
        </motion.p>
        <motion.p variants={textVariants} className="about-text">
          Outside of coding, I enjoy reading, gaming, exploring new tech. I am also a Sports and Exercise Scientist. I believe continuous learning and a creative mindset are key to success in this ever-evolving field.
        </motion.p>
      </div>
    </motion.section>
  );
}

export default About;