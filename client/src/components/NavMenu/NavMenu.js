import React from "react";
import { Link } from "react-router-dom";

const NavMenu = (props) => (
  <div className="navMenu">
    <nav className="navbar navbar-inverse">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            Abdelhamid Henni
          </Link>
        </div>

      <div className="navbarMenu">

        <Link to="/projects" className={window.location.pathname === "/projects" ? "navbar-brand active" : "navbar-brand"}>
        Projects
        </Link>
        <Link to="/bio" className={window.location.pathname === "/bio" ? "navbar-brand active" : "navbar-brand"}>
        Bio
        </Link>
        <Link to="/contact" className={window.location.pathname === "/contact" ? "navbar-brand active" : "navbar-brand"}>
        Contact
        </Link>


      </div>
    </nav>
  </div>
);

export default NavMenu;
