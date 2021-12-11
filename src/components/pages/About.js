import React from "react";
import Me from "../../images/me.jpeg";
import Image from "react-bootstrap/Image";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css"

function About(props) {
  return (
    <div className="about-section">
        <div className="about">
        {/* <ScrollAnimation animateIn="animate__fadeIn" duration="1" offset="150" delay="1" animateOnce="true"> */}
          <p id="grabber">
            <span className="highlight">I believe</span> there are so many
            things in this world that are yet to be done and so many new{" "}
            <span className="highlight">stories</span> to be told. My goal in
            life is to capture those moments and ensure they{" "}
            <span className="highlight">live </span>on{" "}
            <span className="highlight">forever.</span>
          </p>
          {/* </ScrollAnimation> */}
        </div>
        {/* <ScrollAnimation animateIn="animate__slideInLeft" animateOut="animate__slideOutRight" duration="1" offset="150" delay="1"> */}
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
          {/* </ScrollAnimation> */}
      </div>
  );
}

export default About;