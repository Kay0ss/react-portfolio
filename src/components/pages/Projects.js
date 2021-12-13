import React from "react";
// import GithubLogo from "../../icons/github-logo.png";
import captionMe from "../../images/caption-me.png";
import Starquiz from "../../images/star-wars-quiz.png";
import trueCrime from "../../images/True-Crime.png";

export default function Projects() {
  return (
    <div>
      <div className="recent-title">My Recent Work</div>
      <div className="recent-bio">
        Here are a few of the projects I've worked on recently. Want to see
        more? <a href="mailto:jackschoolbiz@gmail.com"> Email Me.</a>
      </div>
      <div className="projects-container">
        <div className="btn-container">
          <img src={trueCrime} alt="True Crime app"></img>
          <div className="hover-elements">
          <p className="title">True Crime Quiz</p>
          <p className="proj-bio">
            A simple quiz app with login to keep track of questions the user has made. It was made using, React, HTML, CSS, and Auth0.
          </p>
          <div className="overlay"></div>
          <a href="https://true-crime-quiz.herokuapp.com/" target="_blank" rel="noreferrer">
            <button className="button">Visit Website ▸</button>
          </a>
          </div>
        </div>

        <div className="btn-container">
          <img src={captionMe} alt="Caption Me app"></img>
          <div className="hover-elements">
          <p className="title">CaptionMe(me)</p>
          <p className="proj-bio">
            A meme creation web app, featuring a login to create, update, and delete memes. It was made using, handlebars, HTML, CSS, and Javascript.
          </p>
          <div className="overlay"></div>
          <a href="https://captionmeme.herokuapp.com/" target="_blank" rel="noreferrer">
            <button className="button">Visit Website ▸</button>
          </a>
          </div>
        </div>

        <div className="btn-container">
          <img src={Starquiz} alt="Star Wars Quiz app"></img>
          <div className="hover-elements">
          <p className="title">Character Quiz</p>
          <p className="proj-bio">
            This is my very first project, it's a simple Star Wars character quiz. It was made using a third party API, HTML, Javascript, and CSS.
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

        {/* <div className="btn-container">
          <img src={Starquiz} alt="Star Wars Quiz app"></img>
          <p className="title">Character Quiz</p>
          <p className="proj-bio">
            loremsd fsdfa adsf asdf dafadsf adsf asdf sdaf asdf
          </p>
          <div className="overlay"></div>
          <a
            href="https://coleenyart.github.io/which-star-wars-character-are-you/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="button">Visit Website ▸</button>
          </a>
        </div> */}

        {/* <div className="btn-container">
          <img src={Starquiz} alt="Star Wars Quiz app"></img>
          <p className="title">Character Quiz</p>
          <p className="proj-bio">
            loremsd fsdfa adsf asdf dafadsf adsf asdf sdaf asdf
          </p>
          <div className="overlay"></div>
          <a
            href="https://coleenyart.github.io/which-star-wars-character-are-you/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="button">Visit Website ▸</button>
          </a>
        </div> */}

        {/* <div className="btn-container">
          <img src={Starquiz} alt="Star Wars Quiz app"></img>
          <p className="title">Character Quiz</p>
          <p className="proj-bio">
            loremsd fsdfa adsf asdf dafadsf adsf asdf sdaf asdf
          </p>
          <div className="overlay"></div>
          <a
            href="https://coleenyart.github.io/which-star-wars-character-are-you/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="button">Visit Website ▸</button>
          </a>
        </div> */}

      </div>
    </div>
  );
}

