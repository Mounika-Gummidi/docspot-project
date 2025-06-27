import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Notifications() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('/api/users/notifications', { headers: { Authorization: token } })
      .then(res => setNotes(res.data));
  }, []);

  return (
    <div className="container">
      <h2>Notifications</h2>
      <ul>
        {notes.map((n, i) => <li key={i}>{n.message}</li>)}
      </ul>
    </div>
  );
}

export default Notifications;
