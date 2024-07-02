import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="flex justify-between items-start h-40 my-4 bg-[#332D2C] text-white">
            <div className="flex-1 my-2 ml-4 w-1/3">
                <h3 className="font-normal">NAVEGACION</h3>
                <div className="flex-col  space-y-1 text-xs font-thin">
                    <div><NavLink to="/" exact className="h-auto">HOME</NavLink></div>
                    <div><NavLink to="/hombre" exact className="h-auto">HOMBRE</NavLink></div>
                    <div><NavLink to="/mujer" exact className="h-auto">MUJER</NavLink></div>
                    <div><NavLink to="/unisex" exact className="h-auto">UNISEX</NavLink></div>
                    <div><NavLink to="/sale" exact className="h-auto">SALE</NavLink></div>
                </div>
            </div>
            <div className="flex-1 my-2 w-1/3">
                <div className="mb-2">
                    <h3>MEDIOS DE PAGO</h3>
                    <div className="flex space-x-2">
                        <img src="src/assets/visa.svg" alt="Visa" className="w-6 h-6"/>
                        <img src="src/assets/mastercard.svg" alt="Mastercard" className="w-6 h-6"/>
                        <img src="src/assets/mercadopago.svg" alt="Mercadopago" className="w-6 h-6"/>
                        <img src="src/assets/cash.svg" alt="Cash" className="w-6 h-6"/>
                    </div>
                </div>
                <div className="">
                    <h3>ENVIOS</h3>
                    <div>
                        <img src="src/assets/dhl.svg" alt="DHL" className="w-10 my-0 h-10"/>
                    </div>
                </div>
            </div>
            <div className="flex-1 my-2 w-1/3">
                <h3>CONTACTO</h3>
                <div>
                    <div className="flex items-center text-sm font-light">
                        <img src="src/assets/phone.svg" alt="Phone" className="w-6 h-6 mr-1"/>
                        <p>+54 9 11 1234-5678</p>
                    </div>
                    <div className="flex items-center text-sm">
                        <img src="src/assets/mail.svg" alt="Mail" className="w-6 h-6 mr-1"/><p>contacto@flowwclothes.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}