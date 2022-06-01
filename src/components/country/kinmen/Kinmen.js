import React from 'react';

import { geoPath, geoMercator } from 'd3';

import data from './kinmenData';

const Kinmen = (props) => {
  const projection = geoMercator()
  .center([118.35, 24.5])
  .scale(90000);
  const path = geoPath().projection(projection);

  return (
    <svg viewBox='0 0 700 1000'>
      {data.map((town) => {
        return <path key={town.properties.town_id} dataName={town.properties.town} d={path(town)} onMouseOver={props.onMouseover}></path>
      })}
    </svg>
  );
};

export default Kinmen;