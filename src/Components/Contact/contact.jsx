import React from 'react';
import "./contact.css"



const Contact = () => {
    return (
      <div className="contact__wrapper" id="contact">
        <p>Do you have a project you want me to collaborate on?</p>
        <h2>Contact Me</h2>
        <div>
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
        </div>
      </div>
    );
};

export default Contact;