// Variables para almacenar los valores

const campoUser = document.querySelector('#username');
const campoPass = document.querySelector('#password');
const botonInicial = document.querySelector('#boton_cuenta');
const botonGuardar = document.getElementById('boton_submit');

//Alerta mock
function alerta2() { 
  alert("Este usuario no existe");
};

// Cambios de Links
function redirigirConfig(){
  window.location.href = '../views/ConfigCuenta';
};

function mostrarConfiguracion(tipo, user) {
  // Almacenar información de sesión en el almacenamiento local
  localStorage.setItem('tipoUsuario', tipo);
  localStorage.setItem('Usuario', user);
  // Redirigir al usuario a la página de configuración correspondiente
  if (tipo === "comprador") {
    window.location.href = '../views/ConfigCuenta';
  } else if (tipo === "vendedor") {
    window.location.href = '../views/ConfigCuenta';
  }
}

function Config (){
  Usuario = false;
  username = campoUser.value;
  password = campoPass.value;
  if (username === "sample1" && password === "123") {
    console.log('Hay usuario');
    Usuario=true;
    botonGuardar.addEventListener('click', mostrarConfiguracion("comprador", Usuario));
  }
  if (username === "sample2" && password === "456") {
    console.log('Hay usuario');
    Usuario=true;
    botonGuardar.addEventListener('click', mostrarConfiguracion("vendedor", Usuario));
  } else {
    console.log('No entró');
    alerta2();
    Usuario = false;
    username="";
    password="";
  }
};

//Grabar Datos
function guardarConfiguracion() {
  // Capturar el valor del campo de selección
  username = document.getElementById("username").value;

  // Capturar el valor del campo de correo electrónico
  password = document.getElementById("password").value;
};


//Main
var varU=localStorage.getItem('Usuario');
if (!varU) {
  console.log('No hay usuario');
  botonInicial.textContent = 'Iniciar Sesión';
} else {
  console.log('Se inició sesión');
  botonInicial.textContent = 'Cuenta';
  botonInicial.addEventListener('click', mostrarConfiguracion());
};