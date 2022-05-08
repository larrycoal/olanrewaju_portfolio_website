import React from "react";
import "./skills.css";
import nodeIcon from "../../Assets/node_icon.png";
import reactIcon from "../../Assets/react_icon.png";
import sqlIcon from "../../Assets/sql_icon.png";
const skillCard = [
  {
    icon: nodeIcon,
    name: "Backend Engeneering",
  },
  {
    icon: reactIcon,
    name: "Frontend Engeneering",
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
  "React-Router",
  "React Native",
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
          <h2>SKILLS</h2>
          <ul>{skillCard.map((skill, idx) => displaySkillCard(skill, idx))}</ul>
        </div>
      </section>
      <section className="otherSkills">
        <div className="container">
          <h2>Tools</h2>
          <ul>
            {otherSkills.map((skill, idx) => displayOtherSkills(skill, idx))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Skills;
