import React from 'react';
import './App.css';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import Contact from './navcomponents/Contact';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import fire from './config/fire'
import { Component } from 'react';
import Home from './Home'


class App extends Component{  
  constructor(props){
    super(props);
    this.state ={
      user:{},
    }
  }
  
  componentDidMount(){
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) =>{
      if(user) {
        this.setSate({ user });
        //Set item('user', user.uid)
      }
      else{
        this.setSate({ user:null });
        //remove item ('user')
      }
    });
  }


render(){
  return (
  <Router>
    <div classname= "App">
    
    <Switch>
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
