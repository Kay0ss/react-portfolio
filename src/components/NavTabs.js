import React from "react";
// import Button from "react-bootstrap/button";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <a
        className="brand"
        href="#home"
        onClick={() => handlePageChange("Home")}
      >
        JT
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="hover" href="#home">
              Resume
            </a>
          </li>
          <li className="nav-item">
            <button className="hi"
            variant="warning"
              // className="hover"
              href="#contact"
              onClick={() => handlePageChange("Contact")}
            >
              <span>Say Hello</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
