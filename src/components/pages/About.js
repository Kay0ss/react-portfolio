import React from "react";
import Me from "../../images/me.jpeg";
import Image from "react-bootstrap/Image";

function About(props) {
  return (
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
          <Image
            fluid
            width="15%"
            id="myPic"
            src={Me}
            className="img-round"
            alt="profile of me"
          />
      </div>
  );
}

export default About;