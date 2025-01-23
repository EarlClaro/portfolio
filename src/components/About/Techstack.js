import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiDjango,
  DiReact,
  DiJavascript1,
  DiNodejs,
  DiJava,
  DiGit,
} from "react-icons/di";
import {
  SiDigitalocean,
  SiAzuredevops,
  SiMysql,
  SiFirebase,
  SiGithub,
  SiGitlab,
  SiOpenai,
} from "react-icons/si";
import { FaDollarSign } from "react-icons/fa"; // Representing PayMongo with a dollar sign icon

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDigitalocean />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai /> {/* OpenAI Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDollarSign /> {/* Representing PayMongo API */}
      </Col>
    </Row>
  );
}

export default Techstack;
