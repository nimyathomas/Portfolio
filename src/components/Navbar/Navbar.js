import React from "react";
import "./Navbar.css";
import logo from "../../assets/log.png";
import { Link } from "react-scroll";
import contactlogo from "../../assets/contact.png"

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktop-menu">
        <Link to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopmenuitem">Home</Link>
        <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="desktopmenuitem">About</Link>
        <Link to="portfolio" spy={true} smooth={true} offset={-100} duration={500} className="desktopmenuitem">Portfolio</Link>
        {/* <Link to="clients" spy={true} smooth={true} offset={-100} duration={500} className="desktopmenuitem">Clients</Link> */}
      </div>
      <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
        <button className="desktopMenuButton">
          <img src={contactlogo} alt="icon" className="icon" />
          Contact me
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
