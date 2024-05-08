import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function PublicarProductoView() {

    const [formData, setFormData] = useState({
        name:"",
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
        image: ""
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
           alert("Producto Publicado con Exito");
    
    };

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col justify-center items-center'>
        <Link to={"/vendedor"} className="mb-8 mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Atrás</Link>
        <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
            <h1 className = "text-2xl font-bold mb-8 text-center">PUBLICAR PRODUCTO</h1>
            <form id="productForm" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Nombre del Producto:</label>
                    <input type="text" id="productName" name="name" required className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700">Precio del Producto:</label>
                    <input type="number" id="productPrice" name="price" min="0" required className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="discount" className="block text-gray-700">Descuento %:</label>
                    <input type="number" id="productDiscount" name="discount" min="0" required className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="color" className="block text-gray-700">Color:</label>
                    <input type="text" id="productcolor" name="color" required className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
                </div>  
                <div className="mb-4">
                    <label htmlFor="stock" className=" text-gray-700 flex">Stock Inicial:</label>
                    <input type="number" id="productStock_s" name="stock_s" min="0" placeholder='Stock Talle S' required className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
                    <input type="number" id="productStock_m" name="stock_m" min="0" placeholder='Stock Talle M' required className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
                    <input type="number" id="productStock_l" name="stock_l" min="0" placeholder='Stock Talle L' required className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
                    <input type="number" id="productStock_xl" name="stock_xl" min="0" placeholder='Stock Talle XL' required className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
                </div> 
                <div className="mb-4">
                    <label htmlFor="gender" className="block text-gray-700">Género:</label>
                    <select id="gender" name="gender" required className="mt-1 p-2 w-full border border-gray-300 rounded-md">
                        <option value="">Seleccionar</option>
                        <option value="hombre">Hombre</option>
                        <option value="mujer">Mujer</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="type" className="block text-gray-700">Tipo de Producto:</label>
                    <input type="text" id="productName" name="name" required className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700">Descripción del Producto:</label>
                    <textarea id="productDescription" name="productDescription" required className="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Upload Images:</label>
                    <input type="file" id="fileInput" required className="file-input mt-1"/>
                </div>
                <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Publicar</button>
            </form>
        </div>
    </div>
  )
}

export default PublicarProductoView