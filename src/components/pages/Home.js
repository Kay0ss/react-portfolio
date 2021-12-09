import React from "react";
import Card from "react-bootstrap/Card";
import trueCrime from "../../images/True-Crime-Optimized.png";
import Me from "../../images/me.jpeg";


function Home(props) {
  return (
    <div>
      <div className="parallax">
        <div className="welcome-container">
          <div className="text home-wrapper">
            <div id="hello">Hello, I'm </div>Jack Theisen
          </div>
          <div className="text2 home-wrapper2">
            <div id="junior">I'm a</div>Full Stack Web Developer
          </div>
        </div>
        <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <Card className="card1">
          <Card.Img variant="top" src={trueCrime} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card2">
          <Card.Img variant="top" src={trueCrime} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <section id="about-title">
      <div id="about-me" className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <div>

            </div>
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

      {/* <footer><a href="https://github.com/Kay0ss"><img className="github" src={GitHub} alt="Github logo link"/></a><a href="https://www.linkedin.com/in/jacktheisen/"><img className="linkedin" src={Linkedin} alt="Linkedin logo link"/></a></footer> */}
    </div>
  );
}

export default Home;
// Use Title and Wrapper like any other React component – except they're style
