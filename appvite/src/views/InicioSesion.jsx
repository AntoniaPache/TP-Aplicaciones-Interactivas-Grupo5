export default function InicioSesion(){

  return(
      <div>
        <form>
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
  
      <div class="form-check text-start my-3">
        <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
        <label class="form-check-label" for="flexCheckDefault">
          Recuerdame
        </label>
      </div>
      <button href="../index.html" class="btn btn-primary" type="submit" id="boton_submit">Iniciar Sesion</button>
      <div>
        <p>     </p>
      </div>
      <a href="../index.html" class="btn btn-secondary">Volver a la página principal</a>
    </form>
      </div>
  );
}
