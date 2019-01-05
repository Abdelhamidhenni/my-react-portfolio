import React, { Component } from "react";
import { Link } from "react-router-dom";
import headshot from "../../images/headshot.jpg";
import NavMenu from "../../components/NavMenu";

class Bio extends Component {
  state = {

  };

  render() {
    return (
      <div className="page-background">
        <NavMenu />
        <section className="success" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>About Me</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <img className="img-responsive bio-img" src={headshot} alt="" />
                    </div>
                    <div className="col-lg-6 bio-text">
                        <h3>Bio</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida ornare ornare. Aliquam erat volutpat. Nam eget augue ultricies, imperdiet elit non, hendrerit eros. Nulla euismod quam vel lorem lobortis consequat. Integer sit amet accumsan libero. Sed faucibus felis sit amet varius mattis. Sed pellentesque ac libero sed efficitur.</p>
                        <p>Check out my <Link to="/projects">projects</Link> page to see the websites/apps that I have created. Please do not hesitate to reach out
                          via the <Link to="/contact">contact form.</Link>
                        </p>

                    </div>
                    <div className="col-lg-3">

                        <ul className="bio-skills">
                          <h3>Skills</h3>
                            <li>JavaScript</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>React</li>
                            <li>JQuery</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>mySQL</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                            <li>Handlebars</li>
                            <li>APIs</li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default Bio;
