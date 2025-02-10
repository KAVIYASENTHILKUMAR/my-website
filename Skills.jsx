import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", imgSrc: "https://skillicons.dev/icons?i=html" },
  { name: "CSS", imgSrc: "https://skillicons.dev/icons?i=css" },
  { name: "JavaScript", imgSrc: "https://skillicons.dev/icons?i=javascript" },
  { name: "React", imgSrc: "https://skillicons.dev/icons?i=react" },
  { name: "Node.js", imgSrc: "https://skillicons.dev/icons?i=nodejs" },
  { name: "MySQL", imgSrc: "https://skillicons.dev/icons?i=mysql" }
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={skill.imgSrc} alt={skill.name} />
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
