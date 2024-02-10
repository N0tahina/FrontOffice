// Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Navbar = () => {

  const handleDeconnexion = (e) => {
    e.preventDefault();
    localStorage.removeItem('authToken');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2>Logo</h2>
        <ul>
          <li><Link to="/FeaturedCars">List Annonce</Link></li>
          <li><Link to="/MessagesPage">Messagerie</Link></li>
          <li><Link to="/CarFilters">Filtre Annonce</Link></li>
          <li><Link to="/FavoriteCars">Annonces Favorites</Link></li>
          <li><Link to="/FeaturedCars" onClick={handleDeconnexion}>Deconnexion</Link></li>
          {/* Add more navbar elements if necessary */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
