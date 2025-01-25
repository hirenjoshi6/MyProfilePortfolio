import React from "react";
import { Container, Row } from "react-bootstrap";
import './exstyle.css';


const randomHexColorCode = () => {
  let color;
  do {
    color = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  } while (parseInt(color, 16) > 0xEEEEEE);  // Avoid very light colors

  return `#${color}`;
};

const HistoryCard = ({ expdata, index}) => {
    const excolor = randomHexColorCode();
    return (
        <Container 
          key={index} 
          className="experience-card" 
          style={{ 
            borderLeft: `6px solid ${excolor}`, 
            borderBottom: `2px solid ${excolor}`, 
            borderRight: `6px solid ${excolor}`, 
            borderTop: `0.5px solid ${excolor}` 
          }}>
            <Container className="experience-item">
                <Row className="experience-details">
                    <h3 className="company-info">{expdata.title}</h3>
                    <h3 className="company-info">{expdata.company}</h3>
                </Row>
                <Row className="experience-date">
                    <h3>{expdata.duration}</h3>
                </Row>
            </Container>

            <ul className="company-info">
                {expdata.description.map((desc, idx) => (
                    <li className="company-info" key={idx}>{desc}</li>
                ))}
            </ul>
        </Container>
      );
  };

export default HistoryCard;
