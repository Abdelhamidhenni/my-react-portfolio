import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';

class ProjectGridItem extends Component {
  state = {
    showModal: false
  };

  props = {
    name: "",
    src: "",
    heroku: "",
    github: "",
    description: "",
  };

  getInitialState = () => {
     return { showModal: false };
   }

   close = () => {
     this.setState({ showModal: false });
   }

   open = () => {
     this.setState({ showModal: true });
   }

  render() {
    return (
      <div>
        <div className="col-sm-4 portfolio-item">
            <div onClick={this.open} className="portfolio-link">
                <div className="caption">
                    <div className="caption-content">
                        <p>{this.props.name}</p>
                        <i className="fa fa-plus-square-o fa-3x"></i>
                    </div>
                </div>
                <img src={this.props.src} className="img-responsive img-centered" alt={this.props.name} />
            </div>
            <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>About this Project</h4>
              <div>{this.props.description}</div>
              <Link to={this.props.heroku} target="_blank">Website </Link> |
              <Link to={this.props.github} target="_blank"> Github</Link>

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }

}

export default ProjectGridItem;
