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
    desc: "This is a landing page i built with react for an organic lifestyle shop",
    tag: ["React", "html", "css"],
    image:
      "https://res.cloudinary.com/dbdrtuscd/image/upload/v1652023483/Screenshot_2022-05-06_at_10.32.10_AM_stugdz.png",
    github: "https://github.com/larrycoal/LandingPage_remote",
    liveLink: "https://jolly-edison-f808d9.netlify.app",
  },
  {
    name: "OG NFT",
    desc: "Designed and built this dApp to mint custom made NFT deployed on the solana devnet",
    tag: ["solidity", "react", "javascript"],
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
    desc: "You can search any github profile with this github clone website",
    tag: ["html", "css", "javascript", "graphql"],
    image:
      "https://res.cloudinary.com/dbdrtuscd/image/upload/v1652023482/Screenshot_2022-05-06_at_10.33.46_AM_flgjyf.png",
    github: "https://github.com/larrycoal/LandingPage_remote",
    liveLink: "https://loving-kilby-66f091.netlify.app",
  },
  {
    name: "MEMORY GAME",
    desc: "This is a game built with javascript, it put your meomry to the test ",
    tag: ["html", "css", "javascript"],
    image:
      "https://res.cloudinary.com/dbdrtuscd/image/upload/v1652023482/Screenshot_2022-05-06_at_10.33.46_AM_flgjyf.png",
    github: "https://github.com/larrycoal/memory_card",
    liveLink: "hhttps://memcard.netlify.app/",
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
        <h2>Some of my work</h2>
          <ul className="container">
            {allProjects.map((project, idx) => displayProject(project, idx))}
          </ul>
      </div>
    </section>
  );
};

export default Project;
