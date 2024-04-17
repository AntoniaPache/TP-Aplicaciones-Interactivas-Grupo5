import React from 'react'
import "./NavBarVendedor.css"
import { Link} from 'react-router-dom'

function NavBarVendedor() {
    return (
        <div className='cont'>
            <header>
                <nav class="navbar">
                <div class="navbar-left">
                    <img src="logo.png" alt="Logo"/>
                </div>
                <div class="navbar-center">
                    <h1>GESTOR DE PUBLICACIONES</h1>
                </div>
                <div class="navbar-right">
                    <Link to = {"publicar"}><button>Publicar</button></Link>
                </div>
                </nav>
            </header>
        </div>
      );
}

export default NavBarVendedor