import axios from 'axios';

export default function productos(){

axios.get('http://localhost:4002/productos')
    .then(response => {
        return response.data; // Aquí obtienes los datos de los productos
    })
    .catch(error => {
        return 'Error al obtener productos', error;
    });

}

