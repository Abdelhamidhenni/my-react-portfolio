import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {


  render() {
    return (
      <footer className="text-center navbar-fixed-bottom" id="connect">
          <div className="footer-above">
              <div className="container">
                  <div className="row">
                      <div className="footer-col col-md-12">
                          <ul className="list-inline">
                              <li><Link to="https://www.github.com/Abdelhamidhenni" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i></Link></li>

                              <li><Link to="https://www.linkedin.com/in/abdelhamid-henni-0108b971/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>

                              <li><Link to="https://stackoverflow.com/users/4529801/abdelhamid-henni" target="_blank" rel="noopener noreferrer"><i className="fa fa-stack-overflow" aria-hidden="true"></i></Link></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
    );
  }

}

export default Footer;
