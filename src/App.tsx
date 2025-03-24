import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import './App.css';

const movies = [
  { id: 1, title: 'Movie 1', genre: 'Action', poster: 'https://via.placeholder.com/200x300' },
  { id: 2, title: 'Movie 2', genre: 'Comedy', poster: 'https://via.placeholder.com/200x300' },
  { id: 3, title: 'Movie 3', genre: 'Drama', poster: 'https://via.placeholder.com/200x300' },
  { id: 4, title: 'Movie 4', genre: 'Thriller', poster: 'https://via.placeholder.com/200x300' },
  { id: 5, title: 'Movie 5', genre: 'Sci-Fi', poster: 'https://via.placeholder.com/200x300' },
  { id: 6, title: 'Movie 6', genre: 'Horror', poster: 'https://via.placeholder.com/200x300' },
  // Add more movies as needed
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MovieList movies={movies} />
      <Footer />
    </div>
  );
}

export default App;