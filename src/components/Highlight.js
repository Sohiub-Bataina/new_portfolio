import React from "react";
import "./../assets/styles/Highlight.css";
import useHighlightAnimation from "../hooks/useHighlightAnimation";

function Highlight() {
  const { 
    isHovered, 
    isPressed, 
    handleMouseEnter, 
    handleMouseLeave, 
    handleMouseDown, 
    handleMouseUp 
  } = useHighlightAnimation();

  return (
    <section id="highlight" className="highlight-section">
      <div
        className={`highlight-card ${isHovered ? "hovered" : ""} ${isPressed ? "pressed" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <h2>Highlight</h2>
        <p>
          As a Full Stack Developer with a strong foundation in both front-end
          and back-end technologies, I specialize in building seamless,
          interactive, and user-centric applications. My experience spans from
          leading e-commerce projects to building responsive websites, with a
          focus on innovation, team collaboration, and agile methodologies.
        </p>
      </div>
    </section>
  );
}

export default Highlight;
