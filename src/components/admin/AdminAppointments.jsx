import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminAppointments() {
  const [apps, setApps] = useState([]);
  useEffect(() => {
    axios.get('/api/appointments/all').then(res => setApps(res.data));
  }, []);
  return (
    <div className="container">
      <h2>All Appointments</h2>
      <ul>
        {apps.map(a => (
          <li key={a._id}>
            {a.userInfo.name} with {a.doctorInfo.fullName} on {a.date} – {a.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
