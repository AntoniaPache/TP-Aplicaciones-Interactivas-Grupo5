import { useState } from "react";

export default function UserButton() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className="relative inline-block">
        <button className="boton bg-red-600 border-none cursor-pointer" onClick={toggleDropdown}>
            <img src="src/assets/ph_user-light.svg" alt="User" className="w-6 h-6" />
        </button>
        {isOpen && (
            <ul className="dropdown-menu  bg-red-700 min-w-48 z-10 list-none p-0 m-0 border border-red-200">
            <li><a href="../Views/CrearNuevoUser" className="block py-2 px-3 text-gray-900">Registrarse</a></li>
            <li><a href="../Views/SesionUser" className="block py-2 px-3 text-gray-900">Iniciar Sesión</a></li>
            </ul>
        )}
        </div>
    );
}