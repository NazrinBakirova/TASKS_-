
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style/input.scss';

const LoginInput = () => {
  const user = useSelector(state => state.user.data);
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage]   = useState('');
  const navigate                = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    if (!email || !password) {
      setMessage('Please enter email and password.');
      return;
    }
    if (!user) {
      setMessage('No registered user. Please sign up first.');
      return;
    }
    if (email !== user.email || password !== user.password) {
      setMessage('Email or password is incorrect.');
      return;
    }

    setMessage('');
    navigate('/'); 
  };

  return (
    <div className="login-form-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <p className="login-subtitle">
          Please login using account details below.
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="login-button">
          Sign In
        </button>

        {message && (
          <p style={{ color: 'red', marginTop: '10px' }}>
            {message}
          </p>
        )}

        <p className="login-register">
          Don’t have an account? <a href="/signup">Create one</a>
        </p>
      </form>
    </div>
  );
};

export default LoginInput;
