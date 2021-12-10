import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
  return (
    <div className="color">
      <div className="contact-container">
        <h1>Lets work together!</h1>
        <div className="row">
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Name"></input>
        </div>
      </div>
    </div>
  );
}
export default Contact;