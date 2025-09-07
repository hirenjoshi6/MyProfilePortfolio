import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hiren Joshi </span>
            from <span className="purple"> Gujarat, India.</span>
            <br /> Currently, I work <span className="purple">
              with Reliable Group Paragon LLP / AskMia Global Pvt. Ltd. as a Frontend Architect and Software Developer.
            </span>
            <br/> I focus on creating secure, performant, and scalable solutions across mobile and web platforms, while also mentoring teams and collaborating closely with stakeholders.
            <br/>
            <br/> Beyond coding, I enjoy
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring movies & series
            </li>
          </ul>
          These interests fuel my curiosity, creativity, and problem-solving mindset. Above all
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Hiren</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
