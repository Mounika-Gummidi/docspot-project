import React, { useState } from 'react';
import axios from '../../utils/axios';

function ApplyDoctor() {
  const [form, setForm] = useState({
    fullName: '',
    specialization: '',
    experience: '',
    fees: '',
    email: '',
    password: ''
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password, ...doctorDetails } = form;

      // Step 1: Register user
      const regRes = await axios.post('/users/register', {
        name: doctorDetails.fullName,
        email,
        password,
      });

      const token = regRes.data.token;
      localStorage.setItem('token', token);

      // Step 2: Apply as Doctor
      await axios.post('/doctors/apply', doctorDetails, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert('Doctor registration & application successful!');
    } catch (err) {
      console.error('Error during doctor registration/application:', err);
      alert('Something went wrong!');
    }
  };

  return (
    <form className="container" onSubmit={onSubmit}>
      <h2>Apply to be a Doctor</h2>
      {['fullName', 'specialization', 'experience', 'fees', 'email', 'password'].map(key => (
        <input
          key={key}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          value={form[key]}
          onChange={e => setForm({ ...form, [key]: e.target.value })}
          type={key === 'password' ? 'password' : 'text'}
          required
        />
      ))}
      <button type="submit">Apply</button>
    </form>
  );
}

export default ApplyDoctor;
