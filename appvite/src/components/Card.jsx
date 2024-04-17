import "./Card.css"
import { Link } from "react-router-dom";

function Card({img = "public/imagen auto.jpeg", name = "Nombre del producto", price = "Precio del producto"}){

    return(

        <div className="Card">
            <img src = {img} alt = "Product Image" />
            <Link to={name}><p>{name}</p></Link>
            <p>{price}</p>
        </div>

    );
}


export default Card