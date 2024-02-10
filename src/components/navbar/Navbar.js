// Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2>Logo</h2>
        <ul>
          <li><Link to="/HomePage">List Annonce</Link></li>
          <li><Link to="/MessagesPage">Messagerie</Link></li>
          <li><Link to="/HomePage">Filtre Annonce</Link></li>
          <li><Link to="/HomePage">Annonces Favorites</Link></li>
          <li><Link to="/HomePage">Deconnexion</Link></li>
          {/* Add more navbar elements if necessary */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
