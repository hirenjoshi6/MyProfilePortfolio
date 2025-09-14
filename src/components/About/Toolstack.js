import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiAndroidstudio,
  SiXcode,
  SiCurseforge,
  windsurf
} from "react-icons/si";
import { DiNetbeans } from "react-icons/di";
import { BsMicrosoftTeams,
  BsWind
 } from "react-icons/bs";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={<Tooltip id="xcode-tooltip">Xcode</Tooltip>}>
          <span><SiXcode /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={<Tooltip id="androidstudio-tooltip">Android Studio</Tooltip>}>
          <span><SiAndroidstudio /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={<Tooltip id="vscode-tooltip">Visual Studio Code</Tooltip>}>
          <span><SiVisualstudiocode /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={<Tooltip id="cursor-tooltip">Cursor</Tooltip>}>
          <span><SiCurseforge /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={<Tooltip id="windsurf-tooltip">Windsurf</Tooltip>}>
          <span><BsWind/></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={<Tooltip id="netbeans-tooltip">NetBeans</Tooltip>}>
          <span><DiNetbeans/></span>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={<Tooltip id="postman-tooltip">Postman</Tooltip>}>
          <span><SiPostman /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={<Tooltip id="slack-tooltip">Slack</Tooltip>}>
          <span><SiSlack /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={<Tooltip id="teams-tooltip">Microsoft Teams</Tooltip>}>
          <span><BsMicrosoftTeams /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={<Tooltip id="vercel-tooltip">Vercel</Tooltip>}>
          <span><SiVercel /></span>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Toolstack;
