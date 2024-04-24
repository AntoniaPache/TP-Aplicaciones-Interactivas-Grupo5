import React from 'react'
import { Link } from 'react-router-dom'

function EditarProductoView({ p }) {
    console.log(p.name)
  return (
    <body className='publicar'>
        <Link to={"/Vendedor"}><h2>Atras</h2></Link>
        <div className="container">
            <h1 className = "titulo">Editar Publicacion</h1>
            <form id="productForm">
              <div className="form-group">
                    <label for="productName">Nombre del Producto:</label>
                    <input type="text" id="productName" name="productName" value={p.name} required/>
                </div>
                <div className="form-group">
                    <label for="productPrice">Precio del Producto:</label>
                    <input type="number" id="productPrice" name="productPrice" value={p.price} required/>
                </div>
                <div className="form-group">
                    <label for="productDiscount">Descuento %</label>
                    <input type="number" id="productDiscount" name="productDiscount" value={p.discount} required/>
                </div> 
                <div className="form-group">
                    <label for="productStock">Actualizar Stock</label>
                    <input type="number" id="productStock" name="productStock" value={p.stock} required/>
                </div> 
                <div className="form-group">
                    <label for="productDescription">Descripción del Producto:</label>
                    <textarea id="productDescription" name="productDescription" value={p.description} required></textarea>
                </div>
                <div className="form-group">
                    <input type="file" id="fileInput" className="file-input" multiple/>
                    <div className="image-gallery" id="imageGallery"></div>
                </div>
                <button type="submit">Confirmar</button>
                </form>
            </div>
    </body>
  )
}

export default EditarProductoView