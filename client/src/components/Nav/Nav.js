import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>
  <div className="mainNav">
    <nav className="navbar navbar-inverse navbar-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            Abdelhamid Henni - Full Stack Developer
          </Link>
        </div>
      </div>
    </nav>
  </div>;

export default Nav;
