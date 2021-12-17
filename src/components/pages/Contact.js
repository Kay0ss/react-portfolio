import React, { useReducer, useState } from "react";
import emailjs from "emailjs-com";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

function Contact() {
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

  return (
    <div className="color">
      <div>
        <h1>Lets work together!</h1>
      </div>
      <FormControl
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          margin: 'auto',
          width: '20%',
          background: 'lightgray',
          borderRadius: '15px',
          padding: '20px',
          "& .MuiTextField-root": { m: 1, width: "25ch" },

        }}
        noValidate
        autoComplete="off"
        onSubmit={sendEmail}>
          
          <TextField
            id="outlined-basic"
            name="fname"
            label="First name"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            id="outlined-basic"
            name="lname"
            label="Last name"
            variant="outlined"
            required 
            
          />
          <TextField
            id="outlined-basic"
            name="email"
            label="Email"
            variant="outlined"
            required
            />
          
        <FormControl sx={{ minWidth: 223}}>
          <InputLabel id="subject-label">Subject</InputLabel>
        <Select
        // labelId="subject-label"
        label="Subject"
          name="choice"
          variant="outlined"
          required
        >
          <MenuItem value="project inquiry">Project Inquiry or Idea</MenuItem>
          <MenuItem value="general inquiry">General Inquiry</MenuItem>
        </Select>
        </FormControl>
        <TextField
          sx={{
            overflow: 'scroll'
          }}
          id="outlined-basic"
          name="message"
          label="Your message here"
          variant="outlined"
        ></TextField>
        <br></br>
        <Button type="submit" value="Send Message" variant="contained">
          Submit
        </Button>
      </FormControl>
    </div>
  );
}

export default Contact;
