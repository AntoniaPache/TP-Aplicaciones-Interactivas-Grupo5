import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import estadoSesion from 'ComponentsUser'

const menuCuenta = "link a la cuenta";

function alerta() { 
    alert("Este usuario no existe");
  };

const [tipoUsuario, setUsuario] = useState(
    localStorage.getItem('tipoUsuario') === ""
);

function Config (){
  const campoUser = document.getElementById('username');
  const campoPass = document.getElementById('password');
  username = campoUser.value;
  password = campoPass.value;
  if (username === "sample1" && password === "123") {
    setUsuario("comprador");
    estadoSesion(true, menuCuenta);
  }
  if (username === "sample2" && password === "456") {
    setUsuario("vendedor");
    estadoSesion(true, menuCuenta);
  } else {
    alerta();
  }
};


function InicioSesionForm(){
    return(
    <form className="InicioSesionForm">
      <h2>Iniciar Sesión</h2>
      <div>
        <p>     </p>
      </div>
      <div class="form-floating">
        <input  class="form-control" id="floatingInput" placeholder="sample1" />
        <label for="floatingInput">Usuario</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="123" />
        <label for="floatingPassword">Contraseña</label>
      </div>
      <button href="../index.html" class="btn btn-primary" type="submit" id="boton_submit" onClick={Config}>Iniciar Sesion</button>
      <div>
        <p>     </p>
      </div>
      <a href="../index.html" class="btn btn-secondary">Volver a la página principal</a>
    </form>
    );
}