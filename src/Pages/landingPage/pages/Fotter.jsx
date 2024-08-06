import React from "react";
import "./Fotter.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://cuvette.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <br />
            @cuvette
          </a>
        </p>
      </div>
      <div className="footer-section">
        <a href="#status" target="_blank" rel="noopener noreferrer">
          Status
        </a>
        <a href="#documentation" target="_blank" rel="noopener noreferrer">
          Documentation
        </a>
        <a href="#roadmap" target="_blank" rel="noopener noreferrer">
          Roadmap
        </a>
        <a href="#pricing" target="_blank" rel="noopener noreferrer">
          Pricing
        </a>
      </div>
      <div className="footer-section">
        <a href="#discord" target="_blank" rel="noopener noreferrer">
          Discord
        </a>
        <a href="#github" target="_blank" rel="noopener noreferrer">
          GitHub repository
        </a>
        <a href="#twitter" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="#linkedin" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="#oss-friends" target="_blank" rel="noopener noreferrer">
          OSS Friends
        </a>
      </div>
      <div className="footer-section">
        <a href="#about" target="_blank" rel="noopener noreferrer">
          About
        </a>
        <a href="#contact" target="_blank" rel="noopener noreferrer">
          Contact
        </a>
        <a href="#terms-of-service" target="_blank" rel="noopener noreferrer">
          Terms of Service
        </a>
        <a href="#privacy-policy" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
