import React from 'react';
import './UserHome.css';

const UserHome = () => {
  return (
    <section className="user-dashboard">
      <div className="text-section">
        <h1>Welcome to DocSpot</h1>
        <p className="dashboard-text">
          Seamlessly manage appointments, consult with experienced doctors, or become one of them. Everything you need to take control of your healthcare — in one place.
        </p>

        <nav className="user-actions">
          <a href="/user/doctor-list" className="user-button">Book Doctor</a>
          <a href="/user/appointments" className="user-button">My Appointments</a>
          <a href="/user/apply-doctor" className="user-button">Apply as Doctor</a>
        </nav>
      </div>
    </section>
  );
};

export default UserHome;
