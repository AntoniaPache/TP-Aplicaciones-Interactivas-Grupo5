import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import estadoSesion from 'BotonNavUser'

const menuCierre = "link al menu principal";

function cerrarSesion (){
    estadoSesion(false, menuCierre);
    window.location.href = menuCierre;
};

function menuCuenta(){
    return(
        <div className="menuCuenta">
        <div>
            <p>     </p>
        </div>
        <h2 class="text-center">Configuración de cuenta</h2>
        <div class="container">
    
        <div class="btn-group-vertical text-center">
            <button type="button" class="btn btn-primary" onclick="link para modificar datos">Cambiar datos personales</button>
            <button type="button" class="btn btn-primary" onclick="link para acceder a productos propios a la ventas / Main vendedor">Cambiar productos en venta</button>
            <button type="button" class="btn btn-primary" onclick="link para acceder a historial de compras / Main Comprador">Ver historial de compras</button>
            <button type="button" class="btn btn-primary" onclick="">Cerrar Sesión</button>
        </div>
        </div>
        </div>
    );
}