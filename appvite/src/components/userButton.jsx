import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function UserButton() {

    const location = useLocation();
    const isVendedor = location.pathname.startsWith('/vendedor');

    // Estado para controlar si el menú desplegable está abierto o cerrado
    const [isOpen, setIsOpen] = useState(false);
    // Para almacenar el identificador de timeout
    const timeoutRef = useRef(null);

    // Función para alternar la visibilidad del menú desplegable
    const toggleDropdown = () => {
      clearTimeout(timeoutRef.current); // cancela cualquier temporizador previamente establecido
      setIsOpen(!isOpen); //si el menú está abierto lo cierra, y si está cerrado lo abre.
    };
    
    //se activa cuando el cursor del mouse entra en el área del botón.
    const handleMouseEnter = () => {
      clearTimeout(timeoutRef.current);
      setIsOpen(true); //abre menú
    };
  
    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false); //cierra menú
      }, 200); // Establece un retraso de 200 milisegundos antes de ocultar el menú
    };
  
    return (
      !isVendedor ? ( // Si No esta iniciada la sesion

       <div className="relative inline-block">
            <button className="boton bg-white border-none cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleDropdown}>
            <img src="src/assets/ph_user-light.svg" alt="User" className="w-6 h-6" />
            </button>
            {isOpen && (
            <ul className="dropdown-menu absolute bg-white min-w-48 z-10 list-none p-0 m-0 border border-black right-0 left-5 transform translate-x-[-100%]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <li><a href="/register" className="block py-2 px-3 text-gray-900">Registrarse</a></li>
                <li><a href="/login" className="block py-2 px-3 text-gray-900">Iniciar Sesión</a></li>
            </ul>)}
        </div>

      ): ( // Si esta iniciada

        <div className="relative inline-block">
        <button className="boton bg-white border-none cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleDropdown}>
        <img src="src/assets/ph_user-light.svg" alt="User" className="w-6 h-6" />
        </button>
        {isOpen && (
        <ul className="dropdown-menu absolute bg-white min-w-48 z-10 list-none p-0 m-0 border border-black right-0 left-5 transform translate-x-[-100%]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <li><a href="../" className="block py-2 px-3 text-gray-900">Cerrar Sesion</a></li>
        </ul>)}
    </div>

      )
    );
  }


  