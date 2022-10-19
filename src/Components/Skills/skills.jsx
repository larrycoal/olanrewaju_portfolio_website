import React from "react";
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
  <li key={idx}>
    <img src={skill.icon} alt="skill icon" />
    <p>{skill.name}</p>
  </li>
);
const displayOtherSkills = (skill, idx) => <li key={idx}>{skill}</li>;
const Skills = () => {
  return (
    <>
      <section className="skills-wrapper">
        <div className="majorSkills">
          <div>
            <h2>What i offer</h2>
              <ul>
                {skillCard.map((skill, idx) => displaySkillCard(skill, idx))}
              </ul>
          </div>
            <div className="checkImg">
              <img src={CheckItOut} alt="check out my skills bitmoji" />
            </div>
        </div>
      </section>
      <section className="otherSkills">
        <div className="container">
          <h2>Technologies i use</h2>
            <ul>
              {otherSkills.map((skill, idx) => displayOtherSkills(skill, idx))}
            </ul>
        </div>
      </section>
    </>
  );
};

export default Skills;
