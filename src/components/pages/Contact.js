import React from "react";
import emailjs from "emailjs-com";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { makeStyles, withStyles } from "@mui/styles";
import "../../style.css";

const useStyles = makeStyles({
  field: {
            // marginBottom: "1rem",
            // label
            '& .MuiFormLabel-root': {
              color: 'white',
            },
            '& .MuiFormLabel-root.Mui-focused': {
              color: 'white',
            },
            // unfocused text underline
            '& .MuiInputBase-root:before': {
              // borderBottom: '1px solid white'
            },
            '& .MuiInputBase-root': {
              borderBottom: '1px solid white'
            },
            // typed into text underline hover
            '& .MuiInputBase-root.Mui-focused:hover': {
              // borderBottom: '2px solid white'
            },
            // typed into text underline
            '& .MuiInputBase-root:after': {
              borderBottom: '2px solid white'
            },
            // text color
            '& .MuiInputBase-input': {
              color: 'white'
            }
  },
  

});

function Contact(props) {
  const classes = useStyles();

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
      <div className="contact-desc">
        <h1>Say Hello👋🏻</h1>
        <h3>I'm always open to some new projects or opportunities!</h3>
        <p id="email">Email me at</p>
        <a href="mailto:jackshoolbiz@gmail.com">jackschoolbiz@gmail.com</a>
        <p id="email">Follow me</p>
        <div className="follow">
        <a href="https://www.linkedin.com/in/jacktheisen/" target="_blank" rel="noreferrer"><h1><FontAwesomeIcon icon={faLinkedin} size="sm"/></h1></a>
        <a href="https://github.com/Kay0ss" target="_blank" rel="noreferrer"><h1><FontAwesomeIcon icon={faGithub} size="sm"/></h1></a>
        <a href="https://twitter.com/WebDevCarGuy" target="_blank" rel="noreferrer"><h1><FontAwesomeIcon icon={faTwitter} size="sm"/></h1></a>
        <a href="https://www.facebook.com/jack.the.isen13/" target="_blank" rel="noreferrer"><h1><FontAwesomeIcon icon={faFacebookSquare} size="sm"/></h1></a>
        <a href="https://www.instagram.com/jack_the_isen/" target="_blank" rel="noreferrer"><h1><FontAwesomeIcon icon={faInstagram} size="sm"/></h1></a>
        </div>
      </div>
      <form onSubmit={sendEmail} className="contact-container">
        <TextField
        className={classes.field}
          sx={{
          }}
          id="contact-text"
          name="name"
          label="Your Name"
          variant="standard"
          autoComplete="none"
          required
        />
        <TextField
         sx={{
          marginTop: '10px'
        }}
          className={classes.field}
          id="outlinedBasic"
          name="email"
          type="email"
          label="Email"
          variant="standard"
          autoComplete="none"
          required
          color="info"
          // focused
          // inputRef={myRef}
        />

        <TextField
          className={classes.field}
         sx={{
          marginTop: '10px'
        }}
          multiline
          id="outlined-basic"
          name="message"
          label="Message"
          variant="standard"
          autoComplete="none"
          // focused
        ></TextField>
        <br></br>
        <Button
        sx={{
          background: 'white',
          "&:hover": {
            background: 'lightgray'
          },
          marginTop: '15px',
          marginBottom: '40px'
        }}
        
          type="submit"
          value="Send Message"
          variant="filled"
        >
          Send
        </Button>

        {/* </FormControl> */}
      </form>
    </div>
  );
}
export default withStyles(makeStyles)(Contact);

