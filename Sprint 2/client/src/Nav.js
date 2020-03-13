import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

//Navigation bar on the home page. 

function Nav () {
    const navStyle = {
        color: 'White'
    };

        return (
        <nav>
            <Link style ={navStyle} to = "/">
            <h3> Connect </h3>
            </Link>
            <ul className = "nav-links">
                <Link style ={navStyle} to = '/join'>
                <li className= "button"> Sign In</li>
                </Link>
                <li>Profiles</li>
                <Link style = {navStyle} to = "/contact">
                <li>Contact</li></Link>   
            </ul>
        </nav>
    );
}



export default Nav;
