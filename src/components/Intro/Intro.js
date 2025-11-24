import React from 'react'
import "./Intro.css"
import bg from "../../assets/nimyaa.png"
import { Link } from "react-scroll";
import bgbutn from "../../assets/hireme.png"


function Intro() {
  return (
    <section id="intro">  
    
    
    <div className="intro-content">
        <span className="hello">Hello,</span>
         <span className="introtext">I'm <span className="intro-name">Nimya</span><br></br>Full Stack Web Developer</span>
         <p className="intro-para">Passionate Full stack web developer<br/> building end-to-end solutions with Java, Python, React, and strong testing expertise.</p>
         <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}><button className="btn-hireme"><img src={bgbutn} alt="btnimage" className="btnImg"/>Hire Me</button></Link>
    </div>
    <img src={bg} alt="my-img" className="bg" />

    </section>
  )
    
}

export default Intro