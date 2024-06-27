import ProductCard from "../components/ProductCard"
import products from "../data/products.json"
import FilterProducGeneric from "../components/FilterProductGeneric"
import { useDebugValue, useEffect, useState } from "react"
import FilterProductGeneric from "../components/FilterProductGeneric";
import { useMemo } from "react";
import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";

export default function Mujer() {
    const [currentSize, setCurrentSize] = useState(null);
    const [currentColor, setCurrentColor] = useState(null);
    const [currentType, setCurrentType] = useState(null);

    const sizes = ["S", "M", "L", "XL"];
    const colors = ["Negro", "Blanco", "Azul", "Verde", "Violeta", "Rosa", "Gris"];
    const types = ["buzo", "remera", "jogger", "short", "calza", "campera"]

    const searchTerm = useSelector((state) => state.busqueda.searchTerm);

    // Filtramos los productos inicialmente
    const initialFilteredProducts = useMemo(() => {
        return products.filter(product => product.gender === "mujer");
    }, []);

    // Estado para los productos filtrados
    const [filteredProducts, setFilteredProducts] = useState(initialFilteredProducts);

    useEffect(() => {
        const filtered = initialFilteredProducts.filter(product => {
            const sizeMatch = !currentSize || (product.stock[currentSize] > 0);
            const colorMatch = !currentColor || (product.color === currentColor);
            const typeMatch = !currentType || (product.type === currentType);
            const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            return sizeMatch && colorMatch && typeMatch && nameMatch;
        });
        setFilteredProducts(filtered);
    }, [currentSize, currentColor, currentType, searchTerm, initialFilteredProducts]);

    const handleSizeChange = (newSize) => {
        setCurrentSize(newSize);
    };

    const handleColorChange = (newColor) => {
        setCurrentColor(newColor);
    };

    const handleTypeChange = (newType) => {
        setCurrentType(newType);
    };

    return(
        <div>
            <div>
                {/*<img src="./src/assets/image.png" alt="portada" className="w-full"/>*/}
            </div>
            <div className="flex space-x-2 flex-wrap">
                <div className="w-[18%] ml-4">
                    <div className="my-4">
                        <h1 className="text-2xl font-bold">Mujeres</h1>               
                    </div>
                    <div className="my-4">       
                        <h2 className="text-2xl font-bold">Filtros</h2>
                        <h3 className="text-xl font-semibold">Tipo</h3>
                        <FilterProducGeneric onGenericChange={handleTypeChange} values={types} elements={types} />
                        <h3 className="text-xl font-semibold">Talles</h3>
                        <FilterProductGeneric onGenericChange={handleSizeChange} values={sizes} elements={sizes} />
                        <h3 className="text-xl font-semibold">Color</h3>
                        <FilterProducGeneric onGenericChange={handleColorChange} values={colors} elements={colors}/>
                        <h3 className="text-xl font-semibold">Nombre</h3>
                        <SearchBar/>
                    </div>

                </div>
                <div className="grid grid-cols-4 gap-4 w-[80%]  ">
                {filteredProducts.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
                {console.log(filteredProducts)}
                </div>
            </div>  

        </div>

    );
}
