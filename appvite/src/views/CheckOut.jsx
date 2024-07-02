import React, { useState } from 'react';
import provincias from '../data/provincias.json';
import ProductList from '../components/ProductList';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CheckOut() {
    const items = useSelector((state) => state.productos.items);
    const [formData, setFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
    let precioFinal = 0;

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handlePayButtonClick = (event) => {
        event.preventDefault();

        // Validación simple de campos requeridos
        const errors = {};
        if (!formData.name) {
            errors.name = 'El nombre es requerido';
        }
        if (!formData.surname) {
            errors.surname = 'El apellido es requerido';
        }
        if (!formData.phone) {
            errors.phone = 'El teléfono es requerido';
        }
        if (!formData.email) {
            errors.email = 'El correo es requerido';
        }
        if (!formData.provincia) {
            errors.provincia = 'Selecciona una provincia';
        }
        if (!formData.localidad) {
            errors.localidad = 'Selecciona una localidad';
        }
        if (!formData.calle) {
            errors.calle = 'La calle es requerida';
        }
        if (!formData.altura) {
            errors.altura = 'La altura es requerida';
        }
        setFormErrors(errors);

    // Si no hay errores, procede con el pago
    if (Object.keys([]).length === 0) { //CAMBIAR ESTO AL FINAL
        console.log('Datos de pago enviados:', formData);
        var isStock = true;

        // Crear una lista de promesas para las peticiones de stock
        const stockChecks = items.map((p) => {
            console.log(p);
            const url = 'http://localhost:4002/productos/' + p.item.id + '/checkStock/' + p.size;
            return axios.get(url)
                .then(function (response) {
                    if (Number(response.data) < p.quantity) {
                        alert('No hay stock suficiente de ' + p.item.name + ' en talla ' + p.size + ' para realizar la compra');
                        isStock = false;
                    }
                })
                .catch(function (error) {
                    console.error('Error al verificar el stock de ' + p.item.name + ':', error);
                    isStock = false;
                });
        });

        // Esperar a que todas las promesas se resuelvan
        Promise.all(stockChecks).then(() => {
            if (isStock) {
                const removeStockPromises = items.map((p) => {
                    const url = 'http://localhost:4002/productos/reduceStock/' + p.item.id + '/' + p.size + '/' + p.quantity;
                    return axios.post(url)
                        .catch(function (error) {
                            console.error('Error al reducir el stock de ' + p.item.name + ':', error);
                        }); 
                });

                // Esperar a que todas las peticiones de reducción de stock se resuelvan antes de redirigir
                Promise.all(removeStockPromises).then(() => {
                    navigate('/checkout/pay');
                });
            }
        });

    } else {
        console.log('Corrige los errores antes de pagar');
    }

}


    const productList = items.map((p) => {
        const precio = (p.item.price - p.item.price * (p.item.discount / 100)) * p.quantity;
        precioFinal += precio;
        return <ProductList key={p.item.id} product={p.item} price={p.price} cant={p.quantity} talla={p.size} />;
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
                        <label htmlFor="name" className="block text-left my-4">
                            <h3>Nombre</h3>
                            <input type="text" name='name' onChange={handleInputChange} required className="w-full px-6 border-2 rounded-md border-solid shadow-sm border-zinc-700 h-8" />
                            {formErrors.name && <span className="text-red-600">{formErrors.name}</span>}
                        </label>
                        <label htmlFor="surname" className="block text-left my-4">
                            <h3>Apellido</h3>
                            <input type="text" name='surname' onChange={handleInputChange} required className="w-full px-6 border-2 rounded-md border-solid shadow-sm border-zinc-700 h-8" />
                            {formErrors.surname && <span className="text-red-600">{formErrors.surname}</span>}
                        </label>
                        <label htmlFor="phone" className="block text-left my-4">
                            <h3>Telefono</h3>
                            <input type="text" name="phone" onChange={handleInputChange} required className="w-full px-6 border-2 rounded-md border-solid shadow-sm border-zinc-700 h-8" />
                            {formErrors.phone && <span className="text-red-600">{formErrors.phone}</span>}
                        </label>
                        <label htmlFor="email" className="block text-left my-4">
                            <h3>Correo</h3>
                            <input type="text" name="email" onChange={handleInputChange} required className="w-full px-6 border-2 rounded-md border-solid shadow-sm border-zinc-700 h-8" />
                            {formErrors.email && <span className="text-red-600">{formErrors.email}</span>}
                        </label>
                    </div>
                </div>

                <div className="w-3/4 flex flex-col border-1 shadow-md rounded-md px-2 my-2">
                    <div className="flex flex-col justify-start items-start">
                        <h2 className='text-xl font-semibold'>Datos de entrega</h2>
                    </div>
                    <div className="w-full my-2 pl-2 text-xs font-semibold">
                        <div className='block text-left my-4'>
                            <label htmlFor="provincia" className="block text-left">Provincia</label>
                            <select name="provincia" id="provincia" onChange={handleInputChange} className="w-full">
                                <option value="">Selecciona una provincia</option>
                                {provincias.map((p, index) => (
                                    <option key={index} value={p.provincia}>{p.provincia}</option>
                                ))}
                            </select>
                            {formErrors.provincia && <span className="text-red-600">{formErrors.provincia}</span>}
                        </div>
                        <div className='block text-left my-4'>
                            <label htmlFor="localidad" className="block text-left">Localidad</label>
                            <select name="localidad" id="localidad" onChange={handleInputChange} className="w-full">
                                <option value="">Selecciona una localidad</option>
                                {formData.provincia &&
                                    provincias.find((p) => p.provincia === formData.provincia)?.localidades.map((localidad, index) => (
                                        <option key={index} value={localidad}>{localidad}</option>
                                    ))}
                            </select>
                            {formErrors.localidad && <span className="text-red-600">{formErrors.localidad}</span>}
                        </div>
                        <div className='block text-left my-4'>
                            <label htmlFor="calle" className="block text-left">Calle</label>
                            <input type="text" name="calle" onChange={handleInputChange} className="w-full px-6 border-2 rounded-md border-solid shadow-sm border-zinc-700 h-8" />
                            {formErrors.calle && <span className="text-red-600">{formErrors.calle}</span>}
                        </div>
                        <div className='block text-left my-4'>
                            <label htmlFor="altura" className="block text-left">Altura</label>
                            <input type="text" name="altura" onChange={handleInputChange} className="w-full px-6 border-2 rounded-md border-solid shadow-sm border-zinc-700 h-8" />
                            {formErrors.altura && <span className="text-red-600">{formErrors.altura}</span>}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <div className=" h-80 w-full  overflow-auto">
                    {productList}
                </div>
                <div className='flex justify-center items-center mt-4 border-solid border-2 rounded-sm border-black'>
                    <h2 className='font-bold text-xl'>Total: ${precioFinal.toFixed(2)}</h2>
                </div>
                <div className='flex justify-center items-center mt-4'>
                    <button onClick={handlePayButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Pagar</button>
                </div>
            </div>
        </div>
    );
}
