import React from 'react';

import { geoPath, geoMercator } from 'd3';

import data from './lianjiangData';

const Lianjiang = (props) => {
  const projection = geoMercator()
  .center([120.3, 26.35])
  .scale(50000);
  const path = geoPath().projection(projection);

  return (
    <svg viewBox='0 0 1000 1000'>
      {data.map((town) => {
        return <path key={town.properties.town_id} dataName={town.properties.town} d={path(town)} onMouseOver={props.onMouseover}></path>
      })}
    </svg>
    
  );
};

export default Lianjiang;