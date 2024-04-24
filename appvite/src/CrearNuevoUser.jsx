import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

const botonCrearUser = document.getElementById('falsa_alerta');

botonCrearUser.addEventListener('click', function() {
  alert("Lo sentimos, no estamos aceptando nuevos usuarios por el momento.");
});

function CrearNuevoUser(){
  return(
    <form class="needs-validation" novalidate="" className="CrearNuevoUser">
        <h4 class="mb-3">Crear Cuenta</h4>
        <div class="row g-3">
          <div class="col-sm-6">
            <label for="firstName" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" />
            <div class="invalid-feedback">
              Ingrese un nombre valido.
            </div>
          </div>
          <div class="col-sm-6">
            <label for="lastName" class="form-label">Apellido</label>
            <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" />
            <div class="invalid-feedback">
              Ingrese un apellido valido.
            </div>
          </div>
          <div class="col-12">
            <label for="username" class="form-label">Username</label>
            <div class="input-group has-validation">
              <span class="input-group-text">@</span>
              <input type="text" class="form-control" id="username" placeholder="Username" required="" />
              <div class="invalid-feedback">
                Necesita un nombre de ususario valido.
              </div>
            </div>
          </div>
          <div class="col-12">
            <label for="email" class="form-label">Email <span class="text-body-secondary">(Optional)</span></label>
            <input type="email" class="form-control" id="email" placeholder="you@example.com" />
            <div class="invalid-feedback">
              Por favor, ingrese un mail valido para recibir notificaciones.
            </div>
          </div>
          <div class="col-12">
            <label for="address" class="form-label">Dirección</label>
            <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="" />
            <div class="invalid-feedback">
              Por favor, ingrese una dirección para recibir sus productos.
            </div>
          </div>
          <div class="col-12">
            <label for="address2" class="form-label">Segunda Dirección (opcional) <span class="text-body-secondary">(Optional)</span></label>
            <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
          </div>
          <div class="col-md-5">
            <label for="country" class="form-label">Rol</label>
            <select class="form-select" id="country" required="">
              <option value="">Elija un rol...</option>
              <option>Vendedor</option>
              <option>Comprador</option>
            </select>
            <div class="invalid-feedback">
              Porfavor seleccione un rol.
            </div>
          </div>
        </div>
        <hr class="my-4" />
        <button class="w-100 btn btn-primary btn-lg" type="submit" id="falsa_alerta" href="../index.html">Crear Cuenta</button>
      </form>
  );
}






