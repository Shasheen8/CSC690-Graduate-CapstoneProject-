import React from 'react'
import { Link } from 'react-router-dom';

//pops up information about the movie from the API and search results such as the Imdb rating, year is was made. movie synopsis, movie poster. 

function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating">Rating: {selected.imdbRating}</p>
                <Link to = '/join'>
                <p className= "room"> Room: {selected.Title}</p> </Link>
				<div className="plot">
					<img src={selected.Poster} />
					<p>{selected.Plot}</p>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup;
