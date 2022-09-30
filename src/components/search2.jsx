import React from 'react';

function SearchList({ filtro }) {
  const filtered = filtro.map(data =>  ["Ratón", "Teclado", "Monitor", "Audífonos"]); 
  return (
    <div>
      {
        filtered
      }
    </div>
  );
}

export default SearchList;