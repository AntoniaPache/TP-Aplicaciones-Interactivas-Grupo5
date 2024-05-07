import { Link } from "react-router-dom";


function ProductCard( {product} ) {
  console.log(product);
    return (
      <div className="flex w-full flex-col text-sm">
        <div className="flex w-full justify-center items-cente">
          <img src={product.image} alt={product.name} className="w-full" />   
        </div>
        <div className="">
          <h3>Floww Clothes</h3>
        </div>
        
        <h3 className="font-semibold">{product.name.toLowerCase()}</h3> 
        <p>{product.price}</p>

      </div>
    );
  }
  
export default ProductCard;
  