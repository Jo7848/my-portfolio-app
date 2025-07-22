// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'; // For social icons
// If you need other icons, e.g., for phone or email, you would import them from @fortawesome/free-solid-svg-icons
// import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Animation variants for section (from the left)
const sectionVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Animation variants for titles and paragraphs (fade in up)
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Animation variants for form/info cards (fade in)
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
   _replyto: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // onSubmit is used for React state handling/logging, Formspree handles the actual submission
  const handleSubmit = (e) => {
    // e.preventDefault(); // Keep this commented out if you rely solely on Formspree's action attribute
    console.log('Form data before submission:', formData);
    // Formspree will handle the actual submission to your email via the form's action attribute
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the section is in view
    >
      <div className="container">
        <motion.h2
          className="section-title"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="contact-intro"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Have a question or want to work together? Feel free to reach out!
        </motion.p>

        <div className="contact-content">
          {/* CONTACT FORM */}
          <motion.form
            className="contact-form"
            action="https://formspree.io/f/xyzpezlg" // <--- **PASTE YOUR FORMSPREE URL HERE**
            method="POST"
            onSubmit={handleSubmit}
            variants={cardVariants} // Apply animation to the form card
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name" // Standard name attribute
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="_replyto" // Formspree uses _replyto for the sender's email
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message" // Standard name attribute
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="primary-btn">Send Message</button>
          </motion.form>

          {/* CONTACT INFO */}
          <motion.div
            className="contact-info"
            variants={cardVariants} // Apply animation to the info card
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3>Contact Details</h3>
            <p>Email: <a href="mailto:indiatsiwilliams@gmail.com">indiatsiwilliams@gmail.com</a></p>
            <p>Phone: <a href="tel:+254746631707">+254 746631707</a></p>
            <p>Location: Nairobi, Kenya</p>
            <div className="social-links">
              {/* GitHub Icon */}
              <a href="https://github.com/Jo7848" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faGithub} size="2x" /> {/* Use size="2x" for larger icons */}
              </a>
              {/* LinkedIn Icon */}
              <a href="https://linkedin.com/in/indiatsi-williams" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              {/* Twitter Icon */}
              <a href="https://twitter.com/@indiatsijo" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              {/* Facebook Icon */}
              <a href="https://facebook.com/profile.php?id=61576105915468" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;