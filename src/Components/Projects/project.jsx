import React from "react";
import "./project.css";

const allProjects = [
  {
    name: "Remote Work Landing Page",
    desc: "This is a landing page i built with html and css for a remote work platform",
    tag: ["html", "css", "javascript"],
    image:
      "https://res.cloudinary.com/dbdrtuscd/image/upload/v1652023483/Screenshot_2022-05-06_at_10.34.28_AM_efgfvg.png",
    github: "https://github.com/larrycoal/LandingPage_remote",
  },
  {
    name: "Remote Work Landing Page",
    desc: "This is a landing page i built with html and css for a remote work platform",
    tag: ["html", "css", "javascript"],
    image:
      "https://res.cloudinary.com/dbdrtuscd/image/upload/v1652023483/Screenshot_2022-05-06_at_10.32.10_AM_stugdz.png",
    github: "https://github.com/larrycoal/LandingPage_remote",
  },
  {
    name: "Remote Work Landing Page",
    desc: "This is a landing page i built with html and css for a remote work platform",
    tag: ["html", "css", "javascript"],
    image:
      "https://res.cloudinary.com/dbdrtuscd/image/upload/v1652023483/Screenshot_2022-05-06_at_10.34.53_AM_g0yl7w.png",
    github: "https://github.com/larrycoal/LandingPage_remote",
  },
  {
    name: "Remote Work Landing Page",
    desc: "This is a landing page i built with html and css for a remote work platform",
    tag: ["html", "css", "javascript"],
    image:
      "https://res.cloudinary.com/dbdrtuscd/image/upload/v1652023482/Screenshot_2022-05-06_at_10.25.28_AM_z7wxgs.png",
    github: "https://github.com/larrycoal/LandingPage_remote",
  },
  {
    name: "Remote Work Landing Page",
    desc: "This is a landing page i built with html and css for a remote work platform",
    tag: ["html", "css", "javascript"],
    image:
      "https://res.cloudinary.com/dbdrtuscd/image/upload/v1652023482/Screenshot_2022-05-06_at_10.33.46_AM_flgjyf.png",
    github: "https://github.com/larrycoal/LandingPage_remote",
  },
];

const displayProject = (project, idx) => (
  <li key={idx} className="project">
    <img src={project.image} alt="project thumbnail" />
    <ul>
      {project.tag.map((tag, idx) => (
        <li key={idx}>{tag}</li>
      ))}
    </ul>
    <p>{project.desc}</p>
    <div>
      <a href="/">
        <button>Live Link</button>
      </a>
      <a href="/">
        <button>Github Link</button>
      </a>
    </div>
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
