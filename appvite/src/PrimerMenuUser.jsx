import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function PrimerMenuUser(){
    return(
        <div className="DivCaminos">
        <h2>    </h2>
        <p>     </p>
        <div class="row">
          <div class="col-md-6">
            <a href="Menu inicio de sesion" class="btn btn-primary btn-block">Iniciar Sesión</a>
          </div>
          <div class="col-md-6">
            <a href="Menú para registrarse" class="btn btn-secondary btn-block">Registrarse</a>
          </div>
        </div>
      </div>
    );
}