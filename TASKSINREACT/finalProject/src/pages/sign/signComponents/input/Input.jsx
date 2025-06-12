import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../../../redux/userSlice';
import './style/signStyle.scss';

const Input = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage]   = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!fullName || !email || !password || !confirmPassword) {
      setMessage('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords don't match.");
      return;
    }

    // Сохраняем имя, email и пароль в Redux (и localStorage через store.js)
    dispatch(setUserData({ fullName, email, password }));
    setMessage('');
    navigate('/');
  };

  return (
    <div className="login_table">
      <form onSubmit={handleSubmit} className="login_table_items">
        <div className="login_table_items_title">
          <h1>Sign Up</h1>
          <p>Please register with your account details below.</p>
        </div>
        <div className="login_table_items_inputs">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="login_table_items_buttons">
          <button type="submit">Register</button>
        </div>
        {message && (
          <p style={{ color: 'red', marginTop: '10px' }}>{message}</p>
        )}
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Input;
