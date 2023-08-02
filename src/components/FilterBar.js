//FilterBar.js
import React from 'react';

function FilterBar({ onFilter }) {
  const handleFilter = (event) => {
    const botClass = event.target.value;
    onFilter(botClass); // Call the onFilter function passed from the parent component
  };

  return (
    <div>
      <h2>Filter Bots by Class:</h2>
      <select onChange={handleFilter}>
        <option value="all">All</option>
        <option value="Support">Support</option>
        <option value="Medic">Medic</option>
        <option value="Assault">Assault</option>
        <option value="Defender">Defender</option>
        <option value="Captain">Captain</option>
        <option value="Witch">Witch</option>
      </select>
    </div>
  );
}

export default FilterBar;
