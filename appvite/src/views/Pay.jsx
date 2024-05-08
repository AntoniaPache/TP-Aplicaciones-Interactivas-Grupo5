import { useState } from "react";

export default function Pay() {
    const [payed, setPayed] = useState(false);
    const handleButtonClick = () => {
        setPayed(!payed);
    };

    return (
        <div className="flex flex-col w-3/4 justify-center items-center">
            <div className="flex flex-col w-3/4 justify-center items-center">
                <h1 className="text-2xl font-bold">Pagar</h1>
                <div className="w-3/4 flex flex-col border-1 shadow-md rounded-md px-2 my-2">
                    <div className="flex flex-col justify-start items-start">
                        <h2 className='text-xl font-semibold'>Datos de la tarjeta</h2>
                    </div>
                    <div className="w-full my-2 pl-2 text-xs font-semibold">
                    <div className='block text-left my-4'>
                            <label htmlFor="" className="block text-left">Tipo de tarjeta</label>
                            <select name="provincia" id="provincia"  className="w-full">
                                <option value="Credito">Credito</option>
                                <option value="Debito">Debito</option>
                            </select>
                        </div>
                        <label htmlFor="" className="block text-left my-4">
                            <h3 className="">Numero</h3> 
                            <input type="number" name='name' className="w-full px-6 border-2 rounded-md border-solid shadow-sm border-zinc-700 h-8" />
                        </label>
                        <label htmlFor="" className="block text-left my-4">
                            <h3 className="">Nombre del titular</h3>
                            <input type="text" name='surname' className="w-full px-6 border-2 rounded-md border-solid shadow-sm border-zinc-700 h-8" />
                        </label>
                        <label htmlFor="" className="block text-left my-4">
                            <h3>Fecha de caducidad</h3>
                            <input type="text" name="phone"  placeholder="Mes" className="w-full px-6 border-2 rounded-md border-solid shadow-sm border-zinc-700 h-8" />
                            <input type="text" name="phone"  placeholder="Año"className="w-full px-6 border-2 rounded-md border-solid shadow-sm border-zinc-700 h-8" />
                        </label>
                        <label htmlFor="" className="block text-left my-4">
                            <h3>Codigo de seguridad</h3> 
                            <input type="number" name="email"  className="w-full px-6 border-2 rounded-md border-solid shadow-sm border-zinc-700 h-8" />
                        </label>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mt-4'>
                <button onClick={handleButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Finalizar</button>
            </div>
            {payed ? (<h2 className='font-bold text-2xl bg-green-800 my-4'>Pago exitoso!</h2>) : null}
        </div>
    )
}