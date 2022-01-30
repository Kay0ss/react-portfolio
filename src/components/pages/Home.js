import React from "react";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";
import landingPage from "../../images/landingpage.svg";
import "animate.css/animate.min.css";
import "animate.css";

function Home() {

  return (
    <>
      <div className="landing">
        <img className="hero" src={landingPage} alt="hero" />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact id="Contact" />
      <div className="copyright"> © 2021 Jack Theisen</div>
    </>
  );
}

export default Home;
