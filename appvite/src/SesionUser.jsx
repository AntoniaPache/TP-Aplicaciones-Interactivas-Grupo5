import './SesionUser.css'

/*const BotonEnviar = document.getElementById('boton_submit')

function alerta() { 
    alert("El usuario o la contraseña son incorrectos.");
  };

BotonEnviar.addEventListener('click', alerta());*/


export function SesionUser(){
    return(
    <form className="InicioSesionForm">
      <h2>Iniciar Sesión</h2>
      <div>
        <p>     </p>
      </div>
      <div class="form-floating">
        <input  class="form-control" id="floatingInput" placeholder="sample1" />
        <label for="floatingInput">Usuario</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="123" />
        <label for="floatingPassword">Contraseña</label>
      </div>
      <button href="../index.html" class="btn btn-primary" type="submit" id="boton_submit">Iniciar Sesion</button>
      <div>
        <p>     </p>
      </div>
    </form>
    );
}

export default SesionUser;