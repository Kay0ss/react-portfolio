import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
// import Button from "react-bootstrap/button";


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="nav">
      <ul className="list-unstyled">
        <a href="https://www.linkedin.com/in/jacktheisen/" target="_blank"><div><FontAwesomeIcon icon={faLinkedin} size="2x" className="Linkedin"/></div></a>
        <a href="https://github.com/Kay0ss" target="_blank"><div><FontAwesomeIcon icon={faGithubSquare} size="2x" className="Git"/></div></a>
        <a href="https://twitter.com/WebDevCarGuy" target="_blank"><div><FontAwesomeIcon icon={faTwitterSquare} size="2x" className="Twitter"/></div></a>
      </ul>
    </div>
  );
};

export default NavTabs;
