import { list } from '@/extra/list';
import React, { ChangeEvent, useEffect, useState } from 'react';

function RopaFilter(props) {
    const [tipo, setTipo] = useState('todos');
    const [genero, setGenero] = useState('todos');
    const [talle, setTalle] = useState('todos');
    const [precio, setPrecio] = useState('todos');

    const handleTipoChange = (event) => {
        setTipo(event.target.value);
        props.filterByTipo(event.target.value);
    };

    const handleGeneroChange = (event) => {
        setGenero(event.target.value);
        props.filterByGenero(event.target.value);
    };

    const handleTalleChange = (event) => {
        setTalle(event.target.value);
        props.filterByTalle(event.target.value);
    };

    const handlePrecioChange = (event) => {
        setPrecio(event.target.value);
        props.filterByPrecio(event.target.value);
    };

    return (
        <div>
            <label>Tipo:</label>
            <select value={tipo} onChange={handleTipoChange}>
                <option value="todos">Todos</option>
                <option value="remera">Remera</option>
                <option value="abrigo">Abrigo</option>
                <option value="pantalon">Pantalón</option>
                <option value="pollera/short">Pollera/Short</option>
                <option value="accesorios">Accesorios</option>
            </select>

            <label>Género:</label>
            <select value={genero} onChange={handleGeneroChange}>
                <option value="todos">Todos</option>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
            </select>

            <label>Talle:</label>
            <select value={talle} onChange={handleTalleChange}>
                <option value="todos">Todos</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>

            </select>

            <label>Precio:</label>
            <select value={precio} onChange={handlePrecioChange}>
                <option value="todos">Todos</option>
                <option value="mejor-precio">Mejor Precio</option>
            </select>

            <button onClick={props.resetFilters}>Restaurar Filtros</button>
        </div>
    );
}

function RopaList() {
    const [formattedLength, setFormattedLength] = useState(list.length)
    const [ropa, setRopa] = useState(list)
    const [filteredRopa, setFilteredRopa] = useState(ropa)

    // funcion para filtrar por tipo
    const filterByTipo = (tipo) => {
        const filtered = ropa.filter((item) => tipo === 'todos' || item.tipo === tipo);
        setFilteredRopa(filtered);
    };

    // funcion para filtrar por genero
    const filterByGenero = (genero) => {
        const filtered = ropa.filter((item) => genero === 'todos' || item.genero === genero);
        setFilteredRopa(filtered);
    };

    // funcion para filtrar por talle
    const filterByTalle = (talle) => {
        const filtered = ropa.filter((item) => talle === 'todos' || item.talle === talle);
        setFilteredRopa(filtered);
    };

    // funcion para filtrar por precio
    const filterByPrecio = (precio) => {
        let filtered = [...ropa];
        if (precio === 'mejor-precio') {
            const minPrice = Math.min(...filtered.map(item => item.precio));
            filtered = filtered.filter((item) => item.precio === minPrice);
        }
        setFilteredRopa(filtered);
    };

    // funcion para restaurar filtros
    const resetFilters = () => {
        setFilteredRopa(ropa);
    };

    return (
        <div>
            <RopaFilter
                filterByTipo={filterByTipo}
                filterByGenero={filterByGenero}
                filterByTalle={filterByTalle}
                filterByPrecio={filterByPrecio}
                resetFilters={resetFilters}
            />
            <ul>
                {filteredRopa.map((item, index) => (
                    <li key={index}>{item.nombre} - Precio: {item.precio}</li>
                ))}
            </ul>
        </div>
    );
}

export default RopaList;