import React from 'react'
import "./Portfolio.css"
import portfolio1 from "../../assets/portfolio-1.png"
import portfolio2 from "../../assets/portfolio-2.png"
import portfolio3 from "../../assets/portfolio-3.png"
import portfolio4 from "../../assets/portfolio-4.png"
import portfolio5 from "../../assets/portfolio-5.png"
import portfolio6 from "../../assets/portfolio-6.png"

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      image: portfolio1,
      title: "Feather Farm Solutions - E-Commerce Platform and poultry management system",
      description: "Feather Farm Solutions is a full-stack web platform designed to support poultry farmers, hoteliers, and administrators. The system helps farmers track poultry growth, reduce mortality, and identify diseases early using machine learning models. I built features such as user management, farm dashboards, order handling, and a CNN-based disease detection module. The project was developed using Django, MySQL, HTML, CSS, and JavaScript, deployed on GCP, and tested using Selenium",
      technologies: "Python,Django,MySQL,HTML,CSS,JavaScript,GCP,Selenium",
      repoLink: "https://github.com/nimyathomas/Feather-Farm-Soloutions"
    },
    {
      id: 2,
      image: portfolio2,
      title: "My Portfolio",
      description: "A personal portfolio website built to showcase my skills, projects, and experience. It includes sections like About, Skills, Projects, and Contact. The website is fully responsive and developed using modern web technologies.",
      technologies: "React.js, HTML, CSS, JavaScript",
      repoLink: "https://github.com/nimyathomas/Portfolio"
    }
,
    
      {
        id: 3,
        image:portfolio3,
        title: "Online Bookstore",
        description: "A full-featured online bookstore application built using PHP and MySQL. It includes modules for browsing books, managing categories, user authentication, admin dashboard, book uploads, and order handling. The system demonstrates strong knowledge of CRUD operations, PHP backend development, and database integration.",
        technologies: "PHP, MySQL, HTML, CSS, JavaScript",
        repoLink: "https://github.com/nimyathomas/OnlineBookstore"
      },
      
  
      {
        id: 4,
        image:portfolio4,
        title: "Dental Clinic Management System",
        description: "A Java-based clinic management system designed to manage patient records, appointments, and doctor details. The project includes modules for registration, login, appointment scheduling, and data storage. It highlights core Java concepts such as OOP, Swing/GUI programming, and database connectivity.",
        technologies: "Java, JDBC, MySQL",
        repoLink: "https://github.com/nimyathomas/Project-dental-clinic"
      },
      
    // {
    //   id: 5,
    //   image: portfolio5,
    //   title: "Automated Testing Suite",
    //   description: "A comprehensive Selenium-based test automation framework for web applications. The framework includes page object model design pattern, data-driven testing, cross-browser testing capabilities, and detailed test reporting. Automated test cases cover functional, regression, and smoke testing scenarios.",
    //   technologies: "Selenium WebDriver, Java, TestNG, Maven, Extent Reports",
    //   repoLink: "https://github.com/yourusername/automated-testing-suite"
    // },
    
  ]

  return (
    <section id="portfolio">
      <span className="portfolioTitle">My Projects</span>
      <span className="portfolioDesc">Here are some of my projects showcasing my skills and learning journey as a fresher</span>
      
      <div className="portfolioContainer">
        {portfolios.map((portfolio) => (
          <div key={portfolio.id} className="portfolioCard">
            <img src={portfolio.image} alt={portfolio.title} className="portfolioImage" />
            <div className="portfolioContent">
              <h2 className="portfolioCardTitle">{portfolio.title}</h2>
              <p className="portfolioCardDescription">{portfolio.description}</p>
              <div className="portfolioTech">
                <strong>Technologies: </strong>
                <span>{portfolio.technologies}</span>
              </div>
              <a 
                href={portfolio.repoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="repoLink"
              >
                View Repository →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio

