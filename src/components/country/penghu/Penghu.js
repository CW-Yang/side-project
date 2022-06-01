import React from 'react';

import { geoPath, geoMercator } from 'd3';

import data from "./penghuData";

const Penghu = (props) => {
  const projection = geoMercator()
  .center([119.7, 23.6])
  .scale(55000);
  const path = geoPath().projection(projection);

  return (
    <svg viewBox='0 0 600 800'>
      {data.map((town) => {
        return <path key={town.properties.town_id} dataName={town.properties.town} d={path(town)} onMouseOver={props.onMouseover}></path>
      })}
    </svg>
  );
};

export default Penghu;