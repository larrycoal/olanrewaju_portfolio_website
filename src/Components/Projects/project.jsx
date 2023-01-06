import React from "react";
import { motion } from "framer-motion";
import "./project.css";

const allProjects = [
  {
    name: "WE DANCE",
    desc: "This is a social media platform for event organizers and users looking to have fun in new territory. We dance is an open source project i contribute to with a large number of users",
    tag: ["Nuxtjs", "scss", "Firebase"],
    image:
      "https://res.cloudinary.com/dbdrtuscd/image/upload/v1652023482/Screenshot_2022-05-06_at_10.26.22_AM_kjewtp.png",
    github: "https://github.com/we-dance/platform",
    liveLink: "https://wedance.vip/",
  },
  {
    name: "Shophova",
    desc: "This is a landing page for a fashion store displaying beautiful layout and color scheme",
    tag: ["Html", "Css"],
    image:
      "https://res.cloudinary.com/dbdrtuscd/image/upload/v1652023482/Screenshot_2022-05-06_at_10.26.52_AM_px3dhv.png",
    github: "https://github.com/larrycoal/Socials",
    liveLink: "https://shophova.netlify.app/",
  },
  {
    name: "OG NFT",
    desc: "Designed and built this dApp to mint custom made NFT deployed on the solana devnet",
    tag: ["Solidity", "React", "Javascript"],
    image:
      "https://res.cloudinary.com/dbdrtuscd/image/upload/v1652023483/Screenshot_2022-05-06_at_10.34.53_AM_g0yl7w.png",
    github: "https://github.com/larrycoal/LandingPage_remote",
    liveLink: "https://og-nft.vercel.app/",
  },
  {
    name: "Quiz IT",
    desc: "This is a quiz application that test your knowledge on various web related technologies. its is a timed test and display result of test",
    tag: ["Html", "Css", "Javascript"],
    image:
      "https://res.cloudinary.com/dbdrtuscd/image/upload/v1652023482/Screenshot_2022-05-06_at_10.24.54_AM_uyplwn.png",
    github: "https://github.com/larrycoal/LandingPage_remote",
    liveLink: "https://quiizit.netlify.app/",
  },
  {
    name: "GITHUB CLONE",
    desc: "You can search any github profile with this github clone website",
    tag: ["Html", "Css", "Javascript", "Graphql"],
    image:
      "https://res.cloudinary.com/dbdrtuscd/image/upload/v1652023482/Screenshot_2022-05-06_at_10.33.46_AM_flgjyf.png",
    github: "https://github.com/larrycoal/LandingPage_remote",
    liveLink: "https://loving-kilby-66f091.netlify.app",
  },
  {
    name: "MEMORY GAME",
    desc: "This is a game built with javascript, it put your meomry to the test ",
    tag: ["Html", "Css", "Javascript"],
    image:
      "https://res.cloudinary.com/dbdrtuscd/image/upload/v1668269929/Screenshot_2022-11-12_at_11.16.52_s0phy9.png",
    github: "https://github.com/larrycoal/memory_card",
    liveLink: "https://memcard.netlify.app",
  },
  {
    name: "EMS",
    desc: "This is a Fullstack application for managing employee, with features that include a dashboard visualising important details about employees and CRUD functionalities ",
    tag: ["React","Nodejs","ExpressJs","MongoDB"],
    image:
      "https://res.cloudinary.com/dbdrtuscd/image/upload/v1672976079/Screenshot_2023-01-05_at_22.34.02_m0bovq.png",
    github: "https://github.com/larrycoal/employee_management_system",
    liveLink: "#",
  },
];

const displayProject = (project, idx) => (
  <motion.li
    key={idx}
    className="project"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 1 }}
    transition={{ delay: `0.${idx}` }}
  >
    <h2 className="title">{project.name}</h2>
    <p className="desc">{project.desc}</p>
    <ul className="tags">
      {project.tag.map((tag, idx) => (
        <li key={idx}>{tag}</li>
      ))}
    </ul>
    <div className="btn">
      <a href={project.liveLink} target="_blank" rel="noreferrer">
        <button className="btn-left">Live Link</button>
      </a>
      <a href={project.github} target="_blank" rel="noreferrer">
        <button className="btn-right">Github Link</button>
      </a>
    </div>

    <img src={project.image} alt="project thumbnail" />
  </motion.li>
);
const Project = () => {
  return (
    <section className="project-wrapper">
      <div className="box-container">
        <motion.h2
          className="header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 1 }}
        >
          Projects
        </motion.h2>
        <ul className="container">
          {allProjects.map((project, idx) => displayProject(project, idx))}
        </ul>
      </div>
    </section>
  );
};

export default Project;
