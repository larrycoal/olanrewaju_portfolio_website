import React from "react";
import { motion } from "framer-motion";
import "./header.css";
import { useState } from "react";

const Header = () => {
  const [openSideBar, setOpenSideBar] = useState(false)
  return (
    <header>
      <nav>
        <div className="logo">OO</div>
        <ul className="web_nav nav_element">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <li>
              <a
                href="https://drive.google.com/file/d/1NQdmQCfzkNmVQdd2xpsFo67mgKb0uuYm/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resumè
              </a>
            </li>
          </li>
          <li>
            <li>
              <a href="#contact">Contact me</a>
            </li>
          </li>
        </ul>
        <button
          className="mobile_nav"
          onClick={() => setOpenSideBar(!openSideBar)}
        >
          <motion.div
            animate={{ rotate: openSideBar ? "26deg" : 0 }}
          ></motion.div>
          <motion.div
            animate={{ visibility: openSideBar ? "hidden" : "visible" }}
          ></motion.div>
          <motion.div
            animate={{ rotate: openSideBar ? "-26deg" : 0 }}
          ></motion.div>
        </button>
      </nav>
      <motion.nav
        className="mobile_menu"
        animate={{
          minHeight: openSideBar ? "90vh" : 0,
          display: openSideBar ? "Block" : "none",
        }}
      >
        <ul className="nav_element">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <li>
              <a 
              href="https://drive.google.com/file/d/1NQdmQCfzkNmVQdd2xpsFo67mgKb0uuYm/view?usp=sharing"
              target="_blank"
              rel="noreferrer">Resumè</a>
            </li>
          </li>
          <li>
            <li>
              <a href="#contact">Contact me</a>
            </li>
          </li>
        </ul>
      </motion.nav>
    </header>
  );
};

export default Header;
