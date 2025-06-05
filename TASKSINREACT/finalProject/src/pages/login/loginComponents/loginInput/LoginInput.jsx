import React from 'react';
import './style/input.css';

const LoginInput = () => {
  return (
    <div className="login-form-wrapper">
      <form className="login-form">
        <h2>Login</h2>
        <p className="login-subtitle">Please login using account detail bellow.</p>

        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />

        <div className="login-forgot">
          <a href="#">Forgot your password?</a>
        </div>

        <button type="submit" className="login-button">Sign In</button>

        <p className="login-register">
          Don’t have an Account? <a href="/signup">Create account</a>
        </p>
      </form>
    </div>
  );
};

export default LoginInput;
