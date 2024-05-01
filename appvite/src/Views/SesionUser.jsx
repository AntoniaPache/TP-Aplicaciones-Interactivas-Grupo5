import './SesionUser.css'

export function SesionUser(){

  const BotonAlerta = document.getElementById('alarma');

  function AvisoFalso(){
    alert("Lo sentimos, no estamos aceptando nuevos usuarios por el momento.")
  };

  addEventListener(BotonAlerta, 'click', AvisoFalso);

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
      <button id="alarmaS">Iniciar Sesion</button>
      <div>
        <p>     </p>
      </div>
    </form>
    );
}

export default SesionUser;