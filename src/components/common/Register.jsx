import React, { useState } from 'react';
import axios from '../../utils/axios';
import { useNavigate,Link } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/users/register', form);
    navigate('/login');
  };

  return (
    <form onSubmit={onSubmit} className="container">
      <h2>Register</h2>
      {['name','email','password'].map(key => (
        <input
          key={key}
          type={key === 'password' ? 'password' : 'text'}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          onChange={e => setForm({ ...form, [key]: e.target.value })}
        />
      ))}
      <button type="submit">Register</button>
      <p>Already registered? <Link to="/login">Login</Link></p>
    </form>
  );
}

export default Register;
