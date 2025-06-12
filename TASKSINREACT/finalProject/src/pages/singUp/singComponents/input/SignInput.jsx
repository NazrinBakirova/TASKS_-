import React from 'react';
import './singComponents/input/style/style.scss';

const SignInput = () => {
  return (
    <div className="login_table">
      <div className="login_table_items">
        <div className="login_table_items_title">
          <h1>Sign Up</h1>
          <p>Please register with your account details below.</p>
        </div>
        <div className="login_table_items_inputs">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
        </div>
        <div className="login_table_items_buttons">
          <button>Sign Up</button>
        </div>
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default SignInput;
