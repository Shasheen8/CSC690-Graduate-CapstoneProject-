import React from 'react';

import './Contact.css'



const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };


class Contact extends React.Component {
    state = {
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    };
  
    change = e => {
      this.props.onChange({ [e.target.name]: e.target.value });
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  
    onSubmit = e => {
      e.preventDefault();
      // this.props.onSubmit(this.state);
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
      });
      this.props.onChange({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
      });
    };
  
    render() {
      return (
        <div className="wrapper">
        <div className="form-wrapper">
          <h1> Contact Me </h1>
        <form onSubmit= {this.handleSubmit} noValidate>
        <div className="firstName">
        <label htmlFor="firstName">First Name</label>
          <input name= "firstName"
            placeholder="First Name"
            type="text"
            value={this.state.firstName}
            onChange={e => this.change(e)}
          /></div>
          <br />
          <div className = "lastName">
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            placeholder="Last name"
            type="text"
            value={this.state.lastName}
            onChange={e => this.change(e)}
          /></div>
          <br />
          
          <br />
          <div className = "email">
          <label htmlFor="email"> Email</label>
          <input 
            name="email"
            placeholder="Email"
            type="text"
            value={this.state.email}
            onChange={e => this.change(e)}
          /><span className="errorMessage"></span></div>
          <br />
          <div className = "message">
          <label htmlFor="message">Message</label>
          <input
            name="message"
            type="message"
            placeholder="Message"
            type="text"
            value={this.state.password}
            onChange={e => this.change(e)}
          /></div>
          <br />
          <div className= "sendMessage">
          <button type="submit" onClick={e => this.onSubmit(e)}>Send</button>
        </div>
        </form>
        </div>
        </div>
      );
    }
  }
  
export default Contact;