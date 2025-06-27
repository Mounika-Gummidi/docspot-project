import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../utils/axios';

function BookAppointment() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const doctorId = queryParams.get('docId');

  const [doctor, setDoctor] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await axios.get(`/doctors/${doctorId}`);  // ✅ <--- RIGHT HERE
        setDoctor(res.data);
      } catch (err) {
        console.error('Error fetching doctor:', err);
      }
  
    };
    if (doctorId) fetchDoctor();
  }, [doctorId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("📤 Token before booking:", localStorage.getItem('token'));

      await axios.post('/appointments/book', {
        doctorId,
        date: `${date} ${time}`
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      
  
      alert('Appointment booked!');
      navigate('/user/appointments');
    } catch (err) {
      console.error('Booking error:', err);
      alert('Failed to book appointment');
    }
  };
  
  
  

  if (!doctor) return <p>Loading doctor info...</p>;

  return (
    <div className="container">
      <h2>Book Appointment with {doctor.fullName}</h2>
      <p><strong>Specialization:</strong> {doctor.specialization}</p>
      <p><strong>Fees:</strong> ₹{doctor.fees}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <button type="submit">Confirm Appointment</button>
      </form>

    </div>
  );
}

export default BookAppointment;
