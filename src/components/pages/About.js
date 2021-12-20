import React from "react";
import Me from "../../images/me.jpeg";
import Image from "react-bootstrap/Image";
import "animate.css/animate.min.css"
import about from "../../images/About.svg"

function About(props) {
  return (
    <div className="about-section">
      <img src={about} className="about-title" alt="about me"></img>
        <div className="about">
          <p id="grabber">
            <span className="highlight">I believe</span> there are so many
            things in this world that are yet to be done and so many new{" "}
            <span className="highlight">stories</span> to be told. My goal in
            life is to capture those moments and ensure they{" "}
            <span className="highlight">live </span>on{" "}
            <span className="highlight">forever.</span>
          </p>
          <Image
            fluid
            // width="15%"
            // height="15%"
            // max-width="50%"
            id="myPic"
            src={Me}
            className="img-round"
            alt="profile of me"
          />
        </div>

      </div>
  );
}

export default About;