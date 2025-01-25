import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import myImg from "../../Assets/avatar.svg";
import laptopImg from "../../Assets/about.png";
import { experience } from '../../workhistory';
import './exstyle.css';
import Tilt from "react-parallax-tilt";
import HistoryCard from "./HistoryCard";
import { useState, useEffect } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

function History() {
  const isMobile = useIsMobile();

  return (
    <Container fluid className="about-section">
      <Particle />
        <Container className="history-content">
          <Row>
            <Col>
              <h1>{experience.title}</h1>
              <br></br>
              <p dangerouslySetInnerHTML={{ __html: experience.description }} />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "10px", paddingBottom: "50px" }}
              className="about-img">
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Col>
          </Row>
        </Container>

        {experience.experiences.map((exp, index) => (
          <Container className="history-content">
            {isMobile ? (
              <HistoryCard expdata={exp} index={index} />
            ) : (
              <Row key={index}>
                {index % 2 === 0 ? (
                  <>
                    <Col md={3} className="companyicon">
                      <Tilt>
                        <img src={laptopImg} alt="about" className="img-fluid" />
                      </Tilt>
                    </Col>
                    <Col>
                      <HistoryCard expdata={exp} index={index} />
                    </Col>
                  </>
                ) : (
                  <>
                    <Col>
                      <HistoryCard expdata={exp} index={index} />
                    </Col>
                    <Col md={3} className="companyicon">
                      <Tilt>
                        <img src={laptopImg} alt="about" className="img-fluid" />
                      </Tilt>
                    </Col>
                  </>
                )}
              </Row>
            )}
          </Container>
        ))}
    </Container>
  );
}

export default History;