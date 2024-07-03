import { useState } from "react";

export default function Pay() {
    const items = useSelector((state) => state.productos.items);
    const [payed, setPayed] = useState(false);
    const [formData, setFormData] = useState({
        cardType: "",
        cardNumber: "",
        cardHolderName: "",
        expiryMonth: "",
        expiryYear: "",
        securityCode: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleButtonClick = () => {
        // Validación simple de campos requeridos
        if (
            formData.cardType &&
            formData.cardNumber &&
            formData.cardHolderName &&
            formData.expiryMonth &&
            formData.expiryYear &&
            formData.securityCode
        ) {
            setPayed(true);
        } else {
            setPayed(false);
            alert("Completa todos los campos antes de finalizar el pago.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4">Pagar</h1>
                <div className="mb-4">
                    <h2 className='text-xl font-semibold'>Datos de la tarjeta</h2>
                    <div className="mt-2">
                        <label htmlFor="cardType" className="block text-sm font-medium text-gray-700 mb-1">Tipo de tarjeta</label>
                        <select name="cardType" id="cardType" onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md text-sm text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Selecciona tipo</option>
                            <option value="Credito">Crédito</option>
                            <option value="Debito">Débito</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Número de tarjeta</label>
                            <input type="text" name="cardNumber" onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md text-sm text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div>
                            <label htmlFor="cardHolderName" className="block text-sm font-medium text-gray-700 mb-1">Nombre del titular</label>
                            <input type="text" name="cardHolderName" onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md text-sm text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label htmlFor="expiryMonth" className="block text-sm font-medium text-gray-700 mb-1">Fecha de caducidad (MM/YY)</label>
                            <div className="flex">
                                <input type="text" name="expiryMonth" placeholder="MM" onChange={handleInputChange} className="w-16 px-3 py-2 border rounded-md text-sm text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                <input type="text" name="expiryYear" placeholder="YY" onChange={handleInputChange} className="w-16 px-3 py-2 border rounded-md text-sm text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2" required />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="securityCode" className="block text-sm font-medium text-gray-700 mb-1">Código de seguridad</label>
                            <input type="text" name="securityCode" onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md text-sm text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-6'>
                    <button onClick={handleButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">Finalizar</button>
                </div>
                {payed ? (<h2 className='text-green-800 text-lg font-semibold mt-4'>¡Pago exitoso!</h2>) : null}
            </div>
        </div>
    );
}
