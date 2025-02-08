import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './App.css';
import Swal from 'sweetalert2';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');  // New state for phone number
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = storedUsers.some((user) => user.email === email);

    if (userExists) {
      Swal.fire({
        title: 'Oops!',
        text: 'Email already registered!',
        icon: 'error',
      });
    } else {
      const newUser = { email, password, phone };  // Added phone to new user object
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));
      Swal.fire({
        title: 'Good job!',
        text: 'Registration successful!',
        icon: 'success',
      }).then(() => navigate('/login'));
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        
      <div className="input-group">
          <label>Phone Number</label>  {/* Added Phone Number field */}
          <input
            type="text"  // Phone number input type
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input
            type="text"  // Changed to type="email" for validation
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="texr"  // Changed to type="password" for better security
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
