import ProductCard from "../components/ProductCard"
import products from "../data/remerasHombre.json"

export default function Hombre() {
    return(
        <div className="grid">
            <h1>Hombre</h1>
            <ProductCard product={products[0]}/>
        </div>
    );
}