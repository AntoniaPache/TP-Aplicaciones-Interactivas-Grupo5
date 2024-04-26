import React, { useState } from 'react';
import './BotonNavUser.css';
import CrearNuevoUser from './CrearNuevoUser';
import SesionUser from './SesionUser';

function BotonUser() {
  const [componenteSeleccionado, setComponenteSeleccionado] = useState(null);

  const handleChange = (event) => {
    const valorSeleccionado = event.target.value;
    
    if (valorSeleccionado === 'registro') {
      setComponenteSeleccionado(<CrearNuevoUser />);
    } else if (valorSeleccionado === 'sesion') {
      setComponenteSeleccionado(<SesionUser />);
    } else {
      setComponenteSeleccionado(null);
    }
  };

  return (
    <div className="dropdown">
      <button className="boton" id="boton_cuenta">
        <img src="./" alt="usuario" />
      </button>
      <select onChange={handleChange}>
        <option value="" disabled hidden>Selecciona una opción</option>
        <option value="registro">Registrarse</option>
        <option value="sesion">Iniciar Sesión</option>
      </select>
      <div>
      {componenteSeleccionado}
      </div>
    </div>
  );
}

export default BotonUser;


