import React from 'react'
import { Link } from 'react-router-dom'

function EditarProductoView() {
  
    return (
        <div className='min-h-screen bg-gray-100 flex flex-col justify-center items-center'>
            <Link to={"/Vendedor"} className="mb-8 text-blue-500 hover:text-blue-700"><h2>Atras</h2></Link>
            <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
                <h1 className = "text-2xl font-bold mb-8 text-center">PUBLICAR PRODUCTO</h1>
                <form  id="productForm">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Nombre del Producto:</label>
                        <input type="text" id="productName" name="name" required className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700">Precio del Producto:</label>
                        <input type="number" id="productPrice" name="price" required className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="discount" className="block text-gray-700">Descuento %</label>
                        <input type="number" id="productDiscount" name="discount" required className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
                    </div> 
                    <div className="mb-4">
                        <label htmlFor="stock" className="block text-gray-700">Stock Inicial</label>
                        <input type="number" id="productStock" name="stock" required className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
                    </div> 
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700">Descripción del Producto:</label>
                        <textarea id="productDescription" name="productDescription" required className="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Upload Images:</label>
                        <input type="file" id="fileInput" className="file-input mt-1" multiple/>
                        <div className="image-gallery" id="imageGallery"></div>
                    </div>
                    <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Publicar</button>
                </form>
            </div>
        </div>
      )
    }

export default EditarProductoView