import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

const botonInicial = document.getElementById("boton_cuenta");
const [link, setLink] = useState();//Ingresar link al menu generico

const [sesion, setSesion] = useState(
    localStorage.getItem('sesion') === false
);

 export const estadoSesion = (nuevoValor, nuevoLink) => {
    setSesion(nuevoValor);
    localStorage.setItem('sesion', nuevoValor);
    setLink(nuevoLink);//Ingresar link al menu de cuenta.
  };

function SetBotonUser(){
    if (!sesion){
        console.log('No hay usuario');
        botonInicial.textContent = 'Iniciar Sesión';

    } else {
        console.log('Se inició sesión');
        botonInicial.textContent = 'Cuenta';
    };
      
};


function BotonUser () {
    return(
        <a onClick={link} class="btn btn-primary" id="boton_cuenta"></a>  
    );
}