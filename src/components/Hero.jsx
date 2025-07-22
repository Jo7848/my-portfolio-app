// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="hi-there">
          Hi there, I'm
        </motion.p>
        <motion.h1 variants={itemVariants} className="name">
          Joshua Indiatsi William
        </motion.h1>
        <motion.p variants={itemVariants} className="title">
          Full-Stack Web Developer
        </motion.p>
        <motion.p variants={itemVariants} className="description">
          Passionate about creating dynamic, responsive, and user-friendly web applications. Let's
          build something amazing together!
        </motion.p>
        <motion.div variants={itemVariants} className="hero-buttons">
          <motion.a
            href="#projects"
            className="btn primary-btn"
            variants={buttonVariants}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="btn secondary-btn"
            variants={buttonVariants}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;