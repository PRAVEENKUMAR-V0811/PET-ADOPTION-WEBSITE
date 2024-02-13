import React from "react";
import "./contact.css";
import profilePic from "./images/contact-img.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:praveenkumarv0811@gmail.com">
          praveenkumarv0811@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/praveenkumar-v08/">
          User Name: Praveen Kumar
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/Praveen-2004">
          PRAVEEN KUMAR V
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/___pravxxn_._/">
          @___pravxxn_._
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+91 9123563252">
          +91 9123563252
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={profilePic} style={{width:"600px", height:"600px"}}alt=""/>
      </div>
    </div>
  );
};

export default Contact;
