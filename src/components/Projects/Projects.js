import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Cryptocurrency from "../../Assets/Projects/Cryptocurrency.png";
import Vesco from "../../Assets/Projects/Vesco.png";
import Hotelzilla from "../../Assets/Projects/Hotelzilla.png";


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
              imgPath={Cryptocurrency}
              isBlog={false}
              title="Cryptocurrency"
              description="Cryptocurrency app for displaying data about cryptocurrencies real time data with charts and all types. Using react, redux, rtk query, chart.js, moment.js, html-react-parser, millify."
              link="https://github.com/keroloussamy/cryptocurrency_app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Vesco}
              isBlog={false}
              title="Vesco"
              description="A modern responsive website for a startup providing Web Design, Marketing and other services. Using Html, Css, JS, Bootstrap, JQuery."
              link="https://github.com/keroloussamy/Vesco"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hotelzilla}
              isBlog={false}
              title="Hotelzilla"
              description="The back-end API for a hotel reservation app. It has endpoints for users / hotels / cities / rooms types to allow users to do auth users, CRUD hotels, make reservations. Using ruby-on-rails and Postgresql."
              link="https://github.com/keroloussamy/Hotelzilla-api"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
