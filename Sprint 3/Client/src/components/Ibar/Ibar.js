import React from 'react';

import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

import './Ibar.css';

//top left corner icons for the user being online or offline 

const Ibar = ({ room }) => (
    <div className= "ibar">
        <div className="leftInnerContainer">
         <img className = "onlineIcon" src ={onlineIcon}  alt="online"/>
            <h3>{room}</h3>
        
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt= "close"/></a>
        </div>
    </div>
)

export default Ibar;
