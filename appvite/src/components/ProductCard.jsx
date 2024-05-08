import { Link } from "react-router-dom";


function ProductCard( {product} ) {
    return (
      <div className="flex w-full flex-col text-sm">
        <Link to={product.name}>
        
        <div className="flex w-full justify-center items-cente">
          <img src={product.image} alt={product.name} className="w-full" />   
        </div>
        <div className="">
          <h3>Floww Clothes</h3>
        </div>
        
        <h3 className="font-semibold">{product.name.toLowerCase()}</h3> 
        <p>{product.price}</p>
        {product.discount > 0 && <p>Descuento {product.discount}%</p>}
        </Link>
      </div>
    );
  }
  
export default ProductCard;
  