import React from "react";
import "../assets/styles/Skills.css";

// استبدال الرموز التعبيرية بالصور
function Skills() {
  const skills = [
    { name: "HTML", icon: require("../assets/images/html-icon-removebg-preview.png"), description: "Web page development" },
    { name: "CSS", icon: require("../assets/images/css-icon.png"), description: "Designing and styling websites" },
    { name: "JavaScript", icon: require("../assets/images/js-icon1.png"), description: "User interface interaction" },
    { name: "React", icon: require("../assets/images/react1.png"), description: "Building interactive web applications" },
    { name: "API", icon: require("../assets/images/API.png"), description: "Designing and developing APIs" },
    { name: "PHP", icon: require("../assets/images/PHP.png"), description: "Server-side web development" },
    { name: "MySQL", icon: require("../assets/images/mysql.png"), description: "Database management" },
    { name: "Laravel", icon: require("../assets/images/laravel.png"), description: "PHP framework for building powerful web apps" },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-icon">
              <img src={skill.icon} alt={skill.name} />
            </div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
