import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios'; // ✅ Your configured axios with baseURL

function UserAppointments() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get('/appointments/user');
        setApps(res.data);
      } catch (error) {
        console.error('Error fetching appointments:', error.message);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="container">
      <h2>My Appointments</h2>
      {apps.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <ul>
          {apps.map((a) => (
            <li key={a._id}>
              {a.doctorInfo?.fullName || 'Unknown Doctor'} – {a.date} – {a.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserAppointments;
