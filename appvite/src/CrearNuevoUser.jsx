import React from 'react';
import './CrearNuevoUser.css';

function CrearNuevoUser() {
  
  return (
    <div class="container">
  <h4>Crear Cuenta</h4>
  <form>
    <div>
      <div>
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" required="" />
      </div>
      <div>
        <label for="apellido">Apellido</label>
        <input type="text" id="apellido" required="" />
      </div>
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" required="" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" required="" />
      </div>
      <div>
        <label for="direccion">Dirección</label>
        <input type="text" id="direccion" />
      </div>
      <div>
        <label for="rol">Rol</label>
        <select id="rol" required>
          <option value="" disabled selected>Elija un rol...</option>
          <option value="vendedor">Vendedor</option>
          <option value="comprador">Comprador</option>
        </select>
      </div>
    </div>
    <hr />
  </form>
  <button>Crear Cuenta</button>
</div>
  );
}

export default CrearNuevoUser;





