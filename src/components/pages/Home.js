import React from "react";
// import Card from "react-bootstrap/Card";
// import trueCrime from "../../images/True-Crime.png";
import Me from "../../images/me.jpeg";
// import captionMe from "../../images/caption-me.png";
// import Starquiz from "../../images/star-wars-quiz.png";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";


function Home() {
  return (
    <div>
      <div className="parallax">
        <div className="welcome-container">
          <div className="text home-wrapper">
          <ScrollAnimation animateIn="animate__slideInRight" animateOut="animate__slideOutLeft" duration="1" offset="80"><span id="first">Hello, I'm </span>Jack Theisen</ScrollAnimation>
            <ScrollAnimation animateIn="animate__slideInLeft" animateOut="animate__slideOutRight" duration="1" offset="80"><span id="first">I'm a</span> Full Stack Web Developer</ScrollAnimation>
          </div>
          <div className="text home-wrapper">
          </div>
        </div>
      </div>
      
      {/* <h2 className="animate__animated animate__flash animate__infinite">test text</h2> */}
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
