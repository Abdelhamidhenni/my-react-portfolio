import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";
import axios from "axios";
import NavMenu from "../../components/NavMenu";


class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    sent: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.email && this.state.message) {
      return axios.post('/sendemail', {
        from: this.state.email,
        to: "henni.abdelhamid@gmail.com",
        subject: this.state.name+" has sent you a message from your website!",
        text: this.state.message
      })
        .then(res => this.setState({name: "", email: "", message: "", sent: true}))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="contact-background">
        <NavMenu />
        <section id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>Send me an email</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                    <form name="sentMessage" id="contactForm" noValidate>
                        <div className="row control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                <Input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                required data-validation-required-message="Please enter your name."
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="row control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                <Input
                                type="email"
                                className="form-control"
                                placeholder="Email Address"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                required data-validation-required-message="Please enter your email address."
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="row control-group" >
                            <div className="form-group col-xs-12 floating-label-form-group controls" id="emailmsg">
                                <TextArea
                                rows="5"
                                className="form-control"
                                placeholder="Message"
                                name="message"
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                required data-validation-required-message="Please enter a message."
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <br />
                        <div id="success"></div>
                        <div className="row">
                          <div className="form-group col-xs-12">
                            <FormBtn
                              disabled={!(this.state.name && this.state.email && this.state.message)}
                              onClick={this.handleFormSubmit}
                            >
                              Send E-mail
                            </FormBtn>
                                {this.state.sent && <span id="message">  Your message has been sent!</span>}
                          </div>
                        </div>
                    </form>
                  </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default Contact;
