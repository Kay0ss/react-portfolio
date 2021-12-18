import React, { useReducer, useState } from "react";
import emailjs from "emailjs-com";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Alert from "@mui/material/Alert";
import Paper from "@mui/material/Paper";
import { ThemeProvider } from "styled-components";
import { purple } from "@mui/material/colors";

function Contact() {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  const sendEmail = (e) => {
    e.preventDefault();

    // if (name && email) {
    //   console.log(name, email)
    // }

    emailjs
      .sendForm(
        "gmail",
        "portfolio_contact",
        e.target,
        "user_uKu6szXX313eJSTysKDfU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  let myRef = {};

  return (
    <div className="color">
      {/* <div>
        <h1>Contact</h1>
        <br></br>
        <h3>Address</h3>
        <p>Minneapolis</p>
        <br></br>



      </div> */}
      <form onSubmit={sendEmail} className="contact-container">
        <h1 className="contactFormTitle">Contact Form</h1>

        <TextField
          sx={{
            marginBottom: "1rem",
          }}
          id="outlinedBasic"
          name="name"
          label="Your Name"
          variant="standard"
          autoComplete="none"
          required
          // inputRef={myRef}
        />
        <TextField
          sx={{
            marginBottom: "1rem",
          }}
          id="outlinedBasic"
          name="email"
          type="email"
          label="Email"
          variant="standard"
          autoComplete="none"
          required
          // inputRef={myRef}
        />

        <TextField
          sx={{
            marginBottom: "15px",
          }}
          multiline
          id="outlined-basic"
          name="message"
          label="Message"
          variant="standard"
        ></TextField>
        <br></br>
        <Button
        sx={{ 
          color: "black",
          backgroundColor: "#e9e9e9",
          '&:hover': {
            backgroundColor: "#ababab"
          }
          }}
          type="submit"
          value="Send Message"
          variant="outlined"
          value="send"
          // onClick={() => {
          //   myRef.current.reportValidity(); 
          // }}
        >
          Send
        </Button>
        
        {/* </FormControl> */}
      </form>
    </div>
  );
}

export default Contact;
