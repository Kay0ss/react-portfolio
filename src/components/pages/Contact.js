import React, { useReducer, useState } from "react";

const formReducer = (state, event) => {
  if(event.reset) {
    return {
      fname: '',
      choices: 0,
      lname: '',
      message: '',
    }
  }
  return {
    ...state,
    [event.name]: event.value
  }
}


function Contact() {
  const [formData, setFormData] = useReducer(formReducer, {count: 100,});
  const [submitting, setSubmitting] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    console.log()


    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      })
    }, 3000)
  };

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return (
    <div className="color">
      <form onSubmit={handleSubmit} className="contact-container">
        <h1>Lets work together!</h1>
        {submitting && 
        <div className="submitting"> Submitting Form...</div>
        }
        <div className="row">
          <input
            name="fname"
            className="name-input"
            placeholder="First name"
            onChange={handleChange}
            value={formData.fname || ''}
            disabled={submitting}
          />
          <input
            name="lname"
            className="name-input"
            placeholder="Last name"
            onChange={handleChange}
            value={formData.lname || ''}
            disabled={submitting}
          />
        </div>
        <select id="choices" name="choices" onChange={handleChange} value={formData.choices || ''} disabled={submitting}>
          <option value="project" defaultValue>
            Project
          </option>
          <option value="inquire">Inquiry</option>
        </select>
        <textarea
          name="message"
          rows="6"
          cols="30"
          placeholder="Your message here"
          onChange={handleChange}
          value={formData.message || ''}
          disabled={submitting}
        ></textarea>
        <br></br>
        <input id="submit" type="submit" disabled={submitting}/>
      </form>
    </div>
  );
}

export default Contact;
