import React from 'react'
import "./Skills.css"
import java from  "../../assets/ui-design.png"
import  python  from  "../../assets/website-design.png"
import  testing from  "../../assets/app-design.png"




function Skills() {
  return (
   <section id="skillsId">
    <span className="skilltitle">What i do</span>
    <span className="skilldescr"></span>

    <div className="skillBar">
        <img src={java} alt="uilogo" className="uiimge"/>
        <div  className="skillbardesc">
            <h2>Java Full Stack Development </h2>
            <p>As a dedicated Java Full Stack Developer, I specialize in designing, developing, and deploying robust, scalable, and secure web applications using the Java ecosystem. My expertise spans the entire software development lifecycle, from gathering requirements and designing architecture to implementing seamless front-end experiences and powerful back-end systems</p>

        </div>

    </div>

    <div className="skillBar">
        <img src={python} alt="pythonlogo" className="pythonimge"/>
        <div  className="skillbardesc">
            <h2>Python Full Stack Development </h2>
            <p>I am a versatile Full-Stack Python Developer with expertise in designing, developing, and deploying end-to-end web applications. My approach involves bridging the gap between client-side user experiences and robust, server-side logic, leveraging Python's efficiency and extensive ecosystem. I manage the entire application lifecycle, from initial concept and database design to testing, deployment, and ongoing maintenance</p>

        </div>

    </div>
    <div className="skillBar">
        <img src={testing} alt="testlogo" className="tetimge"/>
        <div  className="skillbardesc">
            <h2>Selenium Software testing </h2>
            <p>As an automation test engineer, I leverage the Selenium open-source framework to automate web browser interactions, ensuring high-quality, reliable web applications. My portfolio demonstrates practical experience in designing, developing, and maintaining robust automation frameworks that streamline the software development lifecycle. </p>

        </div>

    </div>


   </section>
  )
}

export default Skills