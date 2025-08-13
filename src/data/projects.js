// src/data/projects.js

const projects = [
  {
    id: 1, // Unique ID for each project
    title: "Cerullo Shoes Collection",
    image: "/images/cerullo-shoes-thumbnail.jpg", // Ensure this image exists in your public/images folder
    description: "A full-stack e-commerce style platform built with Node.js, Express, and MongoDB, featuring dynamic product display, an admin dashboard for product management, and direct WhatsApp integration for purchases.",
    techs: ["Node.js", "Express.js", "MongoDB", "CSS"],
    liveLink: 'https://supaz-shoe-collection-vmar.vercel.app/', // Updated live link
    githubLink: 'https://github.com/Jo7848/supaz-shoe-collection' // Updated GitHub link
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    image: "/images/portfolio-thumbnail.jpg", // Ensure this image exists in your public/images folder
    description: "This very website! A professional and responsive platform designed to showcase my web development skills and projects. Built with React for a dynamic user interface and modern development practices.",
    techs: ["React", "HTML", "CSS", "JavaScript", "Responsive Design", "Vite"],
    liveLink: 'https://indiatsis-portfolio.vercel.app/',
    githubLink: 'https://github.com/Jo7848/my-portfolio-app' // Updated GitHub link
  },
  // Add more projects here following the same structure!
   {
    id: 3,
    title: "vitalforge-website",
   image: "/images/vitalforge-website.jpg",
    description: "Vitalforge: A professional and responsive single-page application built with React to showcase a personal trainer's services and expertise. It features a dynamic user interface with smooth page transitions and a sleek, mobile-first design for an optimal user experience.",
    techs: ["React", "Vite", "HTML", "CSS", "JavaScript", "Responsive Design"],
     liveLink: "https://vitalforge-website.vercel.app/",
     githubLink: "https://github.com/Jo7848/vitalforge-website"
   }
   // Add more projects here following the same structure!
  // {
  //   id: 4,
  //   title: "Another Project",
  //   image: "/images/another-project-thumbnail.jpg",
  //   description: "Description for another project...",
  //   techs: ["Next.js", "TypeScript", "Tailwind CSS"],
  //   liveLink: "https://another-project.com",
  //   githubLink: "https://github.com/your-username/another-project"
  // }
];

export default projects;