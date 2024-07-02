import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {

    return (
        <div className="flex flex-col items-center text-center p-4 border border-gray-300 rounded-lg shadow-md">
            <Link to={product.name}>
                <div className="flex justify-center items-center mb-4">
                    <img src={product.image} alt={product.name} className="w-40 h-40 object-contain" />
                </div>
                <div className="">
                    <h3 className="font-bold mb-2">Floww Clothes</h3>
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-2">${product.price}</p>
                    {product.discount > 0 && <p className="text-red-500">Descuento {product.discount}%</p>}
                </div>
            </Link>
        </div>
    );

}


export default ProductCard;
