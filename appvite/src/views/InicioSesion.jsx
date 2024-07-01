import React, { useState } from 'react';
import axios from 'axios';

export default function InicioSesion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const loginData = new URLSearchParams();
    loginData.append('username', email);
    loginData.append('password', password);
    console.log(email)
    console.log(password)

    try {
      const response = await axios.post('http://localhost:4002/login', loginData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      // Aquí puedes guardar el token en el localStorage, contexto, etc.
      localStorage.setItem('token', response.data.accessToken); 
      // Redirigir a la página de inicio
      window.location = '/';

    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        setError('Usuario o password incorrecto');
      } else {
        console.log(err.message);
        setError('Error de red o servidor no disponible');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>

        <div className="mb-4">
          <label htmlFor="floatingInput" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="floatingInput"
            type="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="floatingPassword" className="block text-gray-700 mb-2">
            Contraseña
          </label>
          <input
            type="password"
            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="floatingPassword"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-check text-start mb-6">
          <input
            className="form-check-input mr-2"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label text-gray-600" htmlFor="flexCheckDefault">
            Recuérdame
          </label>
        </div>

        <button
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          type="submit"
          id="boton_submit"
        >
          Iniciar Sesión
        </button>

        <div className="mt-4 text-center">
          <a
            href="/"
            className="text-gray-500 hover:text-gray-700"
          >
            Volver a la página principal
          </a>
        </div>
      </form>
    </div>
  );
}
