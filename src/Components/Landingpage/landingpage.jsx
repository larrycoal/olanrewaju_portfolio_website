import React from "react";
import { motion } from "framer-motion";
import "./landingpage.css";
import larryEmoji from "../../Assets/hi.png";

const LandingPage = () => {
  return (
    <section className="landing-page hero" id="home">
      <div className="right">
        <motion.img
          src={larryEmoji}
          alt="herosvg"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
        />
      </div>

      <div className="left">
        <motion.p
          className="title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ delay: 1 }}
        >
          <span>Hi. I’m</span>
          <span>Olayiwola Olanrewaju</span>
        </motion.p>

        <motion.h2
          className="subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ delay: 1.6 }}
        >
          A FULL-STACK WEB DEVELOPER WITH AN EYE FOR INTUITIVE DESIGN
        </motion.h2>
        <motion.p
          className="desc"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ delay: 1.7 }}
        >
          I am a software engineer based in kitchener ontario. I specialize in
          building application for the web, i build clean, appealing and
          functional application while complying with latest industry standards
          using the MERN stack, also have experience working with technologies
          outside of this stack. I enjoy online gaming for fun.
        </motion.p>
        <div className="socials">
          <motion.p
            className="connect"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ delay: 1.8 }}
          >
            Connect with me on:
          </motion.p>
          <motion.a
            href="https://github.com/larrycoal"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.9 }}
          >
            <i class="fa-brands fa-github"></i>
          </motion.a>
          <motion.a
            href="https://twitter.com/larry_coal"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.9 }}
          >
            <i class="fa-brands fa-twitter"></i>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/olanrewaju-olayiwola/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.9 }}
          >
            <i class="fa-brands fa-linkedin"></i>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
