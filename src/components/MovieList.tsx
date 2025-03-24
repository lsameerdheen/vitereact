import React, { useState, useEffect } from 'react';
import ScrollingMovieList  from './ScrollingMovieList';
import '../styles/MovieList.css';
const apiUrl = import.meta.env.VITE_API_SERVER;

const MovieList = ({ movies }) => {  
  
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch genres from the API
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        // Replace with your API endpoint
        const response = await fetch(apiUrl + '/listgenres',{ cache: 'no-store'});
        if (!response.ok) {
          throw new Error('Failed to fetch genres');
        }
        const data = await response.json();
        setGenres(data.genres); // Assuming the API returns { genres: [...] }
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
    <div className="movie-list">
           
           <ScrollingMovieList title={"action"} />
     </div>
  );
};

export default MovieList;