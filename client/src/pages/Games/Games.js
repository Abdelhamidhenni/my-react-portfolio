import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/Grid";
import ProjectGridItem from "../../components/ProjectGridItem";
import NavMenu from "../../components/NavMenu";
// import friendfinder from "../../images/lorem.png";






class Games extends Component {

  render() {
    return (
      <div className="page-background">
        <NavMenu />
          <Container fluid>
            <section id="portfolio">
              <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>Games</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                  {/* <ProjectGridItem
                    name="Lorem title"
                    src={friendfinder}
                    heroku="https://lorem.herokuapp.com/"
                    github="https://github.com/Abdelhamidhenni/lorem"
                    description={<p> 
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis gravida ornare ornare. Aliquam erat volutpat. Nam eget augue ultricies,
                      imperdiet elit non, hendrerit eros. Nulla euismod quam vel lorem lobortis consequat.
                      Integer sit amet accumsan libero.
                      Sed faucibus felis sit amet varius mattis.
                       Sed pellentesque ac libero sed efficitur.
                    </p>}
                  /> */}
                </div>
                <Link to="/projects">← Back to Main Projects Page</Link>
              </div>
            </section>
        </Container>
      </div>
    );
  }
}

export default Games;
