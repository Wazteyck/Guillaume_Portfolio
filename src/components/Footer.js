import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" className="footer-logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="/#">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="/#">
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a href="/#">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p className="copyright">CopyRight 2022. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
