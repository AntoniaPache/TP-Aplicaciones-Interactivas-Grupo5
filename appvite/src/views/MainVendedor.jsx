import ProductCard from "../components/ProductCard"
import FilterProducGeneric from "../components/FilterProductGeneric"
import { useDebugValue, useEffect, useState } from "react"
import { useMemo } from "react";
import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";
import axios from "axios";
import Unauthorized from "./Unauthorized";

export default function MainVendedor() {

    const productos = useSelector((state) => state.catalogo.items); // Usa la clave "catalogo"
    const [currentSize, setCurrentSize] = useState(null);
    const [currentColor, setCurrentColor] = useState(null);
    const [currentType, setCurrentType] = useState(null);

    const sizes = ["s", "m", "l", "xl"];
    const colors = ["Negro", "Blanco", "Azul", "Verde", "Violeta", "Rosa", "Gris"];
    const types = ["Buzo", "Remera", "Jogger", "Media", "Short", "Calza", "Campera", "Gorro", "Gorra"]

    const searchTerm = useSelector((state) => state.busqueda.searchTerm);

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Filtrar productos basado en los filtros seleccionados y la búsqueda
        const filteredProducts = productos.filter(product => {
            const sizeStock = product[`stock_${currentSize}`]; // Obtener el stock del tamaño actual
            const sizeMatch = !currentSize || (sizeStock > 0); // Filtrar si el stock del tamaño actual es mayor que cero
            const colorMatch = !currentColor || (product.color === currentColor);
            const typeMatch = !currentType || (product.type === currentType);
            const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            return sizeMatch && colorMatch && typeMatch && nameMatch;
        });
        setFilteredProducts(filteredProducts);
    }, [productos, currentSize, currentColor, currentType, searchTerm]);

    const handleSizeChange = (newSize) => {
        setCurrentSize(newSize);
    };

    const handleColorChange = (newColor) => {
        setCurrentColor(newColor);
    };

    const handleTypeChange = (newType) => {
        setCurrentType(newType);
    };
        return (
            <div className="bg-gray-100 min-h-screen p-6">
                {localStorage.getItem("role") !== "GERENTE" || localStorage.getItem("token") == null  ? <Unauthorized/> : (
                <>
                <div className="flex space-x-6">
                    <div className="w-1/5 bg-white p-6 rounded-lg shadow-md">
                        <div className="mb-6">
                            <h1 className="text-3xl font-bold">GERENTE</h1>
                        </div>
                        <div className="mb-6">
                        <div className="mb-4">
                                <h3 className="text-xl font-semibold mb-2">Nombre</h3>
                                <SearchBar />
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold mb-2">Tipo</h3>
                                <FilterProducGeneric onGenericChange={handleTypeChange} values={types} elements={types} />
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold mb-2">Talles</h3>
                                <FilterProducGeneric onGenericChange={handleSizeChange} values={sizes} elements={sizes} />
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold mb-2">Color</h3>
                                <FilterProducGeneric onGenericChange={handleColorChange} values={colors} elements={colors} />
                            </div>
                        </div>
                    </div>
                    <div className="w-4/5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {filteredProducts.map((product) => (
                                <ProductCard product={product} key={product.id} />
                            ))}
                        </div>
                    </div>
                </div>
                </>)}
            </div>
        );

}