import React from 'react'

function ProductList({product, cant, talla, precio}) {
  const precioTotal = (product.price - product.price*(product.discount/100)) * cant;

  if (!product) {
    return <div>Producto no disponible</div>;
  }

    return (
        <div className="flex text-sm mb-5">
          <div className="w-40 flex justify-center items-center ">
            <img src={product.image} alt={product.name} className="w-full max-h-20 max-w-20" />   
          </div>
            <h3 className='mb-auto mt-auto'>{product.name}</h3>
          <p className="ml-7 font-semibold mb-auto mt-auto">${precioTotal} - talle: {talla} - unidades: {cant} </p>
  
        </div>
      );
}

export default ProductList