import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('/api/users/all').then(res => setUsers(res.data));
  }, []);

  return (
    <div className="container">
      <h2>All Users</h2>
      <ul>
        {users.map(u => <li key={u._id}>{u.name} ({u.email})</li>)}
      </ul>
    </div>
  );
}
