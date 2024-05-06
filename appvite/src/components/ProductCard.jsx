import { Link } from "react-router-dom";


function ProductCard( {product} ) {
  console.log(product);
    return (
      <div className="flex flex-col text-sm">
        <div className="w-56 flex justify-center items-center">
          <img src={product.image} alt={product.name} className="w-full" />   
        </div>
        <h3>Floww Clothes</h3>
        <h3>{product.name}</h3> 
        <p className="font-semibold">{product.price}</p>

      </div>
    );
  }
  
export default ProductCard;
  