document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente
  
    // Recoger datos del formulario
    var formData = new FormData(this);
    
    // Convertir datos a objeto JSON
    var jsonData = {};
    formData.forEach(function(value, key){
      jsonData[key] = value;
    });
  
    // Enviar datos a la base de datos (aquí va tu lógica para enviar los datos a la base de datos)
    console.log(jsonData); // Aquí simplemente imprimimos los datos por consola como ejemplo
    
    // Aquí puedes agregar código para enviar los datos a tu backend para su procesamiento y almacenamiento en la base de datos
  });
  