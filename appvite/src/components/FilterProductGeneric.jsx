import React, { useState } from 'react';

const FilterProductGeneric = ({ onGenericChange, values, elements }) => {
  const [selectedGeneric, setSelectedGeneric] = useState(null);

  const handleGenericChange = (event) => {
    const newGeneric = event.target.value;
    setSelectedGeneric(newGeneric);
    onGenericChange(newGeneric); // Llama a la función de devolución de llamada pasada como prop
  };

  return (
    <div>
      <select value={selectedGeneric} onChange={handleGenericChange}>
        <option value={null}>All</option>
        {values.map((value, index) => (
          <option key={index} value={value}>{elements[index]}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterProductGeneric;
