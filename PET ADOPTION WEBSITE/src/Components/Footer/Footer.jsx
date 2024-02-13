import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Footer = (props) => {
  return (
    <footer className="footer">
        <div>
        <Link className="logo-container" to="\">
          <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      <div className="below-footer">
        <p>You can reach me at <a class="mail-links" href="mailto:praveenkumarv0811@gmail.com">praveenkumarv0811@gmail.com</a></p>
        <p><a class="contact-links" href="https://www.linkedin.com/in/praveenkumar-v08/" target="_blank" rel="noreferrer"><i
                    class="fa fa-linkedin-square"></i> Linkedin</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="contact-links"
                href="https://github.com/Praveen-2004" target="_blank" rel="noreferrer"><i class="fa fa-github"></i> GitHub</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="contact-links" href="https://www.instagram.com/___pravxxn_._/"
                target="_blank" rel="noreferrer"><i class="fa fa-instagram"></i> Instagram</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a
                class="contact-links" href="https://wa.me/message/MVZGF6NYB47UA1"
                target="_blank" rel="noreferrer"><i class="fa fa-whatsapp"></i> WhatsApp</a></p>
        <p> &copy;2023 Praveen Kumar V</p>
      </div>
    </footer>
  );
};

export default Footer;
