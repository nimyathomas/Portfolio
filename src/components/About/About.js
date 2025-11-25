import React from 'react'
import "./About.css"

function About() {
  return (
    <section id="about">
      <span className="aboutTitle">About Me</span>
      <span className="aboutDesc">I'm a passionate Full Stack Developer with expertise in building end-to-end web solutions</span>
      
      <div className="aboutBars">
        <div className="aboutBar">
          <div className="aboutBarText">
            <h2>Education</h2>
            <p>Masters's degree in Computer Science with a focus on web development and software engineering</p>
          </div>
        </div>
        
        <div className="aboutBar">
          <div className="aboutBarText">
            <h2>Experience</h2>
            <p>Experienced in developing scalable web applications using modern technologies and best practices</p>
          </div>
        </div>
        
        <div className="aboutBar">
          <div className="aboutBarText">
            <h2>Technologies</h2>
            <p>Java, Python, React, JavaScript, Php, SQL, Selenium, and various  web frameworks and testing frameworks</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About



