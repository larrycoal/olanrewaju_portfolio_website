import React from "react";
import "./landingpage.css";
import larryEmoji from "../../Assets/hi.png";

const LandingPage = () => {
  return (
    <section className="landing-page hero">
        <div className="right">
          <img src={larryEmoji} alt="herosvg" />
        </div>

        <div className="left">
          <p className="intro">
            Hi. I’m <span>Olayiwola Olanrewaju</span>
          </p>

          <h2>A FULL-STACK WEB DEVELOPER WITH AN EYE FOR INTUITIVE DESIGN</h2>
          <p>
            I am a software engineer based in ontario. My tech stack is MERN but
            also comfortable working with technology outside this stack.I enjoy
            gaming, making amatuer videos/movie and binge watching series.
          </p>
          <div className="socials">
            <p className="connect">Connect with me on:</p>
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
    </section>
  );
};

export default LandingPage;
