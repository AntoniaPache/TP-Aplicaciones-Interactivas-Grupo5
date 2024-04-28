import React from 'react';
import './CrearNuevoUser.css';

function CrearNuevoUser() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Lo sentimos, no estamos aceptando nuevos usuarios por el momento.");
  };

  return (
    <div>
      <h4 className="mb-3">Crear Cuenta</h4>
    <form className="CrearNuevoUser">
      <div className="row g-3">
        <div className="col-sm-6">
          <label htmlFor="firstName" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="firstName" placeholder="" required />
        </div>
        <div className="col-sm-6">
          <label htmlFor="lastName" className="form-label">Apellido</label>
          <input type="text" className="form-control" id="lastName" placeholder="" required />
        </div>
        <div className="col-12">
          <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" placeholder="Username" required />
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="you@example.com" />
        </div>
        <div className="col-12">
          <label htmlFor="address" className="form-label">Dirección</label>
          <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
        </div>
        <div className="col-md-5">
          <label htmlFor="country" className="form-label">Rol</label>
          <select className="form-select" id="country" required>
            <option value="">Elija un rol...</option>
            <option>Vendedor</option>
            <option>Comprador</option>
          </select>
        </div>
      </div>
      <hr className="my-4" />
    </form>
    <button className="w-100 btn btn-primary btn-lg" type="submit" onSubmit={handleSubmit}>Crear Cuenta</button >
    </div>
  );
}

export default CrearNuevoUser;





