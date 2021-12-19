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
        <div className="btn-container">
          <img src={trueCrime} alt="True Crime app"></img>
          <div className="hover-elements">
            <p className="title">True Crime Quiz</p>
            <p className="proj-bio">
              A simple quiz app with login to keep track of questions the user
              has made. It was made using, React, HTML, CSS, and Auth0.
            </p>
            <div className="overlay"></div>
            <a
              href="https://true-crime-quiz.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button">Visit Website ▸</button>
            </a>
          </div>
        </div>

        <div className="mobile">
          <a
            href="https://true-crime-quiz.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={trueCrime} alt="True Crime app"></img>
          </a>
        </div>

        <div className="btn-container">
          <img src={captionMe} alt="Caption Me app"></img>
          <div className="hover-elements">
            <p className="title">CaptionMe(me)</p>
            <p className="proj-bio">
              A meme creation web app, featuring a login to create, update, and
              delete memes. It was made using, handlebars, HTML, CSS, and
              Javascript.
            </p>
            <div className="overlay"></div>
            <a
              href="https://captionmeme.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button">Visit Website ▸</button>
            </a>
          </div>
        </div>

        <div className="mobile">
          <a
            href="https://captionmeme.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={captionMe} alt="Caption Me app"></img>
          </a>
        </div>

        <div className="btn-container">
          <img src={Starquiz} alt="Star Wars Quiz app"></img>
          <div className="hover-elements">
            <p className="title">Character Quiz</p>
            <p className="proj-bio">
              This is my very first project, it's a simple Star Wars character
              quiz. It was made using a third party API, HTML, Javascript, and
              CSS.
            </p>
            <div className="overlay"></div>
            <a
              href="https://coleenyart.github.io/which-star-wars-character-are-you/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button">Visit Website ▸</button>
            </a>
          </div>
        </div>

        <div className="mobile">
          <a
            href="https://coleenyart.github.io/which-star-wars-character-are-you/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Starquiz} alt="Character Quiz"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
