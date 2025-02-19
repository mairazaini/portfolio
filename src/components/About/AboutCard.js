import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Humaira Mohd Rozaini </span>
            from <span className="purple"> Lahti, Finland.</span>
            <br />
            I am currently a student at Lahti-Lappeenranta University of Technology (lUT).
            <br />
            I am currently studying BSc in Software and Systems Engineering.
            My minor is in Industrial Engineering Management.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Creating digital designs
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">mairazaini</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
