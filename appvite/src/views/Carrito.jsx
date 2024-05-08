import React from 'react'
import Products from "../data/ProductosCarrito.json"
import ProductList from '../components/ProductList';
import { Link } from 'react-router-dom';

function Carrito() {

    let precioFinal = 0;

    const productList = Products.map((p) => {
        const precioSinSigno = p.price.replace("$", "").replace(".", "").replace(",", "");
        const precioEntero = parseInt(precioSinSigno);
        precioFinal += precioEntero;
        return <ProductList product={p} />;
      });

      let carritoVacio = productList.length==0;

    return (
        <>
        {carritoVacio ? (
            <div className="flex bg-[#332D2C] text-white h-96 p-10">
                <h1 className='m-auto text-3xl font-serif '>El carrito esta vacio D:</h1>
            </div>
      ) :   
        <div className="flex bg-[#332D2C] text-white h-96 p-10">
        <div className="flex flex-col justify-center items-center p-5 mr-5 h-80 w-1/2 bg-[#1e1c1c]" >
            <h1 className='text-3xl font-serif'>Total: ${precioFinal}</h1>
            <Link to={"/Checkout"}><button className="mt-10 w-40 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Comprar</button></Link>
        </div>
        <div className="p-5 ml-5 h-80 w-1/2 h bg-[#1e1c1c] overflow-auto">   
            {productList}
        </div>
  </div>
      }
        </>
    );
}

export default Carrito