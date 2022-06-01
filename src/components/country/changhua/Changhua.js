import React from 'react';

import {geoPath, geoMercator } from 'd3';

import data from './changhuaData';

const Changhua = (props) => {
  const projection = geoMercator()
  .center([120.65, 24.1])
  .scale(60000);
  const path = geoPath().projection(projection);

  return (
    <svg viewBox='0 0 600 800'>
      {data.map((town) => {
        return <path key={town.properties.town_id} dataName={town.properties.town} d={path(town)} onMouseOver={props.onMouseover}></path>
      })}
    </svg>
  );
};

export default Changhua;