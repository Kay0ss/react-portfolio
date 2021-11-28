import React from "react";
import Notetaker from "../../images/note-taker.png";
import captionMe from "../../images/caption-me.png";
import star from "../../images/star-wars-quiz.png";
import GitHub from "../../icons/github-icon.png";
import Linkedin from "../../icons/linkedin-logo-trans.png";

function Home(props) {
  return (
    <div>
      <div>
        <div className="parallax"></div>
        <figure className="home-wrapper">
          <h4 className="home-typing-demo">
            Welcome, my name is Jack, and I like making cool websites..
          </h4>
        </figure>
        <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img
          src={captionMe}
          className="proj-thumb"
          alt="Caption me landing page"
        ></img>
        <a id="thumb-links" href="...">
          <div className="thumb-text">C A P T I O N M E ( M E )</div>
        </a>
      </div>
      <div className="img-container">
        <img
          src={Notetaker}
          className="proj-thumb"
          alt="Note taker landing page"
        ></img>
        <a id="thumb-links" href="...">
          <div className="thumb-text">N o t e t a k e r</div>
        </a>
      </div>
      <div className="img-container">
        <img
          src={star}
          className="proj-thumb"
          alt="Star wars landing page"
        ></img>
        <a id="thumb-links-dark" href="...">
          <div className="thumb-text-dark">
            S t a r&emsp;w a r s&emsp;q u i z
          </div>
        </a>
      </div>
      {/* <footer><a href="https://github.com/Kay0ss"><img className="github" src={GitHub} alt="Github logo link"/></a><a href="https://www.linkedin.com/in/jacktheisen/"><img className="linkedin" src={Linkedin} alt="Linkedin logo link"/></a></footer> */}
    </div>
  );
}

export default Home;
// Use Title and Wrapper like any other React component – except they're style
