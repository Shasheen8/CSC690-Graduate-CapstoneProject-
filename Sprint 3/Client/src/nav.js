import React from 'react';
import { Link } from "react-router-dom";
import Hpage from "./Hpage";

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
      
        // Toggle Links
        nav.classList.toggle('nav-active');
   
        //Animate Links 
      navLinks.forEach((Link, Hpage) => {
        if (Link.style.animation){
            Link.style.animation = ''
        } else {
            Link.style.animation = `navLinkFade 0.5s ease forwards ${Hpage/ 7 + 2}s`;
        }
     });
        //Burger Animation
        burger.classList.toggle('toggle');
    });

} 

navSlide();