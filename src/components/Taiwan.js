import React from 'react';

import { geoPath, geoMercator } from 'd3';

import data from './taiwanData';

const Taiwan = (props) => {
    const projection = geoMercator()
    .center([121.7, 24.75])
    .scale(8000);
    const path = geoPath().projection(projection);

  return (
      <svg viewBox='0 0 600 800' >
        {data.map((town) => {
          return <path key={town.properties.county_id} dataName={town.properties.county} d={path(town)} onMouseOver={props.onMouseover} onClick={props.onClick}></path>
        })}
      </svg>
  )
};

export default Taiwan;
