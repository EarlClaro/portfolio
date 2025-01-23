import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import loschicos from "../../Assets/Projects/loschicos.png";
import citeats from "../../Assets/Projects/citeats.jpg";
import NarraLink from "../../Assets/Projects/narralink.png";
import MotionSense from "../../Assets/Projects/motionsense.png";
import PersonalAI from "../../Assets/Projects/PersonalAI.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NarraLink}
              isBlog={false}
              title="IPAMS: NarraLink"
              description="A comprehensive platform integrating AI technologies into intellectual property management systems. Built to streamline IP workflows, enhance user experience, and deliver powerful features for efficient management. Developed using React.js, Django, and OpenAI APIs."
              ghLink="https://github.com/EarlClaro/IPAMS-Deploy"
              demoLink="https://drive.google.com/file/d/1tkbXjiXUYruAyke9X4X4705MTg2P83Dl/view?usp=sharing" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PersonalAI}
              isBlog={false}
              title="PersonalAI"
              description="Developed a custom Bisaya-language chatbot using Streamlit and OpenAI, designed to provide user-friendly assistance and natural language interaction. "
              ghLink="https://github.com/EarlClaro/GC-ka-Soho-Personalized-Bisaya-Chatbot"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MotionSense}
              isBlog={false}
              title="MotionSense"
              description="MotionSense is a real-time motion detection system built with Python, OpenCV, and Tkinter.
              It features an interactive UI, alert functionality, and adjustable motion sensitivity, 
              making it a useful tool for security and monitoring applications. 
              The project integrates a live video feed, detection alerts, and sound notifications."

              ghLink="https://github.com/EarlClaro/GC-ka-Soho-Personalized-Bisaya-Chatbot?query=earlclaro%40gmail.com&fbclid=IwY2xjawHKGFtleHRuA2FlbQIxMAABHSH1BMxM8gJ_2O6nS-6mhVdL690pHjSug8EIBLe3ijuUjyOIhF4NXmqSJQ_aem_NzYWfZl7xFAuNHWjJDCb8w"
                       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={citeats}
              isBlog={false}
              title="CIT Eats"
              description="CIT Eats is a campus dining website guide designed to help students, faculty, and visitors 
              explore local restaurants near CIT University. It features secure user authentication, restaurant management, 
              detailed menus, user reviews and ratings, personalized favorites, and location-based navigation. 
              The system enhances the dining experience by connecting users to the best local eateries with a user-friendly 
              interface and robust functionality."

              ghLink="https://github.com/EarlClaro/CITEats_CALI_IE"
                       
            />
          </Col>
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loschicos}
              isBlog={false}
              title="Los Chicos Minecraft Server Website"
              description="A dynamic and engaging website for the Los Chicos Minecraft Server. Features include detailed server information, team profiles, rules, shop integration, and user-friendly navigation. Designed with HTML, CSS, and JavaScript to create a seamless and immersive experience for players and visitors."

              ghLink="https://github.com/EarlClaro/Los-Chicos-Website/tree/master"
                       
            />
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
