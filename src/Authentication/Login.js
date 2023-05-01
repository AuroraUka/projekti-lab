

import React, { useState } from 'react';
import './Login.css';
import  './SignUp';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setIsValidEmail(validateEmail(emailValue));
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setIsValidPassword(validatePassword(passwordValue));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting...');
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    return regex.test(password);
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1 style={ {color: '#0e4c92'} }>Login</h1>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      {isValidEmail ? null : (
        <span style={{ color: 'red' }}>Please enter a valid email address</span>
      )}
      <br />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      />
      {isValidPassword ? null : (
        <span style={{ color: 'red' }}>
          Password must contain at least 8 characters, one uppercase letter, one lowercase letter,one number and one special character
        </span>
      )}
      <br />
      <p>Don't have an account? <a href="./SignUp">Sign Up</a></p>
      <button type="submit" onClick={()=>{alert("Successful Login!")}} disabled={!isValidEmail || !isValidPassword || !email || !password} >
        Login
      </button>
    </form>
  );
};

export default Login;
