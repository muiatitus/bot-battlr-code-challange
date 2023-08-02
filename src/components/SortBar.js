//SortBar.js
import React from 'react';

function SortBar({ onSort }) {
  const handleSort = (event) => {
    const criteria = event.target.value;
    onSort(criteria); // Call the onSort function passed from the parent component
  };

  return (
    <div>
      <h2>Sort Bots by:</h2>
      <select onChange={handleSort}>
        <option value="">Select Criteria</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
}

export default SortBar;
