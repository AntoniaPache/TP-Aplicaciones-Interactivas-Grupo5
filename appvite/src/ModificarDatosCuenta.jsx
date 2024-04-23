import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

const botonMod = document.getElementById('Mod');

botonMod.addEventListener('click', function() {
    alert("Los cambios se han efectuado con exito.");
  });

function ModificarDatosCuenta(){
    return(
        <form class="needs-validation" novalidate="" className="formulario_de_Mod">
            <h4 class="mb-3">Modifique sus datos</h4>
            <h5 class="mb-3">Llene los campos de los datos que desea modificar.</h5>
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="firstName" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" />
              </div>
              <div class="col-sm-6">
                <label for="lastName" class="form-label">Apellido</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" />
              </div>
              <div class="col-12">
                <label for="username" class="form-label">Username</label>
                <div class="input-group has-validation">
                  <span class="input-group-text">@</span>
                  <input type="text" class="form-control" id="username" placeholder="Username" />
                </div>
              </div>
              <div class="col-12">
                <label for="email" class="form-label">Email <span class="text-body-secondary">(Optional)</span></label>
                <input type="email" class="form-control" id="email" placeholder="you@example.com" />
              </div>
              <div class="col-12">
                <label for="address" class="form-label">Dirección</label>
                <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="" />
              </div>
            </div>
            <hr class="my-4" />
            <button class="w-100 btn btn-primary btn-lg" type="submit" id="Mod" href="../index.html">Modificar Datos</button>
          </form>
    );
}