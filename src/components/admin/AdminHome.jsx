import React from 'react';
function AdminHome() {
  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <nav>
        <a href="/admin/users">Users</a> | 
        <a href="/admin/doctors">Doctors</a> | 
        <a href="/admin/appointments">Appointments</a>
      </nav>
    </div>
  );
}
export default AdminHome;
