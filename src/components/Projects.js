import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import fitness_img from "../assets/img/fitness_ex01.jpeg";
import football_img from "../assets/img/football_ex01.jpg";
import swimming_img from "../assets/img/natation_ex01.jpg";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const fitness = [
    {
      title: "Musculation",
      description:
        "Différents types d'exercices du quoditien pour garder la forme",
      imgUrl: fitness_img,
    },
    {
      title: "Tapis de course",
      description: "Disponibilité pour organiser différentes courses à pied",
      imgUrl: fitness_img,
    },
    {
      title: "Vélo",
      description: "Balade en vélo avec ou sans compétition",
      imgUrl: fitness_img,
    },
  ];

  const football = [
    {
      title: "Enfants",
      description: "Cours pour enfant de 4 à 12 ans",
      imgUrl: football_img,
    },
    {
      title: "Dribles",
      description: "Cours pour apprendre à dribler",
      imgUrl: football_img,
    },
    {
      title: "Tirs",
      description: "Différents types d'exercices apprendre à tirer des 2 pieds",
      imgUrl: football_img,
    },
  ];
  const swimming = [
    {
      title: "Enfants",
      description: "Cours en piscine commune pour enfant de 4 à 12 ans",
      imgUrl: swimming_img,
    },
    {
      title: "BSSA",
      description: "Maitre nageur disponible pour vos piscines",
      imgUrl: swimming_img,
    },
    {
      title: "Adultes",
      description:
        "Cours en piscine commune pour adultes qui ne savent pas nager",
      imgUrl: swimming_img,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Sports</h2>
            <p>
              Lorem ipsum dolor sit amet. Qui maxime voluptate ad quasi saepe id
              voluptates laborum sit nihil tempore. Est voluptas similique ab
              dolorem molestiae non natus dolorem est voluptas nobis ea
              voluptatem enim sit optio sapiente.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Fitness</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Football</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Natation</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {fitness.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {football.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {swimming.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
