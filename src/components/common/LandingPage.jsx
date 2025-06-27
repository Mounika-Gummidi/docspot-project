import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import photo1 from './photo1.jpg'; // update with your image path

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">DocSpot</div>
        <nav className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/user/doctor-list">Explore</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <h1>Welcome to DocSpot</h1>
          <p>
            Your one-stop platform for seamless healthcare access. Book doctors,
            manage appointments, and get the care you deserve.
          </p>
        </div>
        <div className="hero-right">
          <img src={photo1} alt="Healthcare" />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
