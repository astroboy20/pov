import React from 'react';
import Image from "next/image"

const FilterOptions = ({ filters, onFilterSelected }) => {
    console.log(filters)
  return (
    <div>
      <h2>Filter Option</h2>
      <ul>
        
          <li>
            <Image
              src={filters}
              alt={filters}
              onClick={() => onFilterSelected(filters)}
              width={100}
              height={100}
            />
          </li>
       
      </ul>
    </div>
  );
};

export default FilterOptions;