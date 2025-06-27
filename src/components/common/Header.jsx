import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../utils/axios';
import './Header.css';

function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      console.log("📦 Token in Header:", token);
      if (!token) return;
  
      try {
        const res = await axios.get('/users/me');
        setUser(res.data);
      } catch (err) {
        console.error('Error fetching user:', err.message);
      }
    };
  
    fetchUser();
  }, []);
  

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="main-header">
      <div className="logo">DocSpot</div>
      <nav>
        <Link to="/user/home">Home</Link>
        <Link to="/user/doctor-list">Doctors</Link>
        <Link to="/user/appointments">Appointments</Link>
        <Link to="/notifications">Notifications</Link>
        {user && <span className="username">Hi, {user.name}</span>}
        <button onClick={logout} className="logout-btn">Logout</button>
      </nav>
    </header>
  );
}

export default Header;
