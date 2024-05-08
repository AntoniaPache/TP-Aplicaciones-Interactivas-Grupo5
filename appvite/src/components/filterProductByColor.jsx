import React, { useState } from 'react';

const FilterProductByColor = ({ onColorChange }) => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
    onColorChange(newColor); // Llama a la función de devolución de llamada pasada como prop
  };

  return (
    <div>
      <select value={selectedColor} onChange={handleColorChange}>
        <option value="">All</option>
        <option value="Negro">Negro</option>
        <option value="Blanco">Blanco</option>
        <option value="Azul">Azul</option>
        <option value="Verde">Verde</option>
        <option value="Violeta">Violeta</option>
        <option value="Gris">Gris</option>
        <option value="Rosa">Rosa</option>
      </select>
    </div>
  );
};

export default FilterProductByColor;
