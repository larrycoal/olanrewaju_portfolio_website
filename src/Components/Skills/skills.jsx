import React from "react";
import "./skills.css";
import nodeIcon from "../../Assets/node_icon.png";
import reactIcon from "../../Assets/react_icon.png";
import sqlIcon from "../../Assets/sql_icon.png";
import CheckItOut from "../../Assets/CheckItOut.png";
import { Fade, Slide, Zoom } from "react-reveal";
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
            <h2>Skills</h2>
            <Zoom right cascade>
              <ul>
                {skillCard.map((skill, idx) => displaySkillCard(skill, idx))}
              </ul>
            </Zoom>
          </div>
          <Slide right>
            <div className="checkImg">
              <img src={CheckItOut} alt="check out my skills bitmoji" />
            </div>
          </Slide>
        </div>
      </section>
      <section className="otherSkills">
        <div className="container">
          <h2>Tools</h2>
          <Fade left cascade>
            <ul>
              {otherSkills.map((skill, idx) => displayOtherSkills(skill, idx))}
            </ul>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Skills;
