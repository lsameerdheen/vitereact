import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import '../styles/ScrollingMovieList.css';

const ScrollingMovieList = ({ movies, title }) => {

  const [genres_movies, setGenres_Movies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_API_SERVER;

  // Fetch genres from the API
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        // Replace with your API endpoint
        const response = await fetch(apiUrl  + '/genres_movies/' + title ,{ cache: 'no-store'});
        if (!response.ok) {
          throw new Error('Failed to fetch genres');
        }
        const data = await response.json();
        setGenres_Movies(data.movies); // Assuming the API returns { genres: [...] }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="scrolling-movie-list">
      <h2 className="section-title">{title}</h2>
      <div className="movie-container">
        {genres_movies.map(movie => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default ScrollingMovieList;