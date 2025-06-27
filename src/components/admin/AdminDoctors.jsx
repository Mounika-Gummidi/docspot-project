import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDoctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get('/api/doctors/all').then(res => setDoctors(res.data));
  }, []);

  const approve = async id => {
    await axios.put(`/api/doctors/approve/${id}`);
    setDoctors(doctors.filter(d => d._id !== id));
  };

  return (
    <div className="container">
      <h2>Doctor Applications</h2>
      <ul>
        {doctors.map(d => (
          <li key={d._id}>
            {d.fullName} ({d.specialization}) – {d.status}
            {d.status === 'pending' && (
              <button onClick={() => approve(d._id)}>Approve</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
