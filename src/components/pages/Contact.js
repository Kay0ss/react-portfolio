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

function Contact(props) {
  const { classes } = props;

  const sendEmail = (e) => {
    e.preventDefault();

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
      <div className="contact-desc">
        <h1>Say Hello👋🏻</h1>
      </div>
      <form onSubmit={sendEmail} className="contact-container">
        <h1 className="contactFormTitle">Contact Form</h1>

        <TextField
          sx={{
            marginBottom: "1rem",
          }}
          id="contact-text"
          name="name"
          label="Your Name"
          variant="standard"
          autoComplete="none"
          required
          focused
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
          focused
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
          focused
        ></TextField>
        <br></br>
        <Button
          sx={{
            marginTop: "20px",
            color: "black",
            backgroundColor: "#e9e9e9",
            "&:hover": {
              backgroundColor: "#ababab",
            },
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
