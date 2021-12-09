import React from "react";
import Me from "../../images/me.jpeg";

function About(props) {
  return (
    <section id="about-title">
      <div id="about-me" className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <div>About Me.</div>
            <p id="grabber">
              I believe there are so many things in this world that are yet to
              be done and so many new stories to be told. My goal in life is to
              capture those incredible moments and ensure they live on forever.{" "}
            </p>
            <p>
              I am a developer based in Minnesota, focused on advancing my
              career farther into the development field. I am currently
              attending a full stack course at the University of Minnesota, with
              the intention on graduating as a junior full stack web developer.
              I absolutely love people, I love working with them, being around
              them, and leading them. Coming form 5 years of customer service
              and management background I would say I have had a decent share of
              just about everything in some shape or form.{" "}
            </p>
          </div>

          <div className="col-md-2 text-center">
            <img
              id="myPic"
              src={Me}
              className="img-round"
              alt="profile of me"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;