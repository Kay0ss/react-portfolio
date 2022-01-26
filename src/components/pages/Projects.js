import React from "react";
// import GithubLogo from "../../icons/github-logo.png";
import captionMe from "../../images/caption-me.png";
import Starquiz from "../../images/star-wars-quiz.png";
import trueCrime from "../../images/True-Crime.png";
import Project from "../../images/Projects.svg";
import "./projects.scss";
export default function Projects() {
  return (
    <div className="projects">
      <img className="projects-title" src={Project} alt="projects" />
      <div className="projects-container">
        <article>
          <div class="left">
            <h1>True Crime Quiz</h1>
            <p>
              A simple quiz app with login to keep track of questions the user
              has made. It was made using, React, HTML, CSS, and Auth0.
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
            <a
              className="site-btn"
              href="https://true-crime-quiz.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
            </div>
          </div>
          <div class="right">
            <svg viewBox="0 0 40 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0l40 200H0" fill-rule="evenodd" />
            </svg>
            <img class="image" src={trueCrime} alt="true crime" />
          </div>
        </article>

        <div className="mobile">
          <a
            href="https://true-crime-quiz.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={trueCrime} alt="True Crime app"></img>
          </a>
        </div>

        <article>
          <div class="left">
            <h1>Caption Me</h1>
            <p>
              A simple app that allows users to upload images and caption them
              with a caption. It was made using, React, HTML, CSS, and Auth0.
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
            <a
              className="site-btn"
              href="https://caption-me.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
            </div>
          </div>
          <div class="right">
            <svg viewBox="0 0 40 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0l40 200H0" fill-rule="evenodd" />
            </svg>
            <img class="image" src={captionMe} alt="caption me" />
          </div>
        </article>
        
        <div className="mobile">
          <a
            href="https://caption-me.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={captionMe} alt="Caption Me app"></img>
          </a>
        </div>

        <article>
          <div class="left">
            <h1>Star Wars Quiz</h1>
            <p>
              A simple quiz app with login to keep track of questions the user
              has made. It was made using, React, HTML, CSS, and Auth0.
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
            <a
              className="site-btn"
              href="https://star-wars-quiz.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
            </div>
          </div>
          <div class="right">
            <svg viewBox="0 0 40 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0l40 200H0" fill-rule="evenodd" />
            </svg>
            <img class="image" src={Starquiz} alt="Star Wars Quiz" />
          </div>
        </article>

        <div className="mobile">
          <a
            href="https://star-wars-quiz.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Starquiz} alt="Star Wars Quiz app"></img>
          </a>
        </div>
      </div>
    </div>

  );
}
