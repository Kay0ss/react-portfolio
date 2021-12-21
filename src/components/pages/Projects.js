import React from "react";
// import GithubLogo from "../../icons/github-logo.png";
import captionMe from "../../images/caption-me.png";
import Starquiz from "../../images/star-wars-quiz.png";
import trueCrime from "../../images/True-Crime.png";
import Project from "../../images/Projects.svg";
export default function Projects() {
  return (
    <div className="projects">
      <img className="projects-title" src={Project} alt="projects" />
      <div className="projects-container">
        <div className="project truecrime"><img className="left"src={trueCrime} alt="true crime"/>
        <div className="proj-bio">
        <h1>True Crime Quiz</h1>
        <p>A simple quiz app with login to keep track of questions the user has made. It was made using, React, HTML, CSS, and Auth0.</p>
        <a className="site-btn" href="https://true-crime-quiz.herokuapp.com/" target="_blank" rel="noreferrer">Visit</a>
        </div>
        </div>

        <div className="mobile"><a href="https://true-crime-quiz.herokuapp.com/" target="_blank" rel="noreferrer"><img src={trueCrime} alt="True Crime app"></img></a>
        </div>

        <div className="project starquiz">
        <div className="proj-bio-left">
        <h1>Character Quiz</h1>
        <p>This is my very first project, it's a simple Star Wars character quiz. It was made using a third party API, HTML, Javascript, and CSS.</p>
        <a className="site-btn" href="https://coleenyart.github.io/which-star-wars-character-are-you/" target="_blank" rel="noreferrer">Visit</a>
        </div><img className="right" src={Starquiz} alt="true crime"/>
        
        </div>


        <div className="mobile"><a href="https://captionmeme.herokuapp.com/" target="_blank" rel="noreferrer"><img src={captionMe} alt="Caption Me app"></img></a>
        </div>

        <div className="project captionme"><img className="left" src={captionMe} alt="true crime"/>
        <div className="proj-bio">
        <h1>CaptionMe(me)</h1>
        <p>A meme creation web app, featuring a login to create, update, and delete memes. It was made using, handlebars, HTML, CSS, and Javascript.</p>
        <a className="site-btn" href="https://captionmeme.herokuapp.com/" target="_blank" rel="noreferrer">Visit</a>
        </div>
        </div>


        <div className="mobile"><a href="https://coleenyart.github.io/which-star-wars-character-are-you/" target="_blank" rel="noreferrer"><img src={Starquiz} alt="Character Quiz"></img></a>
        </div>
      </div>
    </div>
  );
}
