import React from "react";
import Me from "../../images/me.png";
import Image from "react-bootstrap/Image";
import "animate.css/animate.min.css";
import about from "../../images/About.svg";

function About(props) {
  return (
    <div className="about-section">
      <img src={about} className="about-title" alt="about me"></img>
      <div className="about">
        <div
          className="about-row"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
          <Image
            fluid
            id="myPic"
            src={Me}
            className="img-round"
            alt="profile of me"
          />
          <p id="grabber">
            <span className="highlight">I believe</span> there are so many
            things in this world that are yet to be done and so many new{" "}
            <span className="highlight">stories</span> to be told. My goal in
            life is to capture those moments and ensure they{" "}
            <span className="highlight">live </span>on{" "}
            <span className="highlight">forever.</span>
          </p>
        </div>
        <hr className="about-divider" />
        &nbsp;
        <h2 style={{ color: "rgb(211, 211, 211)", zIndex: '1' }}>Days I code</h2>
        {/* <div className="iframe-container"> */}
          <div className="iframe-wrapper">
            <iframe
              src="https://csb-0g3fh.netlify.app/"
              title="Days i Code"
              scrolling="no"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default About;
