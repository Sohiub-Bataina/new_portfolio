import React from "react";
import "./../assets/styles/Footer.css"; // تأكد من أن المسار صحيح للملف CSS

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="social-icons">
          {/* أيقونات وسائل التواصل الاجتماعي */}
          <a href="https://www.linkedin.com/in/sohiub-bataineh/" target="_blank" rel="noopener noreferrer">
            <img
             src={require("../assets/images/Linkedin_Icons.png")}
              alt="LinkedIn"
              className="icon"
              style={{ width: "50px" }}
            />
          </a>
          <a href="https://github.com/Sohiub-Bataina" target="_blank" rel="noopener noreferrer">
         <img
            src={require("../assets/images/github.png")}
            alt="GitHub"
            className="icon"
            style={{ width: "40px" }}
          />

          </a>
          <a href="mailto:sohiubbataina@gmail.com" target="_blank" rel="noopener noreferrer">
            <img
              src={require("../assets/images/email.png")}
              alt="Email"
              className="icon"
              style={{ width: "50px" }}
            />
          </a>
        </div>
        <ul className="footer-links">
          {/* روابط التنقل في الفوتر */}
          <li><a href="#hero">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
        <p className="footer-text">&copy; 2024 SOHIUB BATINEH | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
