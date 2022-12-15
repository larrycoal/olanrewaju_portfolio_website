import React from "react";
import "./landingpage.css";
import larryEmoji from "../../Assets/hi.png";

const LandingPage = () => {
  return (
    <section className="landing-page hero" id="home">
      <div className="right">
        <img src={larryEmoji} alt="herosvg" />
      </div>

      <div className="left">
        <p className="title">
          Hi. I’m <span>Olayiwola Olanrewaju</span>
        </p>

        <h2 className="subtitle">
          A FULL-STACK WEB DEVELOPER WITH AN EYE FOR INTUITIVE DESIGN
        </h2>
        <p className="desc">
          I am a software engineer based in kitchener ontario. I specialize in
          building application for the web, i build clean, appealing and
          functional application while complying with latest industry standards
          using the MERN stack, also have experience working with technologies
          outside of this stack. I enjoy online gaming for fun.
        </p>
        <div className="socials">
          <p className="connect">Connect with me on:</p>
          <a
            href="https://github.com/larrycoal"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://twitter.com/larry_coal"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/olanrewaju-olayiwola/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
