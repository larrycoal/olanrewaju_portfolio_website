import React from "react";
import logo from "../../Assets/Logo.png";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>Home</li>
          <li>Skills</li>
          <li>Project</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
