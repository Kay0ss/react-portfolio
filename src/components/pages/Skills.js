import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faSass, faBootstrap, faGit, faJsSquare, faReact, faCss3Alt, faFigma, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import skills from "../../images/Skills.svg";
// import { react } from '@fortawesome/fontawesome-svg-core';


function Skills(props){
    return (
        <div className="skills-section">
        <img src={skills} className="skills-title" alt="skills"></img>
        <div className="skills-container">
        <h1><FontAwesomeIcon icon={faHtml5} size="3x" className="html5"/></h1>
        <h1><FontAwesomeIcon icon={faCss3Alt} size="3x" className="css3"/></h1>
        <h1><FontAwesomeIcon icon={faJsSquare} size="3x" className="js"/></h1>
        <h1><FontAwesomeIcon icon={faBootstrap} size="3x" className="bootstrap"/></h1>
        <h1><FontAwesomeIcon icon={faGit} size="3x" className="git"/></h1>
        <h1><FontAwesomeIcon icon={faReact} size="3x" className="react"/></h1>
        <h1><FontAwesomeIcon icon={faSass} size="3x" className="sass"/></h1>
        <h1><FontAwesomeIcon icon={faFigma} size="3x" className="figma"/></h1>
        <h1><FontAwesomeIcon icon={faNodeJs} size="3x" className="node"/></h1>



        </div>
        </div>
    )
}

export default Skills;