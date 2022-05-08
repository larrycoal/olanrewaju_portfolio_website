import React from "react";
import LandingPage from "./Components/Landingpage/landingpage";
import "./app.css";
import Skills from "./Components/Skills/skills";
import Project from "./Components/Projects/project";
import Header from "./Components/Header/header";
const App = () => {
  return (
    <section className="main-wrapper">
      <Header />
      <LandingPage />
      <Skills />
      <Project />
    </section>
  );
};

export default App;
