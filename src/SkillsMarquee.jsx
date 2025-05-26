import React, { useRef } from "react";
import "./SkillsMarquee.css";

const skills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "Node.js" },
  { name: "Express" },
  { name: "MongoDB" },
  { name: "Git" },
  { name: "Bootstrap" },
  { name: "TypeScript" },
];

export default function SkillsMarquee({ skills }) {
  const marqueeRef = useRef(null);

  // Pause on hover
  const handleMouseEnter = () => {
    marqueeRef.current.style.animationPlayState = "paused";
  };
  const handleMouseLeave = () => {
    marqueeRef.current.style.animationPlayState = "running";
  };

  // Duplicate skills for seamless scroll
  const skillList = [...skills, ...skills];

  return (
    <div className="skills-marquee-container">
      <ul
        className="skills-marquee"
        ref={marqueeRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {skillList.map((skill, idx) => (
          <li className="skill-pill" key={idx}>
            <span className="skill-text">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
} 