import React from "react";
// import Card from "react-bootstrap/Card";
import trueCrime from "../../images/True-Crime.png";
import Me from "../../images/me.jpeg";
import captionMe from "../../images/caption-me.png";
import Starquiz from "../../images/star-wars-quiz.png";

function Home() {
  return (
    <div>
      <div className="parallax">
        <div className="welcome-container">
          <div className="text home-wrapper">
            <span id="first">Hello, I'm </span>Jack Theisen
          </div>
          <div className="text home-wrapper">
            <span id="first">I'm a</span> Full Stack Web Developer
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="about">
          <p id="grabber">
            <span className="highlight">I believe</span> there are so many
            things in this world that are yet to be done and so many new{" "}
            <span className="highlight">stories</span> to be told. My goal in
            life is to capture those moments and ensure they{" "}
            <span className="highlight">live </span>on{" "}
            <span className="highlight">forever.</span>
          </p>
        </div>
        <div className="profile">
          <img
            id="myPic"
            src={Me}
            className="img-round"
            alt="profile of me"
          ></img>
        </div>
      </div>

      <div className="recent-title">My Recent Work</div>
      <div className="recent-bio">
        Here are a few of the projects I've worked on recently. Want to see
        more? <a href="mailto:jackschoolbiz@gmail.com"> Email Me.</a>
      </div>
      <div className="projects-container">
        <div className="btn-container">
          <img src={trueCrime} alt="True Crime app"></img>
          <p className="title">True Crime Quiz</p>
          <p className="proj-bio">loremsd fsdfa adsf asdf dafadsf adsf asdf sdaf asdf</p>
          <div className="overlay"></div>
          <a href="https://true-crime-quiz.herokuapp.com/" target="_blank"><button className="button">Visit Website ▸</button></a>
        </div>

        <div className="btn-container">
          <img src={captionMe} alt="Caption Me app"></img>
          <p className="title">True Crime Quiz</p>
          <p className="proj-bio">loremsd fsdfa adsf asdf dafadsf adsf asdf sdaf asdf</p>
          <div className="overlay"></div>
          <a href="https://captionmeme.herokuapp.com/" target="_blank"><button className="button">Visit Website ▸</button></a>
        </div>

        <div className="btn-container">
          <img src={Starquiz} alt="Star Wars Quiz app"></img>
          <p className="title">Character Quiz</p>
          <p className="proj-bio">loremsd fsdfa adsf asdf dafadsf adsf asdf sdaf asdf</p>
          <div className="overlay"></div>
          <a href="https://coleenyart.github.io/which-star-wars-character-are-you/" target="_blank"><button className="button">Visit Website ▸</button></a>
        </div>


        {/* <a href="#">
          <img className="trueCrime" src={trueCrime} alt="true crime app"></img>
        </a> */}
      </div>

      {/* <footer><a href="https://github.com/Kay0ss"><img className="github" src={GitHub} alt="Github logo link"/></a><a href="https://www.linkedin.com/in/jacktheisen/"><img className="linkedin" src={Linkedin} alt="Linkedin logo link"/></a></footer> */}
    </div>
  );
}

export default Home;
