import React from "react";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "animate.css";

let offSet = 50;
let duration = 1;

function Home() {
  return (
    <div>
      <div className="parallax">
        <div className="welcome-container">
          <div className="text home-wrapper slideIn">
          <ScrollAnimation animateIn="animate__slideInRight" animateOut="animate__slideOutLeft" duration={duration} offset={offSet}><span id="first">Hello, I'm </span>Jack Theisen</ScrollAnimation>
            <ScrollAnimation animateIn="animate__slideInLeft" animateOut="animate__slideOutRight" duration={duration} offset={offSet}><span id="first">I'm a</span> Front End Web Developer</ScrollAnimation>

          </div>

        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact id="Contact"/>

    <div className="wrapper">
	    <ul className="social-icons icon-circle icon-rotate list-unstyled list-inline"> 
	      <li> <a href="https://twitter.com/WebDevCarGuy" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a></li> 
	      <li> <a href="https://github.com/Kay0ss" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></li> 
	      <li> <a href="https://www.linkedin.com/in/jacktheisen/" rel="noreferrer"target="_blank"><i className="fa fa-linkedin"></i></a></li>
	  	</ul>
      </div>
      <div className="copyright">Made with love🖤 © Jack Theisen</div>
    </div>

  );
}

export default Home;
