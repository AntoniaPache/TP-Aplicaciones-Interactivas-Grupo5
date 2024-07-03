import React from 'react';
import ProductList from '../components/ProductList';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Carrito() {
    const items = useSelector((state) => state.productos.items);
    let precioFinal = 0;

    const productosList = items.map((p, index) => {
        const precio = (p.item.price - p.item.price * (p.item.discount / 100)) * p.quantity;
        precioFinal += precio;
        return <ProductList key={index} index={index} product={p.item} price={p.price} cant={p.quantity} talla={p.size} />;
    });

    let carritoVacio = items.length === 0;
    precioFinal = parseFloat(precioFinal.toFixed(2));

    const handleVaciarCarrito = () => {
        window.location.reload();
    };

    return (
        <>
            {carritoVacio ? (
                <div className="flex bg-[#332D2C] text-white h-96 p-10">
                    <h1 className='m-auto text-3xl font-serif '>Carrito vacio...</h1>
                </div>
            ) : (
                <div className="flex bg-[#332D2C] text-white h-96 p-10">
                    <div className="flex flex-col justify-center items-center p-5 mr-5 h-80 w-1/2 bg-[#1e1c1c]">
                        <h1 className='text-3xl font-serif'>Total: ${precioFinal}</h1>
                        <Link to={"/Checkout"}><button className="mt-10 w-40 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Comprar</button></Link>
                        <button onClick={handleVaciarCarrito} className="mt-2 w-40 py-2 px-4 text-white rounded-md">Vaciar Carrito</button>
                    </div>
                    <div className="p-5 ml-5 h-80 w-1/2 bg-[#1e1c1c] overflow-auto">
                        {productosList}
                    </div>
                </div>
            )}
        </>
    );
}

export default Carrito;