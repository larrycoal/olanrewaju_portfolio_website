import React from "react";
import "./landingpage.css";
import herosvg from "../../Assets/hero_svg.png";

const LandingPage = () => {
  return (
    <section className="landing-page">
      <div className="hero">
        <div className="left">
          <h2>
            Hi. I’m <span>Olayiwola Olanrewaju</span> a Web developer
          </h2>
          <p>
            I am a full stack developer, cinematographer, gamer and a UI/UX
            enthusiast. I enjoy building pixel perfect interface and adhering to
            development best practices. Currently learning to work with ThreeJs,
            WebGL and Solidity
          </p>
          <p className="connect">Connect with me on:</p>
          <div>
            <a href="/">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="right">
          <img src={herosvg} alt="herosvg" />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
