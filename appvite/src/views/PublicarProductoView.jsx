import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Unauthorized from './Unauthorized';

function PublicarProductoView() {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        discount: "",
        color: "",
        stock_s: "",
        stock_m: "",
        stock_l: "",
        stock_xl: "",
        gender: "",
        type: "",
        description: "",
        image: null // Este campo se manejará al seleccionar la imagen
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, image: file });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, price, discount, color, stock_s, stock_m, stock_l, stock_xl, gender, type, description, image } = formData;

        const productData = {
            name,
            price: parseFloat(price),
            discount: parseFloat(discount),
            color,
            stock_s: parseInt(stock_s),
            stock_m: parseInt(stock_m),
            stock_l: parseInt(stock_l),
            stock_xl: parseInt(stock_xl),
            genero: gender, // Corregido: debería ser "gender"
            type,
            description,
            image: null // Enviamos null para el campo image en el JSON
        };

        const formDataToSend = new FormData();
        formDataToSend.append('product', JSON.stringify(productData));
        formDataToSend.append('image', image); // Adjuntamos la imagen como tipo file

        try {
            const response = await axios.post('http://localhost:4002/productos/saveProductWithImage', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data); // Maneja la respuesta como necesites
            alert("Producto Publicado con Éxito");
            window.history.go(-1);
        } catch (error) {
            console.error('Error al publicar el producto:', error);
            alert("Error al publicar el producto");
        }
    };

    return (
        <div className='min-h-screen bg-gray-100 flex flex-col justify-center items-center'>
            {localStorage.getItem("role") !== "GERENTE" ? <Unauthorized/> : (
                <>
            <Link to={"/vendedor"} className="mb-8 mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Atrás</Link>
            <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-8 text-center">PUBLICAR PRODUCTO</h1>
                <form id="productForm" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Nombre del Producto:</label>
                        <input type="text" id="productName" name="name" value={formData.name} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700">Precio del Producto:</label>
                        <input type="number" id="productPrice" name="price" value={formData.price} onChange={handleChange} min="0" required className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="discount" className="block text-gray-700">Descuento %:</label>
                        <input type="number" id="productDiscount" name="discount" value={formData.discount} onChange={handleChange} min="0" max="100" required className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
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
                        <label htmlFor="stock" className="text-gray-700 block">Stock Inicial:</label>
                        <input type="number" id="productStock_s" name="stock_s" value={formData.stock_s} onChange={handleChange} min="0" placeholder='Stock Talle S' required className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
                        <input type="number" id="productStock_m" name="stock_m" value={formData.stock_m} onChange={handleChange} min="0" placeholder='Stock Talle M' required className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
                        <input type="number" id="productStock_l" name="stock_l" value={formData.stock_l} onChange={handleChange} min="0" placeholder='Stock Talle L' required className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
                        <input type="number" id="productStock_xl" name="stock_xl" value={formData.stock_xl} onChange={handleChange} min="0" placeholder='Stock Talle XL' required className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
                    </div> 
                    <div className="mb-4">
                        <label htmlFor="gender" className="block text-gray-700">Género:</label>
                        <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md">
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
                        <textarea id="productDescription" name="description" value={formData.description} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Subir Imágenes:</label>
                        <input type="file" id="fileInput" onChange={handleImageChange} required className="file-input mt-1"/>
                    </div>
                    <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Publicar</button>
                </form>
            </div>
            </>)}
        </div>
    );
}

export default PublicarProductoView;
