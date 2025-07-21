import React from 'react';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="hero-greeting">Hi there, I'm</p>
        <h1 className="hero-name">Joshua Indiatsi William</h1> {/* Replace with your actual name */}
        <h2 className="hero-title">Full-Stack Web Developer</h2> {/* Or change to your primary role */}
        <p className="hero-description">
          Passionate about creating dynamic, responsive, and user-friendly web applications.
          Let's build something amazing together!
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">View My Work</a>
          <a href="#contact" className="btn secondary-btn">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;