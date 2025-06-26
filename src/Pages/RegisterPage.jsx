import React, { useState } from 'react';
import './RegisterForm.css';

function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registracia satti otti!');
    console.log('Данные:', formData);
  
  };

  return (
    <div className="register-container">
      <h2>Account ashu</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          name="username"
          placeholder="Paidalanushy aty"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Qupiasoz"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Account ashu</button>
      </form>
    </div>
  );
}

export default RegisterPage;
