import React, { useState } from 'react'; 
import axios from 'axios'
import { Link } from 'react-router-dom';
import './App.css'

import Search from './moviecomponents/Search'
import Results from './moviecomponents/Results'
import Popup from './moviecomponents/Popup'

// contents of the home page. with teh navigation bar and search bar 
//Movie components are integrated 

function Hpage() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  
  //Movie API
  const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885";

  const search = (e) => {
    if (e.key === "Enter") {  //type in the movie name and hit the enter key. 
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        //get request to fetch the particular title of the movie we called for using axios 
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  
  //Integrated with the movie components.
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }
  
// The dashboard for the website and the layout 
   
  return (
    <div className="App">
      <nav>      
          <div class="logo">
            <h4>SHASHEEN</h4></div>
            <ul class="nav-links">
           <li><Link  to = "/login">Dashboard</Link></li> 
           <li><Link  to = "/contact">Contact</Link></li>
           <li><Link  to = '/join'>Join</Link></li>
           
          </ul>
          <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
      </nav>  
      <script src="nav.js"></script>
      <header class = "header">
        <h1>Search the movie you want &nbsp;</h1>
      </header>

      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>      
    </div>
  );
}


export default Hpage;
