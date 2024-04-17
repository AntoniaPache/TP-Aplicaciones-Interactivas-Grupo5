import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header>
        <nav class="navbar">
            <div class="navbar-left">
                <img src="logo.png" alt="Logo"/>
            </div>
            <div class="navbar-center">
                <h1>Tus publicaciones</h1>
            </div>
            <div class="navbar-right">
                <Link to={"publicar"}><button>Publicar</button></Link>
            </div>
        </nav>
    </header>
  )
}

export default NavBar