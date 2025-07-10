import React from "react";
import "../styles/Hero.css";

const Hero = () => (
  <section className="hero-section">
    <div className="hero-content">
      <p className="hero-title">Hi, I'm Thisal Dilmith 👋</p>
      <p className="hero-tagline">Python Developer • Open Source Enthusiast • UI Explorer</p>
      <p className="hero-description">
        I'm a Python developer who loves building helpful tools and 
        automating tasks. I enjoy working with the open source community
        and trying out new tech. This is my portfolio—take a look at 
        my projects and what I'm creating!
      </p>
    </div>
    <div className="hero-profile-image">
      <img src="/images/profile.jpg" alt="Thisal Dilmith" />
    </div>
  </section>
);

export default Hero;