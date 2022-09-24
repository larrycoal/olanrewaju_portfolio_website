import React from "react";
import { Slide, Flip } from "react-reveal";
import { motion } from "framer-motion";
import "./landingpage.css";
import larryEmoji from "../../Assets/hi.png";

const LandingPage = () => {
  return (
    <section className="landing-page">
      <div className="hero">
        <div className="right">
          <Slide bottom>
            <img src={larryEmoji} alt="herosvg" />
          </Slide>
        </div>

        <Flip top cascade>
          <div className="left">
            <motion.p className="intro">
              Hi. I’m <span>Olayiwola Olanrewaju</span>
            </motion.p>

            <h2>
              A FULL-STACK WEB DEVELOPER WITH AN EYE FOR INTUITIVE DESIGN SKILLS
            </h2>
            <p>
              I am a full stack developer, cinematographer, gamer and a UI/UX
              enthusiast. I enjoy building pixel perfect interface and adhering
              to development best practices. Currently learning to work with
              ThreeJs, WebGL and Solidity
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
        </Flip>
      </div>
    </section>
  );
};

export default LandingPage;
