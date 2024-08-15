// src/Login.js
import React, { useState } from 'react';
import { authenticateUser } from './authentication';

const Login = () => {
  // Estado para los campos de entrada
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Manejar la lógica de inicio de sesión
  const handleLogin = (e) => {
    e.preventDefault();

    // Llamar al servicio de autenticación
    const result = authenticateUser(username, password);

    // Mostrar el mensaje de resultado
    setMessage(result.message);
  };

  return (
    <div className='login'>
      <form onSubmit={handleLogin} className='login-form'>
        <h1>Iniciar Sesión</h1> 
        <div className='form-group'>
          <label htmlFor='usuario'>Usuario:</label>
          <input
            type="text"
            id='usuario'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='contraseña'>Contraseña:</label>
          <input
            type="password"
            id='contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="register-link">
          <p>No tienes una cuenta? <a href="/register">Regístrate</a></p>
        </div>
        <button type="submit">Iniciar Sesión</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Login;
