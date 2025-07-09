import React from "react";
import "../styles/Hero.css";

const Hero = () => (
  <section className="hero-section">
    <div className="hero-content">
      <p className="hero-title">Hi, I'm Thisal Dilmith 👋</p>
      <p className="hero-tagline">Python Developer • Open Source Enthusiast • UI Explorer</p>
      <p className="hero-description">
        I love building tools that empower others & experimenting with creative interfaces.<br/>
        Welcome to my portfolio — see what I'm working on!
      </p>
    </div>
    <div className="hero-profile-image">
      <img src="/images/profile.jpg" alt="Thisal Dilmith" />
    </div>
  </section>
);

export default Hero;