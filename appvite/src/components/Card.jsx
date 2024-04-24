import { Link } from "react-router-dom";

function Card({ img = "public/imagen auto.jpeg", name = "Nombre del producto", price = "Precio del producto" }) {
    return (
      <div className="w-60 rounded-20 shadow-md bg-blue-300 p-10 text-center border-1 border-black">
        <img src={img} alt="Product Image" className="w-full h-auto border-2 border-black block" />
        <Link to={name} className="block"><p className="">{name}</p></Link>
        <p className="">{price}</p>
      </div>
    );
  }
  
  export default Card;
  