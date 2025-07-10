import React from "react";
import "../styles/Hero.css";

const Hero = () => (
  <section className="hero-section">
    <div className="hero-content">
      <p className="hero-title">Hi, I'm Thisal Dilmith 👋</p>
      <p className="hero-tagline">Python Developer • Open Source Enthusiast • UI Explorer</p>
      <p className="hero-description">
        I'm a passionate Python developer and open source contributor. 
        My interests lie in building tools, automating processes, and developing solutions 
        that empower both developers and end-users. 
        I enjoy collaborating with the open source community and
        am always eager to learn and experiment with new technologies. 
        Welcome to my portfolio—explore my projects and see what I'm working on!
      </p>
    </div>
    <div className="hero-profile-image">
      <img src="/images/profile.jpg" alt="Thisal Dilmith" />
    </div>
  </section>
);

export default Hero;