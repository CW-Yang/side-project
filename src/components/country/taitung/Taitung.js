import React from 'react';

import { geoPath, geoMercator } from 'd3';

import data from './taitungData';

const Taitung = (props) => {
  const projection = geoMercator()
  .center([121.7, 23.1])
  .scale(20000);
  const path = geoPath().projection(projection);

  return (
    <svg viewBox='0 0 600 800'>
      {data.map((town) => {
        return <path key={town.properties.town_id} dataName={town.properties.town} d={path(town)} onMouseOver={props.onMouseover}></path>
      })}
    </svg>
  );
};

export default Taitung;