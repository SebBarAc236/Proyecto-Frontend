import React from 'react';

function Search1({data}) {
    return(
      <div >
          <h2>{data.id}</h2>
          <p>{data.nombre}</p>
      </div>
    );
  }
  
export default Search1;