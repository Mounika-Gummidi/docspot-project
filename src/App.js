import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/Header';

import LandingPage from './components/common/LandingPage'; 
import Login from './components/common/Login';
import Register from './components/common/Register';
import Notifications from './components/common/Notifications';

import AdminHome from './components/admin/AdminHome';
import AdminUsers from './components/admin/AdminUsers';
import AdminDoctors from './components/admin/AdminDoctors';
import AdminAppointments from './components/admin/AdminAppointments';

import UserHome from './components/user/UserHome';
import ApplyDoctor from './components/user/ApplyDoctor';
import AddDoctor from './components/user/AddDoctor';
import DoctorList from './components/user/DoctorList';
import UserAppointments from './components/user/UserAppointments';
import BookAppointment from './components/user/BookAppointment';

function AppWrapper() {
  const location = useLocation();
  const hideHeaderRoutes = ['/', '/login', '/register'];
  const isHeaderVisible = !hideHeaderRoutes.includes(location.pathname);
  

  return (
    <>
      {isHeaderVisible && <Header />}

      <Routes>
        {/* Common Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notifications" element={<Notifications />} />

        {/* Admin Routes */}
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/doctors" element={<AdminDoctors />} />
        <Route path="/admin/appointments" element={<AdminAppointments />} />

        {/* User Routes */}
        <Route path="/user/home" element={<UserHome />} />
        <Route path="/user/apply-doctor" element={<ApplyDoctor />} />
        <Route path="/user/add-doctor" element={<AddDoctor />} />
        <Route path="/user/doctor-list" element={<DoctorList />} />
        <Route path="/user/appointments" element={<UserAppointments />} />
        <Route path="/user/book" element={<BookAppointment />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
