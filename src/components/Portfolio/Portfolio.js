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
      title: "Task Management App",
      description: "A comprehensive task management application developed using Python and Django framework. Users can create, update, delete, and organize tasks with categories and priorities. Includes user authentication, task filtering, and real-time updates. The project demonstrates CRUD operations and database management skills.",
      technologies: "Python, Django, SQLite, HTML, CSS, JavaScript",
      repoLink: "https://github.com/yourusername/task-management-app"
    },
    {
      id: 3,
      image: portfolio3,
      title: "Social Media Dashboard",
      description: "A React-based dashboard application that displays social media analytics and data visualization. Built with modern React hooks, state management, and chart libraries. Features include real-time data updates, interactive charts, and a clean, intuitive user interface. This project showcases frontend development skills and data handling capabilities.",
      technologies: "React, JavaScript, Chart.js, CSS3, REST API",
      repoLink: "https://github.com/yourusername/social-media-dashboard"
    },
    {
      id: 4,
      image: portfolio4,
      title: "API Integration Platform",
      description: "A RESTful API development project using Java Spring Boot with React frontend. The platform allows users to integrate multiple third-party APIs, manage API keys, and monitor API usage. Includes JWT authentication, rate limiting, and comprehensive API documentation. Demonstrates backend development and API design skills.",
      technologies: "Java, Spring Boot, React, JWT, PostgreSQL, Swagger",
      repoLink: "https://github.com/yourusername/api-integration-platform"
    },
    {
      id: 5,
      image: portfolio5,
      title: "Automated Testing Suite",
      description: "A comprehensive Selenium-based test automation framework for web applications. The framework includes page object model design pattern, data-driven testing, cross-browser testing capabilities, and detailed test reporting. Automated test cases cover functional, regression, and smoke testing scenarios.",
      technologies: "Selenium WebDriver, Java, TestNG, Maven, Extent Reports",
      repoLink: "https://github.com/yourusername/automated-testing-suite"
    },
    {
      id: 6,
      image: portfolio6,
      title: "Cloud-Based Application",
      description: "A scalable cloud application built with microservices architecture. The project demonstrates understanding of cloud computing concepts, containerization with Docker, and deployment strategies. Features include load balancing, auto-scaling, and cloud database integration. This project showcases modern software architecture and DevOps practices.",
      technologies: "Python, Flask, Docker, AWS, PostgreSQL, Microservices",
      repoLink: "https://github.com/yourusername/cloud-based-application"
    }
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

