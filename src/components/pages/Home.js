import React from "react";
import Notetaker from "../../images/notetaker.png";
import Flexbox from "../../images/flexbox.jpeg";


function Home(props) {
  return (
    <div>
      <div className="container">
        <img
          id="projectImg"
          src={Flexbox}
          className="img-round"
          alt="profile of me"
        ></img>
        <button class="btn">test</button>
      </div>
      <div>
        <img
          id="projectImg"
          src={Notetaker}
          className="img-round"
          alt="profile of me"
        ></img>
      </div>
    </div>
  );
}

export default Home;
// Use Title and Wrapper like any other React component – except they're styled
