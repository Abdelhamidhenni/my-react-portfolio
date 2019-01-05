import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";


class Portfolio extends Component {
  state = {

  };

  render() {
    return (
      <div className="landing-page">
        <Nav />
        <div className="mainMenu">
          <h1><Link to="/projects">Projects</Link></h1>
          <h1><Link to="/bio">About Me</Link></h1>
          <h1><Link to="/contact">Contact</Link></h1>
        </div>
      </div>
    );
  }
}

export default Portfolio;
