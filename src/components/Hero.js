import React from "react";
import "./../assets/styles/Hero.css";
import heroImage from './../assets/images/image2.png';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="text-content">
          <h1>SOHIUB QADRY BATINEH</h1>
          <p>Full Stack Developer</p>
        </div>
        <div className="image-content">
          <img src={heroImage} alt="Portfolio Image" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
