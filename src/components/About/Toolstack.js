import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiDigitalocean,
  SiMysql,
  SiAzuredevops,
  SiAmazonaws,
  SiVisualstudiocode,
  SiPostman,
  SiOpenai,
  SiWindows,
  SiGoogle,
  SiNotion,
  SiMicrosoftteams,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiDigitalocean /> {/* DigitalOcean */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> {/* SQL Workbench */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops /> {/* Azure Cloud */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws /> {/* AWS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {/* Visual Studio */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> {/* Postman */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai /> {/* OpenAI */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows /> {/* Windows */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogle /> {/* Google Apps */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion /> {/* Notion */}
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftteams /> {/* Microsoft Teams */}
      </Col>
    </Row>
  );
}

export default Toolstack;
