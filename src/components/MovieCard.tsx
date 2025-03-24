import React from 'react';
import '../styles/MovieCard.css';
import {Link} from 'react-router-dom';
const defaultImage= import.meta.env.DEFAULT_MOVIE_IMAGE

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img  src={movie.poster} alt={movie.title} onError={event => {
          event.target.src = defaultImage
          event.onerror = null
        }}/>
      <h3>{movie.title}</h3>
      <p>{movie.genre}</p>
    </div>
  );
};

export default MovieCard;