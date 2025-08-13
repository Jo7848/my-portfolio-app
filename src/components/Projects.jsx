import React from 'react';
import { motion } from 'framer-motion';
import projectsData from '../data/projects';

// The animation variants can remain, we just won't apply them to the section.
// We'll leave the card variants for now.
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Projects() {
  return (
    // Temporarily remove the animation props from the main section
    <section
      id="projects"
      className="projects-section"
    >
      <div className="container">
        {/* We can keep the animation on the title and cards to see them fade in */}
        <motion.h2
          className="section-title"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          My Projects
        </motion.h2>

        <div className="projects-grid">
          {projectsData.map(project => (
            <motion.div
              className="project-card"
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-techs">
                  { (project.techs ?? []).map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-btn primary-btn">
                      Live Demo
                    </a>
                  )}
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-btn secondary-btn">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;