import React from 'react'
import "./PublicarProductoView.css"
import { Link } from 'react-router-dom'

function PublicarProductoView() {
  return (
    <body className='publicar'>
        <Link to={"/Vendedor"}><h2>Atras</h2></Link>
        <div className="container">
            <h1 className = "titulo">PUBLICAR PRODUCTO</h1>
            <form id="productForm">
                <div className="form-group">
                    <label for="productName">Nombre del Producto:</label>
                    <input type="text" id="productName" name="productName" required/>
                </div>
                <div className="form-group">
                    <label for="productPrice">Precio del Producto:</label>
                    <input type="number" id="productPrice" name="productPrice" required/>
                </div>
                <div className="form-group">
                    <label for="productDiscount">Descuento %</label>
                    <input type="number" id="productDiscount" name="productDiscount" required/>
                </div> 
                <div className="form-group">
                    <label for="productStock">Stock Inicial</label>
                    <input type="number" id="productStock" name="productStock" required/>
                </div> 
                <div className="form-group">
                    <label for="productDescription">Descripción del Producto:</label>
                    <textarea id="productDescription" name="productDescription" required></textarea>
                </div>
                <div className="form-group">
                    <input type="file" id="fileInput" className="file-input" multiple/>
                    <div className="image-gallery" id="imageGallery"></div>
                </div>
                <button type="submit">-Publicar-</button>
            </form>
        </div>
    </body>
  )
}

export default PublicarProductoView