import React from "react";
import LandingPage from "./Components/Landingpage/landingpage";
import "./app.css";
import Skills from "./Components/Skills/skills";
import Project from "./Components/Projects/project";
import Header from "./Components/Header/header";
import Testimonials from "./Components/Testimonials/testimonials";
import Footer from "./Components/Footer/footer";
const App = () => {
  return (
    <section className="main-wrapper">
      <Header />
      <LandingPage />
      <Skills />
      <Testimonials />
      <Project />
      <Footer />
    </section>
  );
};

export default App;
