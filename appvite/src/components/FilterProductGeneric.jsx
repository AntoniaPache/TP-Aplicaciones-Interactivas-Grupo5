import React, { useState } from 'react';

const FilterProductGeneric = ({ onGenericChange, values, elements }) => {
  const [selectedGeneric, setSelectedGeneric] = useState('');

  const handleGenericChange = (event) => {
    const newGeneric = event.target.value;
    setSelectedGeneric(newGeneric);
    onGenericChange(newGeneric); // Llama a la función de devolución de llamada pasada como prop
  };

  return (
    <div className="my-4">
      <select 
        value={selectedGeneric} 
        onChange={handleGenericChange} 
        className="w-full p-2 border rounded-md text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value=''>Todos</option>
        {values.map((value, index) => (
          <option key={index} value={value}>{elements[index]}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterProductGeneric;


