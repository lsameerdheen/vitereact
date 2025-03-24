import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MovieTheater</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/movies">Movies</a></li>
        <li><a href="/theaters">Theaters</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;