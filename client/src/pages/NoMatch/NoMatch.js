import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Planet from "../../images/404-planet.gif";

const NoMatch = () =>
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>404 Page Not Found</h1>
        </Jumbotron>
        <h2>Here is a Planet to make it worth the trip</h2>
        <img className="nomatch-img" src={Planet}/ >
      </Col>
    </Row>
  </Container>;

export default NoMatch;
