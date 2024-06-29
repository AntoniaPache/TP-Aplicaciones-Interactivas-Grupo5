import React, { useState } from "react";
import axios from "axios";

export default function CrearUser() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = formData;
    const dataToSend = {
      email,
      password,
      role: "CLIENTE",
      name: firstName,
      surname: lastName
    };

    axios.post('http://localhost:4002/api/v1/auth/register', dataToSend, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response.data);
        alert('Cuenta creada exitosamente');
      })
      .catch(error => {
        console.error('Hubo un error al crear la cuenta', error);
        alert('Hubo un error al crear la cuenta');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-md needs-validation"
        noValidate
        onSubmit={handleSubmit}
      >
        <h4 className="mb-6 text-2xl font-bold text-center">Crear Cuenta</h4>

        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 mb-2">First name</label>
          <input
            type="text"
            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 mb-2">Last name</label>
          <input
            type="text"
            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">Contraseña</label>
          <input
            type="password"
            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <hr className="my-6" />

        <button
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          type="submit"
          id="falsa_alerta"
        >
          Crear Cuenta
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

