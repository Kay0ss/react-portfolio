import React from "react";

function Contact() {
  return (
    <div className="color">
      <div className="contact-container">
        <h1>Lets work together!</h1>
        <div className="row">
          <input
            type="text"
            name="fname"
            className="name-input"
            placeholder="Last name"
          ></input>
          <input
            type="text"
            name="lname"
            className="name-input"
            placeholder="First name"
          ></input>
        </div>
        <select id="choices" name="choices">
          <option value="project" defaultValue>
            Project
          </option>
          <option value="inquire">Inquiry</option>
        </select>
        <textarea name="message" rows="6" cols="30" placeholder="Your message here"></textarea>
          <br></br>
          <input id="submit" type="submit"></input>
      </div>
    </div>
  );
}

export default Contact;
