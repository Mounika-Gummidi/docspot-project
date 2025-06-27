import React, { useState } from 'react';
import axios from '../../utils/axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/users/login', { email, password });

      console.log("Login response:", data);

      if (data.token) {
        localStorage.setItem('token', data.token);
        console.log('📥 Token saved to localStorage:', localStorage.getItem('token'));
      } else {
        alert("Token not received from server.");
        return;
      }

      if (data.user.type === 'admin') {
        navigate('/admin/home');
      } else if (data.user.isDoctor) {
        navigate('/doctor/home'); // ✅ Add this route
      } else {
        navigate('/user/home');
      }
      
    } catch (err) {
      alert('Login failed');
      console.error('❌ Login error:', err);
    }
  };

  return (
    <form onSubmit={onSubmit} className="container">
      <h2>Login</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </form>
  );
}

export default Login;
