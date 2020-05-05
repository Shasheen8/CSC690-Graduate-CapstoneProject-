import React from 'react'

// pop up info on imdb rating, movie poster and and title of the movie. 

function Result({ result, openPopup }) {
	return (
		<div className="result" onClick={() => openPopup(result.imdbID)}>
			<img src={result.Poster} />
			<h3>{result.Title}</h3>
		</div>
	)
}

export default Result;
