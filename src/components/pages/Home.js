import React from "react";
import Notetaker from "../../images/note-taker.png";
import captionMe from "../../images/caption-me.png";
import star from "../../images/star-wars-quiz.png";

function Home(props) {
  return (
    <div>
      <div>
        <figure className="home-wrapper">
          <h4 className="home-typing-demo">
            Welcome, my name is Jack and I like making cool websites..
          </h4>
        </figure>
        <div class="scroll-downs">
          <div class="mousey">
            <div class="scroller"></div>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src={captionMe} className="proj-thumb" alt="profile of me"></img>
        <a id="thumb-links" href="..."><div className="caption-me">C A P T I O N M E  ( M E )</div></a>
      </div>
      <div className="img-container">
        <img src={Notetaker} className="proj-thumb" alt="profile of me"></img>
      </div>
      <div className="img-container">
        <img src={star} className="proj-thumb" alt="profile of me"></img>
      </div>
    </div>
  );
}

export default Home;
// Use Title and Wrapper like any other React component – except they're style
