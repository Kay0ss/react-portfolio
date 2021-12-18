import React, { useReducer, useState } from "react";
import emailjs from "emailjs-com";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Alert from "@mui/material/Alert";

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
  let myRef = {}

  return (
    <div className="color">
      <div>
        <h1>Lets work together!</h1>
      </div>
      <div className="contact-container" onSubmit={sendEmail}>
      {/* <FormControl
      component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          margin: 'auto',
          width: '90%',
          minWidth: '228px',
          background: 'lightgray',
          borderRadius: '15px',
          padding: '20px',
          "& .MuiTextField-root": { m: 1, width: "47ch", paddingBottom: '10px'},
          // "& .MuiFormControl-root": { m: 1, width: "38ch"},
          "& .MuiButton-root": { m: 1, width: "30ch"},
        }}
        noValidate
        autoComplete="off"
        onSubmit={sendEmail}
        > */}
          
          <TextField
            // onChange={(e) => setName(e.target.value)}
            id="outlinedBasic"
            name="name"
            label="Your Name"
            variant="standard"
            autoComplete="none"
            required
            inputRef={myRef}
          />
          <TextField
            // onChange={(e) => setEmail(e.target.value)}
            id="outlinedBasic"
            name="email"
            type="email"
            label="Email"
            variant="standard"
            autoComplete="none"
            required
            inputRef={myRef}
            />
          
        <TextField
          multiline
          id="outlined-basic"
          name="message"
          label="Message"
          variant="standard"
        ></TextField>
        <br></br>
        <Button type="submit" value="Send Message" variant="outlined" onClick={() => {myRef.current.reportValidity()}}>
          Send
        </Button>
      {/* </FormControl> */}
      </div>
    </div>
  );
}

export default Contact;
