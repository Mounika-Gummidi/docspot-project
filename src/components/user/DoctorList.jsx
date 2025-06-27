import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import './DoctorList.css'; // Add this new CSS file
import { Link } from 'react-router-dom';

function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchDoctors = async () => {
      try {
        const res = await axios.get('/doctors', {
          signal: controller.signal,
        });
        setDoctors(res.data);
      } catch (err) {
        if (err.name !== 'CanceledError') {
          console.error('Failed to fetch doctors:', err);
        }
      }
    };

    fetchDoctors();

    return () => controller.abort();
  }, []);

  return (
    <div className="doctor-list-container">
      <h2>Available Doctors</h2>
      {doctors.map((d) => (
        <div key={d._id} className="doctor-card">
          <div className="doctor-info">
            <p><strong>Name:</strong> {d.fullName}</p>
            <p><strong>Specialization:</strong> {d.specialization}</p>
            <p><strong>Experience:</strong> {d.experience} years</p>
            <p><strong>Fees:</strong> ₹{d.fees}</p>
            
          </div>
          <div className="doctor-action">
          <Link to={`/user/book?docId=${d._id}`} className="book-button">Book Appointment</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DoctorList;
