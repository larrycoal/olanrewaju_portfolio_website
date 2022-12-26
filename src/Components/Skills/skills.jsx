import React from "react";
import { motion } from "framer-motion";
import "./skills.css";
import nodeIcon from "../../Assets/node_icon.png";
import reactIcon from "../../Assets/react_icon.png";
import sqlIcon from "../../Assets/sql_icon.png";
import CheckItOut from "../../Assets/CheckItOut.png";
const skillCard = [
  {
    icon: nodeIcon,
    name: "Backend Engineering",
  },
  {
    icon: reactIcon,
    name: "Frontend Engineering",
  },
  {
    icon: sqlIcon,
    name: "Database Design",
  },
];

const otherSkills = [
  "React",
  "VueJs",
  "Gatsbyjs",
  "ExpressJs",
  "SCSS",
  "MongoDb",
  "PostgreSql",
  "Redux",
  "Java",
  "Kotlin",
];

const displaySkillCard = (skill, idx) => (
  <motion.li
    key={idx}
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 1 }}
    transition={{ delay: 0.5 }}
  >
    <img src={skill.icon} alt="skill icon" />
    <p>{skill.name}</p>
  </motion.li>
);
const displayOtherSkills = (skill, idx) => (
  <motion.li key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
    {skill}
  </motion.li>
);
const Skills = () => {
  return (
    <>
      <section className="skills-wrapper">
        <div className="majorSkills">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 1 }}
            >
              What i offer
            </motion.h2>
            <ul>
              {skillCard.map((skill, idx) => displaySkillCard(skill, idx))}
            </ul>
          </div>
          <div className="checkImg">
            <motion.img
              src={CheckItOut}
              alt="check out my skills bitmoji"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 1 }}
            />
          </div>
        </div>
      </section>
      <section className="otherSkills">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 1 }}
          >
            Technologies i use
          </motion.h2>
          <ul>
            {otherSkills.map((skill, idx) => displayOtherSkills(skill, idx))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Skills;
