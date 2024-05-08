import React from 'react'
import { Link } from 'react-router-dom';

function ProductList({product}) {
    return (
        <div className="flex text-sm mb-5">
          <div className="w-40 flex justify-center items-center ">
            <img src={product.image} alt={product.name} className="w-full max-h-20 max-w-20" />   
          </div>
            <h3 className='mb-auto mt-auto'>{product.name}</h3>
          <p className="ml-7 font-semibold mb-auto mt-auto">{product.price}</p>
  
        </div>
      );
}

export default ProductList