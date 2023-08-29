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
          I am a passionate Fullstack Developer with a knack for creating seamless
          digital experiences. As a dedicated Fullstack Engineer, I specialize in
          React, TypeScript, and NextJs. With a BSc. in Computer Science and a
          PGD in Web Development, I've honed my skills in crafting captivating
          user interfaces. From spearheading B2B SaaS platforms to optimizing
          frontend performance, my mission is to elevate user engagement and
          drive business growth.
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
