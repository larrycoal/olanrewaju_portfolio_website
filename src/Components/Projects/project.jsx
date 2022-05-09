import React from "react";
import "./project.css";

const allProjects = [
  {
    name: "REMOTE WORK",
    desc: "This is a landing page i built with html and css for a remote work platform",
    tag: ["html", "css", "javascript"],
    image:
      "https://res.cloudinary.com/dbdrtuscd/image/upload/v1652023483/Screenshot_2022-05-06_at_10.34.28_AM_efgfvg.png",
    github: "https://github.com/larrycoal/LandingPage_remote",
    liveLink: "https://landing-page-remote.vercel.app/",
  },
  {
    name: "ORGANIC",
    desc: "This is a landing page i built with html and css for a remote work platform",
    tag: ["html", "css", "javascript"],
    image:
      "https://res.cloudinary.com/dbdrtuscd/image/upload/v1652023483/Screenshot_2022-05-06_at_10.32.10_AM_stugdz.png",
    github: "https://github.com/larrycoal/LandingPage_remote",
    liveLink: "https://jolly-edison-f808d9.netlify.app",
  },
  {
    name: "OG NFT",
    desc: "This is a landing page i built with html and css for a remote work platform",
    tag: ["html", "css", "javascript"],
    image:
      "https://res.cloudinary.com/dbdrtuscd/image/upload/v1652023483/Screenshot_2022-05-06_at_10.34.53_AM_g0yl7w.png",
    github: "https://github.com/larrycoal/LandingPage_remote",
    liveLink: "https://og-nft.vercel.app/",
  },
  {
    name: "RECIPIFY",
    desc: "This is a landing page i built with html and css for a remote work platform",
    tag: ["html", "css", "javascript"],
    image:
      "https://res.cloudinary.com/dbdrtuscd/image/upload/v1652023482/Screenshot_2022-05-06_at_10.25.28_AM_z7wxgs.png",
    github: "https://github.com/larrycoal/LandingPage_remote",
    liveLink: "https://recipified.netlify.app",
  },
  {
    name: "GITHUB CLONE",
    desc: "This is a landing page i built with html and css for a remote work platform",
    tag: ["html", "css", "javascript"],
    image:
      "https://res.cloudinary.com/dbdrtuscd/image/upload/v1652023482/Screenshot_2022-05-06_at_10.33.46_AM_flgjyf.png",
    github: "https://github.com/larrycoal/LandingPage_remote",
    liveLink: "https://loving-kilby-66f091.netlify.app",
  },
];

const displayProject = (project, idx) => (
  <li key={idx} className="project">
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
  </li>
);
const Project = () => {
  return (
    <section className="project-wrapper">
      <div className="box-container">
        <h2>Projects</h2>
        <ul className="container">
          {allProjects.map((project, idx) => displayProject(project, idx))}
        </ul>
      </div>
    </section>
  );
};

export default Project;