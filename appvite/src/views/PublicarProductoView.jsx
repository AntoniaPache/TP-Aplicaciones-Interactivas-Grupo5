import React from 'react'
import "./PublicarProductoView.css"
import { Link } from 'react-router-dom'

function PublicarProductoView() {
  return (
    <>
        <Link to={"/"}><h2>Atras</h2></Link>
        <div className="container">
            <h1 className = "titulo">Publicar Producto</h1>
            <form id="productForm">
                <div className="form-group">
                    <label for="productName">Nombre del Producto:</label>
                    <input type="text" id="productName" name="productName" required/>
                </div>
                <div className="form-group">
                    <label for="filtro">¿Que es?</label>
                        <select id="filtro" name="referrer">
                        <option value="">(select one)</option>
                        <option value="1">Ropa</option>
                        <option value="2">Comida</option>
                        <option value="3">Muebles</option>
                        <option value="4">Tecnologia</option>
                        <option value="5">Autos</option>
                        <option value="6">Herramientas</option>
                        <option value="7">Hogar</option>
                        <option value="8">Mascotas</option>
                        <option value="9">Otros</option>
                        </select> 
                    </div> 
                <div className="form-group">
                    <label for="productDescription">Descripción del Producto:</label>
                    <textarea id="productDescription" name="productDescription" required></textarea>
                </div>
                    <div className="form-group">
                        <label for="productPrice">Precio del Producto:</label>
                        <input type="number" id="productPrice" name="productPrice" required/>
                    </div>
                <div className="form-group">
                    <input type="file" id="fileInput" className="file-input" multiple/>
                    <div className="image-gallery" id="imageGallery"></div>
                </div>
                <button type="submit">Subir Producto</button>
            </form>
        </div>
    </>
  )
}

export default PublicarProductoView