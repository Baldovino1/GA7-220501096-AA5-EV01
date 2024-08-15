// src/Register.js
import React, { useState } from 'react';
import { registerUser } from './authentication';

const Register = () => {
  // Estado para los campos de entrada
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');


  // Manejar la lógica de registro
  const handleRegister = (e) => {
    e.preventDefault();

    // Llamar al servicio de registro
    const result = registerUser(username, password);

    // Mostrar el mensaje de resultado
    setMessage(result.message);
  };

  return (
    <div className='registro'>
      <form onSubmit={handleRegister}>
        <h1>Registro</h1>
        <div className='group'>
          <label htmlFor='usuario'>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='group'>
          <label htmlFor='contraseña'>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="group">
          <label htmlFor="contraseña">Confirmar Contraseña:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrarse</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Register;
