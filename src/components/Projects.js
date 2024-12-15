import React, { useState } from "react";
import "./../assets/styles/Projects.css";

function Projects() {
  const [flipped, setFlipped] = useState(null);

  const projects = [
    {
      title: "Waqt – E-commerce Platform for Watches",
      image: require("../assets/images/logo.png"),  // التأكد من المسار الصحيح للصورة
      description:
        "As the product owner and full-stack developer, I led a team to create a full-stack e-commerce platform for watches, integrating Google login, PayPal (with sandbox setup), and ChatGPT for customer support, ensuring a seamless user experience.",
      github: "https://github.com/saja-massimi/waqt2",
      linkedin: "https://www.linkedin.com/posts/sohiub-bataineh_orangecodingacademy-fullstackdevelopment-activity-7260634180563177472-uRJF?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "FIT ME - Fitness Club Website",
      image: require("../assets/images/logo1.png"),  // تأكد من المسار الصحيح
      description:
        "An interactive, responsive fitness club website designed to boost member engagement, built with HTML, CSS, and JavaScript. Designs were translated from Sketch to code using Figma, with team coordination on Trello and API integration for dynamic data.",
      github: "https://github.com/sultan-bassam08/FitME_PROJECT_JAVASCRIPT",
      linkedin: "https://www.linkedin.com/posts/sohiub-bataineh_teamwork-fitnesswebsite-webdevelopment-activity-7250614379635740673-8pDA?utm_source=share&utm_medium=member_desktop",
    },
    
    {
      title: "Tayeb - Interactive Cooking Blog",
      image: require("../assets/images/logo3.png"), 
      description:
        "A versatile website designed for recipe lovers, featuring browsing, sharing, and uploading capabilities. Developed with React for the front-end and Laravel with MySQL for the back-end, ensuring smooth API connectivity and user-friendly functionality.",
      github: "https://github.com/Razanhroub/Tayeb_React_Laravel",
      linkedin: "https://www.linkedin.com/posts/username/fitme",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onMouseEnter={() => setFlipped(index)}
            onMouseLeave={() => setFlipped(null)}
          >
            <div className={`project ${flipped === index ? "flipped" : ""}`}>
              <div className="front">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
              </div>
              <div className="back">
                <p>{project.description}</p>
                <div className="links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  <a href={project.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
