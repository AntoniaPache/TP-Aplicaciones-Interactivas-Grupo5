import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function EditarProductoView({ p }) {


  const [formData, setFormData] = useState({
    name: p.name,
    price: p.price,
    discount: p.discount,
    color: p.color,
    stock_s: p.stock["S"],
    stock_m: p.stock["M"],
    stock_l: p.stock["L"],
    stock_xl: p.stock["XL"],
    gender: p.gender,
    type: p.type,
    description: p.description,
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

       alert('Nombre = '+formData.name+" Precio = "+formData.price+" Descuento =  "+formData.discount+" Stock = "+formData.stock);

};

    const handleEliminarProducto = (e) => {
        e.preventDefault();

        alert("El producto ha sido elminado con exito")
        window.history.go(-1);

    };

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col justify-center items-center'>
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
            <input type="number" id="productDiscount" name="discount"  min="0" required value={formData.discount} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
                    <label htmlFor="color" className="block text-gray-700">Color:</label>
                    <input type="text" id="productcolor" name="color" required value={formData.color} className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
                </div>  
          <div className="mb-4">
            <label htmlFor="stock" className=" text-gray-700 flex">Stock Inicial:</label>
            <input type="number" id="productStock_s" name="stock_s" min="0" placeholder='Stock Talle S' required value={formData.stock_s} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
            <input type="number" id="productStock_m" name="stock_m" min="0" placeholder='Stock Talle M' required value={formData.stock_m} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
            <input type="number" id="productStock_l" name="stock_l" min="0" placeholder='Stock Talle L' required value={formData.stock_l} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
            <input type="number" id="productStock_xl" name="stock_xl" min="0" placeholder='Stock Talle XL' required value={formData.stock_xl} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
          </div> 
          <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-700">Género:</label>
            <select id="gender" name="gender" required value={formData.gender} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md">
              <option value="">Seleccionar</option>
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block text-gray-700">Tipo de Producto:</label>
            <input type="text" id="productType" name="type" required value={formData.type} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">Descripción del Producto:</label>
            <textarea id="productDescription" name="description" required value={formData.description} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Upload Images:</label>
            <input type="file" id="fileInput" className="file-input mt-1" />
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Editar Publicacion</button>
        </form>
      </div>
    </div>
  )
}

export default EditarProductoView;