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
      {/* <div className="parallax">
        <div className="welcome-container">
          <div className="text home-wrapper slideIn">
          <div><span id="first">Hello, I'm </span>Jack Theisen</div>
            <div><span id="first">I'm a</span> Front End Web Developer</div>

          </div>

        </div>
      </div> */}
      <div className="landing">
        <div className="jack-cont">
        <h1 className="jack">Jack</h1>
        <h1 className="theisen">Theisen</h1></div>
        <div className="descript"><p>Junior Front End Web Developer</p></div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact id="Contact" />

      <div className="copyright">Made with love🖤 © Jack Theisen</div>
    </div>
  );
}

export default Home;
