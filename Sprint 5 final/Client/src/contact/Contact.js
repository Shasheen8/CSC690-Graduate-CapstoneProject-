import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './styles.js'
import styles from './styles.js';
const firebase = require("firebase");



class Contact extends React.Component {
        
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    };
  }

  render() {

    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline/>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Contact Me
          </Typography>
          <form onSubmit={(e) => this.submitSignup(e)} className={classes.form}>
            <FormControl required fullWidth margin='normal'>
              <InputLabel htmlFor='signup-firstName-input'>First Name</InputLabel>
              <Input autoComplete='firstName' autoFocus onChange={(e) => this.userTyping('firstName', e)} id='signup-firstName-input'></Input>
            </FormControl>
            <FormControl required fullWidth margin='normal'>
              <InputLabel htmlFor='signup-lastName-input'>Last Name</InputLabel>
              <Input type="lastName" onChange={(e) => this.userTyping('lastName', e)} id='signup-lastName-input'></Input>
            </FormControl>
            <FormControl required fullWidth margin='normal'>
              <InputLabel htmlFor='signup-email-input'>Email</InputLabel>
              <Input type="email" onChange={(e) => this.userTyping('email', e)} id='signup-email-input'></Input>
            </FormControl>
            <FormControl required fullWidth margin='normal'>
              <InputLabel htmlFor='signup-message-input'>Message</InputLabel>
              <Input type="message" onChange={(e) => this.userTyping('message', e)} id='signup-message-input'></Input>
            </FormControl>
            <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Send</Button>
          </form>
          { 
            this.state.contactError ? 
            <Typography className={classes.errorText} component='h5' variant='h6'>
              {this.state.contactError}
            </Typography> :
            null
          }
         </Paper>
      </main>
    );
  }

  userTyping = (whichInput, event) => {
    switch (whichInput) {
      case 'firstName':
        this.setState({ firstName: event.target.value });
        break;

      case 'lastName':
        this.setState({ lastName: event.target.value });
        break;

      case 'email':
        this.setState({ email: event.target.value });
        break;

        case 'message':
          this.setState({ message: event.target.value });
          break;

      default:
        break;
    }
  }


  submitContact = (e) => {
    e.preventDefault(); // This is to prevent the automatic refreshing of the page on submit.

        firebase
          .firestore()
          .collection('contactData')
          .add(Contact)
          .then(() => {
            this.props.history.push('/contact');
        }, dbErr => {
          console.log('Failed to add users data to the database: ', dbErr);
          this.setState({ signupError: 'Failed to add data' });
        });
    } 
  };

    
  
  
export default withStyles(styles)(Contact);