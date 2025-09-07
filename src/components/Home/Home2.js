import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import laptopImg from "../../Assets/about.png";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";
import DateCalculator from "../DateCalculator";

function Home2() {
  const givenDate = '2011/11/19';
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p align="justify" className="home-about-body">
              Hello, I'm
              <b className="purple"> Hiren Joshi. </b>
              A Mobile Architect and Software Engineer with
              <b className="purple"> <DateCalculator givenDate={givenDate} /> of experience </b> 
              building high-impact applications across
              <b className="purple"> iOS, Android, Flutter, and React Native. </b> 
              I specialize in
              <b className="purple"> designing scalable architectures, leading engineering teams, and delivering user-friendly solutions that serve global audiences. </b> 
              My expertise spans
              <b className="purple"> healthcare, gaming, and enterprise domains, with a strong track record of improving product performance, reducing delivery times, and scaling apps </b> 
              to millions of users.
              {/* <b className="purple"> <DateCalculator givenDate={givenDate}/> of experience in software engineering</b>
              , my expertise spans across
              <b className="purple"> multiple domains and technologies, with a primary focus on mobile app development, </b>
              and with
              <b className="purple"> technical Architect and Mobile Lead </b> 
              with exceptional organizational skills, attention to detail, and a strong work ethic. */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img src={laptopImg} alt="about" className="img-fluid" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <Row>
              <h1 style={{ fontSize: "2.6em" }}>
                SHORT <span className="purple"> WORK UPDATE OF </span> MYSELF
              </h1>
              <p className="home-about-body">
                Over the <b className="purple"><DateCalculator givenDate={givenDate} /> I’ve gained deep expertise in mobile and cross-platform development.</b> :
                <ul>
                  <li className="about-activity">
                    <MdOutlineDoubleArrow /> I’ve spent<b className="purple"> 10+ years in iOS development (Objective-C, Swift, SwiftUI) </b>
                  </li>
                  <li className="about-activity">
                    <MdOutlineDoubleArrow /> I’ve spent <b className="purple">5+ years in Android (Kotlin, Java)</b>
                  </li>
                  <li className="about-activity">
                    <MdOutlineDoubleArrow /> I’ve spent <b className="purple">5+ years with Flutter and React Native.</b>.
                  </li>
                  <li className="about-activity">
                    <MdOutlineDoubleArrow /> and I’ve spent <b className="purple"> 7+ years as a Team Lead and Architect.</b>
                  </li>
                  <li className="about-activity">
                    <MdOutlineDoubleArrow /> I’ve guided teams of up to<b className="purple"> 24 engineers, optimized delivery pipelines, and ensured apps met both technical and business goals. </b>
                  </li>
                </ul>
              </p>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hirenjoshi6"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/hirenjoshi6"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hiren-joshi-39458a65/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/hirenjoshi6"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
