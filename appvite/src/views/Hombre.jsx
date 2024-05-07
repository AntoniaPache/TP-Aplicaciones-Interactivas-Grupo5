import ProductCard from "../components/ProductCard"
import products from "../data/remerasHombre.json"

export default function Hombre() {
    return(
        <div className="grid grid-cols-4 gap-4 w-3/4  ">
            {products.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    );
}