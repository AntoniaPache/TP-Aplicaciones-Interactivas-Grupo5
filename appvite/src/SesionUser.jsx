import './SesionUser.css'

export function SesionUser(){
    return(
    <form className="InicioSesionForm">
      <h2>Iniciar Sesión</h2>
      <div>
        <p>     </p>
      </div>
      <div>
        <input />
        <label>Usuario</label>
      </div>
      <div>
        <input />
        <label>Contraseña</label>
      </div>
      <button>Iniciar Sesion</button>
      <div>
        <p>     </p>
      </div>
    </form>
    );
}

export default SesionUser;