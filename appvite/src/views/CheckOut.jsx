import provincias from '../data/provincias.json'
import * as React from "react"
import ProductList from '../components/ProductList';
import Products from "../data/ProductosCarrito.json"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector} from 'react-redux';
import { carritoSlice } from '../Redux/carritoSlice';


export default function CheckOut() {

    const items = useSelector((state) => state.productos.items);

    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handlePayButtonClick = (event) => {
        event.preventDefault();

        // Aquí puedes enviar los datos del formulario
        // Por ejemplo, podrías hacer una solicitud HTTP POST con axios o fetch
        console.log(formData);

        // Redirige a /checkout/pay
        navigate('/checkout/pay');
    };

    let precioFinal = 0;
    
    const productList = items.map((p) => {
        const precio = p.price;
        precioFinal += precio;
        return <ProductList product={p.item} price={p.price} cant={p.quantity} talla={p.size} />;
      });

    return (
        <div className='flex w-full justify-center flex-nowrap'>
        
        <div className="flex flex-col w-3/4 justify-center items-center">
            <h1 className="text-2xl font-bold">CheckOut</h1>
            <div className="w-3/4 flex flex-col border-1 shadow-md rounded-md px-2 my-2">
                <div className="flex flex-col justify-start items-start">
                    <h2 className='text-xl font-semibold'>Datos de contacto</h2>
                </div>
                <div className="w-full my-2 pl-2 text-xs font-semibold">
                    <label htmlFor="" className="block text-left my-4">
                        <h3 className="">Nombre</h3> 
                        <input type="text" name='name'onChange={handleInputChange} className="w-full px-6 border-2 rounded-md border-solid shadow-sm border-zinc-700 h-8" />
                    </label>
                    <label htmlFor="" className="block text-left my-4">
                        <h3 className="">Apellido </h3>
                        <input type="text" name='surname'onChange={handleInputChange} className="w-full px-6 border-2 rounded-md border-solid shadow-sm border-zinc-700 h-8" />
                    </label>
                    <label htmlFor="" className="block text-left my-4">
                        <h3>Telefono</h3>
                        <input type="text" name="phone" onChange={handleInputChange} className="w-full px-6 border-2 rounded-md border-solid shadow-sm border-zinc-700 h-8" />
                    </label>
                    <label htmlFor="" className="block text-left my-4">
                        <h3>Correo</h3> 
                        <input type="text" name="email" onChange={handleInputChange} className="w-full px-6 border-2 rounded-md border-solid shadow-sm border-zinc-700 h-8" />
                    </label>
                </div>
                
            </div>

            <div className="w-3/4 flex flex-col border-1 shadow-md rounded-md px-2 my-2">
                <div className="flex flex-col justify-start items-start">
                    <h2 className='text-xl font-semibold'>Datos de entrega</h2>
                </div>
                <div className="w-full my-2 pl-2 text-xs font-semibold">
                    <div className='block text-left my-4'>
                        <label htmlFor="" className="block text-left">Provincia</label>
                        <select name="provincia" id="provincia" onChange={handleInputChange} className="w-full">
                            <option value="">Selecciona una provincia</option>
                            {provincias.map((p, index) => (
                                <option  key={index} value={p.provincia}>{p.provincia}</option>
                            ))}
                        </select>
                    </div>
                    <div className='block text-left my-4'>
                        <label htmlFor="" className="block text-left">Localidad</label>
                        <select name="provincia" id="provincia" onChange={handleInputChange} className="w-full">
                            <option value="">Selecciona una provincia</option>
                            {provincias[0].localidades.map((localidad, index) => (
                                <option key={index} value={localidad}>{localidad    }</option>
                            ))}
                        </select>
                    </div>
                    <div className='block text-left my-4'>
                        <label htmlFor="" className="block text-left">Calle</label>
                        <input type="text" onChange={handleInputChange} className="w-full px-6 border-2 rounded-md border-solid shadow-sm border-zinc-700 h-8" />    
                    </div>            
   
                    <div className='block text-left my-4'>
                        <label htmlFor="" className="block text-left">Altura</label>
                        <input type="text" onChange={handleInputChange} className="w-full px-6 border-2 rounded-md border-solid shadow-sm border-zinc-700 h-8" />
                    </div>
                    <div className='block text-left my-4'>
                        <label htmlFor="" className="block text-left">Correo</label>
                        <input type="text" onChange={handleInputChange} className="w-full px-6 border-2 rounded-md border-solid shadow-sm border-zinc-700 h-8" />
                        
                    </div>
                </div>
                
            </div>
        </div>
        <div className='w-1/2'>
            <div className=" h-80 w-full  overflow-auto">   
                    {productList}
            </div>
            <div className='flex justify-center items-center mt-4 border-solid border-2 rounded-sm border-black'>
                <h2 className='font-bold text-xl'>Total: ${precioFinal}</h2>
            </div>
            <div className='flex justify-center items-center mt-4'>
                <button onClick={handlePayButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Pagar</button>
            </div>
        </div>

        </div>
    )
}