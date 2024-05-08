import React, { useState, useRef } from 'react';

export default function UserButton() {

    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef(null);
  
    const toggleDropdown = () => {
      clearTimeout(timeoutRef.current);
      setIsOpen(!isOpen);
    };
  
    const handleMouseEnter = () => {
      clearTimeout(timeoutRef.current);
      setIsOpen(true);
    };
  
    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 200); // Establece un retraso de 200 milisegundos antes de ocultar el menú
    };
  
    return (
       <div className="relative inline-block">
            <button className="boton bg-white border-none cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleDropdown}>
            <img src="src/assets/ph_user-light.svg" alt="User" className="w-6 h-6" />
            </button>
            {isOpen && (
            <ul className="dropdown-menu absolute bg-white min-w-48 z-10 list-none p-0 m-0 border border-black right-0 left-5 transform translate-x-[-100%]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <li><a href="../Views/CrearNuevoUser" className="block py-2 px-3 text-gray-900">Registrarse</a></li>
                <li><a href="../Views/SesionUser" className="block py-2 px-3 text-gray-900">Iniciar Sesión</a></li>
            </ul>)}
        </div>
    );
  }


  