import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import fitness from "../assets/img/fitness_ex01.jpeg";
import football from "../assets/img/football_ex01.jpg";
import swimming from "../assets/img/natation_ex01.jpg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Compétences</h2>
              <p>
                Lorem ipsum dolor sit amet. Qui maxime voluptate ad quasi saepe
                id voluptates laborum sit nihil tempore. Est voluptas similique
                ab dolorem molestiae non natus dolorem est voluptas nobis ea
                voluptatem enim sit optio sapiente.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={fitness} alt="Fitness" />
                  <h5>Coach en fitness</h5>
                </div>
                <div className="item">
                  <img src={football} alt="Football" />
                  <h5>Entraineur de football</h5>
                </div>
                <div className="item">
                  <img src={swimming} alt="Natation" />
                  <h5>Professeur de natation</h5>
                </div>
                <div className="item">
                  <img src={fitness} alt="Fitness 2" />
                  <h5>Coach en course à pied</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
