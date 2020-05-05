import React from 'react';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';
const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects

class AppContainer extends React.Component {

  //Saved authentication for the use rcurrently logged in. 
  
  componentWillMount() {
    this.checkForSavedAuth();
  }

  render() {
    if(this.state.user)
      return <DashboardComponent user={this.state.user}></DashboardComponent>
    else
      return <SignupComponent loginFn={this.loggedIn}></SignupComponent>
  }

  checkForSavedAuth = () => {
    console.log(firebase.auth().currentUser);
  };

  loggedIn = (user) => this.setState({ user: user });

}

export default AppContainer;
