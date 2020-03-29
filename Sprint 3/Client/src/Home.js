import React, { Component } from 'react';
import Hpage from './Hpage'
import fire from './config/fire'
import './App.css'

class Home extends Component {
    constructor(props){
        super(props);
    }

    logout(){
        fire.auth().signOut();
      }
    

    render(){
        return (
        
        <div className= "App">
            <Hpage/>   
        </div>
        );
        }  
    }
    
export default Home;