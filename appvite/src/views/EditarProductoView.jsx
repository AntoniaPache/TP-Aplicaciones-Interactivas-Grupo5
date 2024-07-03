import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Unauthorized from './Unauthorized';

function EditarProductoView({ p }) {

  const [formData, setFormData] = useState({
    name: p.name,
    price: p.price,
    discount: p.discount,
    color: p.color,
    stock_s: p.stock_s,
    stock_m: p.stock_m,
    stock_l: p.stock_l,
    stock_xl: p.stock_xl,
    genero: p.genero,
    type: p.type,
    description: p.description,
    image: p.image
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    
    // Crear un objeto URL para mostrar la imagen seleccionada
    const imageUrl = URL.createObjectURL(file);
  
    setFormData({ ...formData, image: file, imageUrl }); // Actualizar el estado con el archivo y la URL
  }

const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, price, discount, color, stock_s, stock_m, stock_l, stock_xl, genero, type, description, image} = formData;

    const productData = {
        name,
        price: parseFloat(price),
        discount: parseFloat(discount),
        color,
        stock_s: parseInt(stock_s),
        stock_m: parseInt(stock_m),
        stock_l: parseInt(stock_l),
        stock_xl: parseInt(stock_xl),
        genero: genero, 
        type,
        description
    };

    var imagenCambiada = p.image != image;

    console.log(p.image)
    console.log(image)
    console.log(imagenCambiada)

    const url1 = 'http://localhost:4002/productos/'+ p.id;

    try {
        const response = await axios.put(url1, productData, {
        });
        console.log(response.data); // Maneja la respuesta como necesites
        alert("Producto Editado con Éxito");
    } catch (error) {
        console.error('Error al editar el producto:', error);
        alert("Error al editar el producto");
    }

    if(imagenCambiada){

      const formDataToSend = new FormData();
        formDataToSend.append('image', image); // Adjuntamos la imagen como tipo file
    
      const url2 = "http://localhost:4002/productos/"+p.id+"/uploadImage";

      try {
        const response = await axios.post(url2, formDataToSend, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(response.data); // Maneja la respuesta como necesites
        alert("Imagen Cambiada con Éxito");
    } catch (error) {
        console.error('Error al cambiar la imagen:', error);
        alert("Error al cambiar la imagen");
    }
    }

};

    const handleEliminarProducto = async (e) => {
      e.preventDefault();

      const url = "http://localhost:4002/productos/" + p.id;

      try {
        const response = await axios.delete(url);
        console.log(response.data); // Maneja la respuesta como necesites
        alert("Producto Eliminado con Éxito");
        window.history.go(-1);
      } catch (error) {
        console.error('Error al eliminar el producto:', error);
        alert("Error al eliminar el producto");
      }
    };

  return (
    
    <div className='min-h-screen bg-gray-100 flex flex-col justify-center items-center'>
        {localStorage.getItem("role") !== "GERENTE" ? <Unauthorized/> : (
        <>
        <div className="flex mb-4 mt-4">
          <Link to={"/vendedor"} className="mr-8 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Atrás</Link>
         <Link to={"/vendedor"} onClick={handleEliminarProducto} className="ml-8 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Eliminar Publicacion</Link>
       </div>
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-8 text-center">EDITAR PUBLICACION</h1>
        <form id="productForm" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Nombre del Producto:</label>
            <input type="text" id="productName" name="name" required value={formData.name} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700">Precio del Producto:</label>
            <input type="number" id="productPrice" name="price" min="0" required value={formData.price} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="discount" className="block text-gray-700">Descuento %</label>
            <input type="number" id="productDiscount" name="discount"  min="0" max="100" required value={formData.discount} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
                        <label htmlFor="color" className="block text-gray-700">Color:</label>
                        <select id="productColor" name="color" value={formData.color} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md">
                            <option value="">Seleccionar</option>
                            <option value="Negro">Negro</option>
                            <option value="Blanco">Blanco</option>
                            <option value="Azul">Azul</option>
                            <option value="Verde">Verde</option>
                            <option value="Violeta">Violeta</option>
                            <option value="Rosa">Rosa</option>
                            <option value="Gris">Gris</option>
                        </select>
          </div> 
          <div className="mb-4">
            <label htmlFor="stock" className=" text-gray-700 flex">Stock Inicial:</label>
            <input type="number" id="productStock_s" name="stock_s" min="0" placeholder='Stock Talle S' required value={formData.stock_s} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
            <input type="number" id="productStock_m" name="stock_m" min="0" placeholder='Stock Talle M' required value={formData.stock_m} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
            <input type="number" id="productStock_l" name="stock_l" min="0" placeholder='Stock Talle L' required value={formData.stock_l} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
            <input type="number" id="productStock_xl" name="stock_xl" min="0" placeholder='Stock Talle XL' required value={formData.stock_xl} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
          </div> 
          <div className="mb-4">
            <label htmlFor="genero" className="block text-gray-700">Género:</label>
            <select id="genero" name="genero" required value={formData.genero} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md">
              <option value="">Seleccionar</option>
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>
          <div className="mb-4">
                        <label htmlFor="type" className="block text-gray-700">Tipo de Producto:</label>
                        <select id="productType" name="type" value={formData.type} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md">
                            <option value="">Seleccionar</option>
                            <option value="Buzo">Buzo</option>
                            <option value="Remera">Remera</option>
                            <option value="Jogger">Jogger</option>
                            <option value="Media">Media</option>
                            <option value="Short">Short</option>
                            <option value="Calza">Calza</option>
                            <option value="Campera">Campera</option>
                            <option value="Gorro">Gorro</option>
                            <option value="Gorra">Gorra</option>
                        </select>
                    </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">Descripción del Producto:</label>
            <textarea id="productDescription" name="description" required value={formData.description} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
          </div>
          <div className="mb-4">
           <div className="flex items-center justify-between">
              <label className="block text-gray-700">Cambiar Imagen:</label>
              <img src={formData.imageUrl || p.image} className="w-20 h-20 rounded-md ml-4" />
            </div>
            <input type="file" id="fileInput" onChange={handleImageChange} className="file-input mt-1"/>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Editar Publicacion</button>
        </form>
      </div>
      </>)}
    </div>
  )
}

export default EditarProductoView;