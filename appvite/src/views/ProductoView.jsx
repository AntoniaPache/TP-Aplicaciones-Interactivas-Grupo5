import React, { useState } from 'react';
import visaLogo from '../assets/visa.svg';
import mastercardLogo from '../assets/mastercard.svg';
import mercadopagoLogo from '../assets/mercadopago.svg';
import cashLogo from '../assets/cash.svg';
import { useSelector, useDispatch } from 'react-redux';
import { addProd } from '../Redux/carritoSlice';

function ProductoView({ p }) {

    const carr = useSelector((state)=> state.items);
    const dispatch = useDispatch();
    const iSingedin = localStorage.getItem('token') !== null;
    
    const [formData, setFormData] = useState({
        size: 's', // Tamaño predeterminado
        quantity: 1 // Cantidad predeterminada
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(iSingedin){
            dispatch(addProd({ item: p, price: p.price , quantity: formData.quantity, size: formData.size }));
            alert('Se agregaron al carrito '+formData.quantity+" "+p.name+" talle "+formData.size);
        }
        else{
            alert('Por favor, inicia sesión para agregar productos al carrito.');
        }

    };

    return (
        <>
            <div className="flex justify-center items-center bg-[#332D2C] text-white">
                <div className="m-5 flex  justify-center items-center">
                    <img className="w-1/2" src={p.image} alt="Imagen del producto" />
                </div>
                <div className="p-8 m-5 space-y-8 w-1/2">
                    <div className="text-3xl font-serif">
                        <h1 className="">{p.name}</h1>
                        <h1>{p.price}</h1>
                    </div>
                    <div>
                        <h3>MEDIOS DE PAGO</h3>
                        <div className="flex space-x-3 mt-1 ">
                            <img src={visaLogo} alt="Visa" className="w-6 h-6" />
                            <img src={mastercardLogo} alt="Mastercard" className="w-6 h-6" />
                            <img src={mercadopagoLogo} alt="Mercadopago" className="w-6 h-6" />
                            <img src={cashLogo} alt="Cash" className="w-6 h-6" />
                        </div>
                    </div>
                    <form id="product_form" onSubmit={handleSubmit}>
                        <label htmlFor="talle">TALLE</label>
                        <div className="flex">
                            <label className="inline-flex items-center mr-4">
                                <input type="radio" className="" name="size" value="s" checked={formData.size === 's'} onChange={handleChange} />
                                <span className="ml-2">S</span>
                            </label>
                            <label className="inline-flex items-center mr-4">
                                <input type="radio" className="" name="size" value="m" checked={formData.size === 'm'} onChange={handleChange} />
                                <span className="ml-2">M</span>
                            </label>
                            <label className="inline-flex items-center mr-4">
                                <input type="radio" className="" name="size" value="l" checked={formData.size === 'l'} onChange={handleChange} />
                                <span className="ml-2">L</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input type="radio" className="" name="size" value="xl" checked={formData.size === 'xl'} onChange={handleChange} />
                                <span className="ml-2">XL</span>
                            </label>
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="quantity" className="quantity-label">Cantidad</label>
                            <input id="quantity" min="1" className="w-13 max-w-16 h-8 p-2 rounded-md border border-gray-300 text-black" type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="mt-5 w-40 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Agregar al Carrito</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ProductoView;