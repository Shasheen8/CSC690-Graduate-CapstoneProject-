import React from 'react';
import './App.css';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import Contact from './contact/Contact';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import Home from './Home'
import LoginComponent from './login/login'
import SignupComponent from './signup/signup'
import DashboardComponent from './Dashboard/dashboard'

// Firebase set up and initialization 
const firebase =  require("firebase");
require ("firebase/firebase-firestore");

firebase.initializeApp({
    apiKey: "**************************",
    authDomain: "**************************",
    databaseURL: "**************************",
    projectId: "**************************",
    storageBucket: "**************************",
    messagingSenderId: "**************************",
    appId: "**************************",
    measurementId: "**************************"
})


class App extends Component{  

render(){
  return (
  <Router>
    <div classname= "App">
    
     //Routes for pages linked 
      
    <Switch>
    <Route path= "/dashboard" component= {DashboardComponent}/>
    <Route path= "/login" component={LoginComponent}/>
    <Route path= "/signup" component={SignupComponent}/>
    <Route path= "/" exact component = {Home}/>
    <Route path= "/join" component = {Join}/>
    <Route path= "/chat" component = {Chat}/>
    <Route path= "/contact" component= {Contact}/>
    </Switch>
    </div>
  </Router>
  );
  }
}



export default App;
