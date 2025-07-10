import React from "react";
import "../styles/Skills.css";
import SkillCard from "./SkillCard";

const skills = [
  { name: "Python", icon: "/icons/skill/python.png" },
  { name: "C++", icon: "/icons/skill/c++.png" },
  { name: "JS", icon: "/icons/skill/javascript.png" },
  { name: "PHP", icon: "/icons/skill/php.png" },
  { name: "Java", icon: "/icons/skill/java.png" },
  { name: "HTML", icon: "/icons/skill/html.png" },
  { name: "MySql", icon: "/icons/skill/mysql.png" },
  { name: "HTML", icon: "/icons/skill/html.png" },
  { name: "React", icon: "/icons/skill/react.png" },
  { name: "C-Tkinter", icon: "/icons/skill/customtkinter.ico" },
  { name: "Tkinter", icon: "/icons/skill/tkinter.gif" },
  { name: "Tailwind", icon: "/icons/skill/tailwind_css.png" },
  { name: "VS Code", icon: "/icons/skill/visual_studio_code.png" },
  { name: "IntelliJ", icon: "/icons/skill/intellij.png" },
  { name: "Arduino", icon: "/icons/skill/arduino.png" },
  { name: "Android", icon: "/icons/skill/android.png" },
  { name: "GitHub", icon: "/icons/skill/github.png" },
  { name: "Git", icon: "/icons/skill/git.png" },
  // Add more as needed
];

const Skills = () => (
  <section className="skills-section">
    <p className="skills-title">Skills & Tech Stack</p>
    <p class="skills-description">
      Over time, I’ve picked up a bunch of tools and technologies—some through projects,
      others just by curiosity. I’m not a pro in everything here, but I’ve learned enough
      to build, break, and fix things on my own. These are the pieces that help me bring ideas to life.
    </p>
    <div className="skills-grid">
      {
        skills.map(
          (skill, index) => (
            <SkillCard skill={skill} key={index}/>
          )
        )
      }
    </div>
  </section>
);

export default Skills;