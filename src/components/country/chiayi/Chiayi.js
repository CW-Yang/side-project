import React from 'react';

import { geoPath, geoMercator } from 'd3';

import data from './chiayiData';

const Chiayi = (props) => {
  const projection = geoMercator()
  .center([120.75, 23.6])
  .scale(38000);
  const path = geoPath().projection(projection);

  return (
    <svg viewBox='0 0 700 800'>
      {data.map((town) => {
        return <path key={town.properties.Town_ID} dataName={town.properties.T_Name} d={path(town)} onMouseOver={props.onMouseover}></path>
      })}
    </svg>
  );
};

export default Chiayi;