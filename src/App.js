import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/login/LoginPage';
import HomePage from './containers/home_page/HomePage';
import SignupPage from './components/signup/SignupPage';
import MessagesPage from './components/messages_page/MessagesPage';
import FeaturedCars from './components/featured_car/FeaturedCars';
import CarFilters from './components/filter/CarFilters';
import FavoriteCars from './components/favorite_cars/FavoriteCars';
import AnnonceUser from './components/annonces_user/AnnonceUser';

const App = () => {
  // State to track authentication status
  const [lien, setLien] = useState('/FeaturedCars');

  useEffect(() => {
    if(localStorage.getItem('lien') != null){
        setLien(localStorage.getItem('lien'));
    }
  }, []);

  // PrivateRoute component for securing routes
  const PrivateRoute = ({ element }) => {
    if(localStorage.getItem('authToken') === null){
        return <LoginPage />;
    }else{
        return element;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={lien} />} /> {/* Redirection vers FeaturedCars */}
        <Route path="/Login" element={<LoginPage />} />
        {/* PrivateRoute is used for HomePage, CarDetail, and ModernForm */}
        <Route path="/HomePage" element={<PrivateRoute element={<HomePage />} />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/MessagesPage" element={<PrivateRoute element={<MessagesPage />} />} />
        <Route path="/FeaturedCars" element={<FeaturedCars />} /> {/* Route pour FeaturedCars */}
        <Route path="/CarFilters" element={<PrivateRoute element={<CarFilters />} />} />
        <Route path="/FavoriteCars" element={<PrivateRoute element={<FavoriteCars />} />} />
        <Route path="/AnnonceUser" element={<PrivateRoute element={<AnnonceUser />} />} />
      </Routes>
    </Router>
  );
};

export default App;
