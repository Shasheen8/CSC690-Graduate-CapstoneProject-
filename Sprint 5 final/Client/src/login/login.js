import { Link } from 'react-router-dom';
import React from 'react';
import styles from './styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FBAuth from './FBAuth.js';


const firebase = require("firebase");


//Login page. Used to autheticate the user with his email and password. 
//also uses the FBauth token middleware to authenticate the valid user with a token. 

class LoginComponent extends React.Component{

    //states with properties to rerender
    constructor(){
        super();
        this.state = {
            email: null,
            password: null,
            loginErr: ''
    
        };
    }

    render() {

        // destructuring the different properties from the materail-ui styles 
        // using different classes with the javascript objects

        const { classes } = this.props;
    
        return (
          <main className={classes.main}>
            <CssBaseline/>
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h5">
                Log In!
              </Typography>
              <form onSubmit={(e) => this.submitLogin(e)} className={classes.form}>
                <FormControl required fullWidth margin='normal'>
                  <InputLabel htmlFor='login-email-input'>Enter Your Email</InputLabel>
                  <Input autoComplete='email' autoFocus onChange={(e) => this.userTyping('email', e)} id='login-email-input'></Input>
                </FormControl>
                <FormControl required fullWidth margin='normal'>
                  <InputLabel htmlFor='login-password-input'>Enter Your Password</InputLabel>
                  <Input autoComplete="current-password" type="password" onChange={(e) => this.userTyping('password', e)} id='login-password-input'></Input>
                </FormControl>
                <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Log In</Button>
              </form>
              { this.state.serverError ? 
                <Typography className={classes.errorText} component='h5' variant='h6'>
                  Incorrect Login Information
                </Typography> :
                null
              }
              <h5 className={classes.noAccountHeader}>Don't Have An Account?</h5>
              <Link className={classes.signUpLink} to='/signup'>Sign Up!</Link>
              <Link className={classes.onSubmit} to= '/'>Home</Link>
            </Paper>
          </main>
        );
      }

    userTyping = (whichInput, event) => {
        switch (whichInput) {
          case 'email':
            this.setState({ email: event.target.value });
            break;
    
          case 'password':
            this.setState({ password: event.target.value });
            break;
    
          default:
            break;
        }
      }
    
      submitLogin = async (e) => {
        e.preventDefault(); // This is to prevent the automatic refreshing of the page on submit.
    
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(data => {
              return data.user.getIdToken(); // getting the token for authorized user with valid credentials 
            })
           .then (token => {
              return res.json({token});
            })
           .catch(err => {
          console.error(err);
          if(err.code === 'auth/wrong-password'){
            return res
            .status(403)  // firebase server error 
            .json({ general: 'Wrong credentials, please try again'});
          } else return res.status(500).json({this.props.history.push('/login')});
            });
            
          

}


export default withStyles(styles)(LoginComponent);
