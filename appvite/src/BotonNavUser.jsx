import './BotonNavUser.css'

function BotonUser() {
  return (
    <div className="dropdown">
      <button className="boton" id="boton_cuenta">
        <img src="./assets/img-user" alt="img usuario" />
      </button>
      <ul className="dropdown-menu">
        <li><a href="/CrearNuevoUser.jsx">Registrarse</a></li>
        <li><a href="/SesionUser.jsx">Iniciar Sesión</a></li>
      </ul>
    </div>
  );
}

export default BotonUser;
