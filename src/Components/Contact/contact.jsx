import React from "react";
import { motion } from "framer-motion";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact__wrapper" id="contact">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 1 }}
      >
        Do you have a project you want me to collaborate on?
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 1 }}
      >
        Contact Me
      </motion.h2>
      <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 1 }}>
        <span>
          <a
            href="mailto:larry_coal@outlook.com"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </a>
          <caption>Mail me</caption>
        </span>
        <span>
          <a href="tel:226-898-1236" target="_blank" rel="noreferrer">
            <i class="fa fa-phone" aria-hidden="true"></i>
          </a>
          <caption>Call me</caption>
        </span>
        <span>
          <a
            href="https://twitter.com/larry_coal"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
          <caption>Send a dm</caption>
        </span>
      </motion.div>
    </div>
  );
};

export default Contact;
