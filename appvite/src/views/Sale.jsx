import ProductCard from "../components/ProductCard"
import products from "../data/products.json"
import FilterProducGeneric from "../components/FilterProductGeneric"
import { useDebugValue, useEffect, useState } from "react"
import FilterProductGeneric from "../components/FilterProductGeneric";
import { useMemo } from "react";
import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Sale() {

    const [productos, setProductos] = useState([]);

    // useEffect para obtener los productos una vez al cargar el componente
    useEffect(() => {
        axios.get('http://localhost:4002/productos')
            .then(response => {
                setProductos(response.data);
                console.log(response.data); // Aquí obtienes los datos de los productos
            })
            .catch(error => {
                console.error('Error al obtener productos', error);
            });
    }, []); // El array vacío [] como segundo argumento asegura que se ejecute solo una vez

    const [currentSize, setCurrentSize] = useState(null);
    const [currentColor, setCurrentColor] = useState(null);
    const [currentType, setCurrentType] = useState(null);

    const sizes = ["s", "m", "l", "xl"];
    const colors = ["Negro", "Blanco", "Azul", "Verde", "Violeta", "Rosa", "Gris"];
    const types = ["buzo", "remera", "jogger", "media", "short", "calza", "campera", "gorro", "gorra"]

    const searchTerm = useSelector((state) => state.busqueda.searchTerm);

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Filtrar productos basado en los filtros seleccionados y la búsqueda
        const filteredProducts = productos.filter(product => {
            const discountMatch = product.discount > 0;
            const sizeStock = product[`stock_${currentSize}`]; // Obtener el stock del tamaño actual
            const sizeMatch = !currentSize || (sizeStock > 0); // Filtrar si el stock del tamaño actual es mayor que cero
            const colorMatch = !currentColor || (product.color === currentColor);
            const typeMatch = !currentType || (product.type === currentType);
            const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            return discountMatch && sizeMatch && colorMatch && typeMatch && nameMatch;
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
            <div className="flex space-x-6">
                <div className="w-1/5 bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold">Sale</h1>
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
        </div>
    );
}
