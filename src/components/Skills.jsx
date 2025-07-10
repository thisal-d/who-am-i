import React from "react";
import "../styles/Skills.css";
import SkillCard from "./SkillCard";

const skills = [
  { name: "Python", icon: "/icons/python.png" },
  { name: "JavaScript", icon: "/icons/javascript.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "Node.js", icon: "/icons/nodejs.png" },
  { name: "HTML5", icon: "/icons/html5.png" },
  { name: "CSS3", icon: "/icons/css3.png" },
  { name: "Git", icon: "/icons/git.png" },
  { name: "Tkinter", icon: "/icons/tkinter.png" },
  { name: "CustomTkinter", icon: "/icons/customtkinter.png" },
  // Add more as needed
];

const Skills = () => (
  <section className="skills-section">
    <h2 className="skills-title">Skills & Tech Stack</h2>
    <div className="skills-grid">
      {skills.map(skill => (
        <SkillCard key={skill.name} skill={skill}/>
      ))}
    </div>
  </section>
);

export default Skills;