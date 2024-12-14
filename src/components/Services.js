import React from "react";
import "./../assets/styles/Services.css";

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="service-intro">
        <h2>My Services</h2>
        <p>
          As a Full-Stack Developer, I offer professional web and app development services, using technologies like React, PHP, and Laravel to create responsive, efficient, and user-friendly applications.
        </p>
      </div>
      <div className="services-list">
        <div className="service">
          <h3>Web Development</h3>
          <p>Building responsive websites with HTML, CSS, and JavaScript.</p>
        </div>
        <div className="service">
          <h3>App Development</h3>
          <p>Creating cross-platform apps with React and other frameworks.</p>
        </div>
        <div className="service">
          <h3>Back-End Development</h3>
          <p>Building secure and scalable back-end systems using PHP and Laravel.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
