import { Link } from "react-router-dom";

export default function CartButton() {
    return(
        <div>
            <Link to="/Carrito"><img src="src/assets/mdi_cart-outline.svg" alt="Cart" className="w-6 h-6"/></Link>
        </div>
    );
}