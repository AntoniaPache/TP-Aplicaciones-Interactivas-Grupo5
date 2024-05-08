import { list } from './list';
import React, { useState } from 'react';

function RopaFilter(props) {
    const [tipo, setTipo] = useState('todos');
    const [genero, setGenero] = useState('todos');
    const [talle, setTalle] = useState('todos');
    const [precio, setPrecio] = useState('todos');

    const handleTipoChange = (event) => {
        const tipoValue = event.target.value;
        setTipo(tipoValue);
        props.filterItems({ tipo: tipoValue, genero, talle, precio });
    };
    
    const handleGeneroChange = (event) => {
        const generoValue = event.target.value;
        setGenero(generoValue);
        props.filterItems({ tipo, genero: generoValue, talle, precio });
    };
    
    const handleTalleChange = (event) => {
        const talleValue = event.target.value;
        setTalle(talleValue);
        props.filterItems({ tipo, genero, talle: talleValue, precio });
    };
    
    const handlePrecioChange = (event) => {
        const precioValue = event.target.value;
        setPrecio(precioValue);
        props.filterItems({ tipo, genero, talle, precio: precioValue });
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
    const [filteredRopa, setFilteredRopa] = useState(list);

    const filterItems = ({ tipo, genero, talle, precio }) => {
        var filtered = [...list]

        if (tipo !== 'todos') {
            filtered = filtered.filter(item => item.tipo === tipo);
        }
      
        if (genero !== 'todos') {
            filtered = filtered.filter(item => item.genero === genero);
        }
      
        if (talle !== 'todos') {
            filtered = filtered.filter(item => item.talle === talle);
        }

        if (precio === 'mejor-precio') {
            const minPrice = Math.min(...list.map(item => item.precio));
            filtered = filtered.filter(item => item.precio === minPrice);
        }

        setFilteredRopa(filtered);
    };

    const resetFilters = () => {
        setFilteredRopa(list);
    };

    return (
        <div>
            <RopaFilter filterItems={filterItems} resetFilters={resetFilters} />
            <ul>
                {filteredRopa.map((item, index) => (
                    <li key={index}>{item.nombre} - Precio: {item.precio}</li>
                ))}
            </ul>
        </div>
    );
}

export default RopaList;
