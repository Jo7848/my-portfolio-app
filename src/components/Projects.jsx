// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Cerullo Shoes Collection',
    description: 'A full-stack e-commerce-style platform built with Node.js, Express, and MongoDB, featuring dynamic product display, an admin dashboard for product management, and direct WhatsApp integration for purchase inquiries.',
    technologies: ['React (Frontend)', 'Node.js', 'Express.js', 'MongoDB', 'CSS', 'Full-Stack'],
    liveLink: 'https://supaz-shoe-collection-vmar.vercel.app/', // Make sure this is the correct, lowercase 's' link
    githubLink: 'https://github.com/Jo7848/supaz-shoe-collection', // REPLACE with your actual GitHub repo link
    image: '/images/cerullo-shoes-thumbnail.png' // You'll create this image file
  },
  {
    id: 2,
    title: 'Personal Portfolio Website',
    description: 'This very website! A professional and responsive platform designed to showcase my web development skills and projects. Built with React for a dynamic user interface and modern development practices.',
    technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Vite'],
    liveLink: '#', // This will be your deployed portfolio link later
    githubLink: 'https://github.com/your-username/my-portfolio-app', // REPLACE with your actual GitHub repo link
    image: '/images/portfolio-thumbnail.png' // You'll create this image file
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-techs">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-pill">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn project-btn primary-btn">
                    Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn project-btn secondary-btn">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;