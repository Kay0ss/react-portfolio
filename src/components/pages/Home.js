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
          <ScrollAnimation animateIn="animate__slideInRight" animateOut="animate__slideOutLeft" duration="1" offset="50"><span id="first">Hello, I'm </span>Jack Theisen</ScrollAnimation>
            <ScrollAnimation animateIn="animate__slideInLeft" animateOut="animate__slideOutRight" duration="1" offset="50"><span id="first">I'm a</span> Full Stack Web Developer</ScrollAnimation>
          </div>
          <div className="text home-wrapper">
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <Contact id="Contact"/>

    <div class="wrapper">
	    <ul class="social-icons icon-circle icon-rotate list-unstyled list-inline"> 
	      <li> <a href="#"><i class="fa fa-dribbble"></i></a></li> 
	      <li> <a href="#"><i class="fa fa-github"></i></a></li> 
	      <li> <a href="#"><i class="fa fa-linkedin"></i></a></li>
	  	</ul>
      </div>
      <div className="copyright">Made with love🖤 © Jack Theisen</div>
    </div>

  );
}

export default Home;
