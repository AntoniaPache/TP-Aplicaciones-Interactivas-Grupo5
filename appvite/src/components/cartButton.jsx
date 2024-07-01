import { Link } from "react-router-dom";

const iSingedin = localStorage.getItem('token') !== null;

export default function CartButton() {
    return(

        iSingedin ? (

        <div>
            <Link to="/Carrito"><img src="src/assets/mdi_cart-outline.svg" alt="Cart" className="w-6 h-6"/></Link>
        </div>

        ):
        
        (

        <div>
            <Link to="/login"><img src="src/assets/mdi_cart-outline.svg" alt="Cart" className="w-6 h-6"/></Link>
        </div>
        
        )
    );
}