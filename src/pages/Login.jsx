import React, { useState } from 'react';
import axios from '../api/axios'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Optional CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/users/login', { email, password });
      alert('Login successful!');
      // Optionally store token/user
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Farmley</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>Don’t have an account? <a href="/register">Register here</a></p>
    </div>
  );
};

export default Login;
