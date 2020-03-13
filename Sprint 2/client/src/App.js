import React from 'react';
import './App.css';
import Nav from './Nav'; 
import Courselist from './Courselist';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import Contact from './Contact';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {  
  return (
  <Router>
    <div classname= "App">
      <Nav/>
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


const Home = () =>(
  <div className= "App">
    <h1>Home Page
    </h1>
    <Courselist/>
  </div>
 );


export default App;
