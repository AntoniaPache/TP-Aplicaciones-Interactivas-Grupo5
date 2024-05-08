import ProductCard from "../components/ProductCard"
import products from "../data/products.json"
import FilterProducGeneric from "../components/FilterProductGeneric"
import { useDebugValue, useEffect, useState } from "react"
import FilterProductGeneric from "../components/FilterProductGeneric";
import { useMemo } from "react";

export default function Sale() {
    const [currentSize, setCurrentSize] = useState(null);
    const [currentColor, setCurrentColor] = useState(null);
    const [currentType, setCurrentType] = useState(null);
    const sizes = ["S", "M", "L", "XL"];
    const colors = ["Negro", "Blanco", "Azul", "Verde", "Violeta", "Rosa", "Gris"];
    const types = ["buzo", "remera", "jogger", "media", "short", "calza", "campera", "gorro", "gorra"]

    // Filtramos los productos inicialmente
    const initialFilteredProducts = useMemo(() => {
        return products.filter(product => product.discount > 0);
    }, []);

    // Estado para los productos filtrados
    const [filteredProducts, setFilteredProducts] = useState(initialFilteredProducts);

    // Cuando cambian el tamaño o el color, aplicamos filtros adicionales
    useEffect(() => {
        const filtered = initialFilteredProducts.filter(product => {
            // Si no hay filtro de tamaño o el producto tiene stock en el tamaño seleccionado
            const sizeMatch = !currentSize || (product.stock[currentSize] > 0);
            // Si no hay filtro de color o el producto tiene el color seleccionado
            const colorMatch = !currentColor || (product.color === currentColor);
            const type = !currentType || (product.type === currentType);
            return sizeMatch && colorMatch && type;
        });
        setFilteredProducts(filtered);
    }, [currentSize, currentColor,currentType ,initialFilteredProducts]);

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
                        <h1 className="text-2xl font-bold">SALE</h1>                      
                    </div>
                    <div className="my-4">       
                        <h2 className="text-2xl font-bold">Filtros</h2>
                        <h3 className="text-xl font-semibold">Talles</h3>
                        <FilterProductGeneric onGenericChange={handleSizeChange} values={sizes} elements={sizes} />
                        <h3 className="text-xl font-semibold">Color</h3>
                        <FilterProducGeneric onGenericChange={handleColorChange} values={colors} elements={colors}/>
                        <h3 className="text-xl font-semibold">Tipo</h3>
                        <FilterProducGeneric onGenericChange={handleTypeChange} values={types} elements={types}/>
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
