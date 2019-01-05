import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Sidebar from 'react-sidebar';

class Menu extends Component {

    state = {
      sidebarOpen: false
    };


  onSetSidebarOpen = (open) => {
    this.setState({sidebarOpen: open});
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);

  }

  render() {
    var sidebarContent = <b>Sidebar content</b>;

    return (
      <Sidebar sidebar={sidebarContent}
               open={this.state.sidebarOpen}
               onSetOpen={this.onSetSidebarOpen}>
        <b>Main content</b>
      </Sidebar>
    );
  }
};

export default Menu;
