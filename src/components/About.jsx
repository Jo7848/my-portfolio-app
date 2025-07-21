import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Joshua Indiatsi William, a passionate and dedicated Full-Stack Web Developer.
              My journey into the world of coding began with a fascination for how digital solutions
              can solve real-world problems. I thrive on bringing ideas to life through clean, efficient,
              and user-friendly code.
            </p>
            <p>
              I specialize in building dynamic web applications from the ground up, covering both
              front-end development with technologies like React, and robust back-end systems
              with Node.js and MongoDB. I'm constantly learning and exploring new technologies
              to enhance my skillset and deliver the best possible results.
            </p>
            <p>
              Outside of coding, I enjoy reading, gaming, exploring new tech. I am also a Sports and Exercise Scientist.
              I believe continuous learning and a creative mindset are key to success in this ever-evolving field.
            </p>
          </div>
          {/* You could add an image here later if you wish */}
          {/* <div className="about-image">
                <img src="/path/to/your/image.jpg" alt="Joshua Indiatsi William" />
              </div> */}
        </div>
      </div>
    </section>
  );
}

export default About;