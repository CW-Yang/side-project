import React from 'react';

import { geoMercator, geoPath } from 'd3';

import data from './ylanData';

const Ylan = (props) => {
  const projection = geoMercator()
  .center([121.85, 24.8])
  .scale(40000);
  const path = geoPath().projection(projection);

  return (
    <svg viewBox='0 0 600 800'>
      {data.map((town) => {
        return <path key={town.properties.town_id} dataName={town.properties.town} d={path(town)} onMouseOver={props.onMouseover}></path>
      })}
    </svg>
    
  );
};

export default Ylan;

