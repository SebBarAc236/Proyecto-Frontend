import React from 'react';
import Search1 from './search1';

function SearchList({ filtro }) {
  const filtered = filtro.map(data =>  <Search1 key={data.id} data={data} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;