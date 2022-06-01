import React from "react";

import { geoPath, geoMercator } from "d3";

import data from './hsinchuCityData';

const HsinchuCity = (props) => {
  const projection = geoMercator()
  .center([121, 24.85])
  .scale(150000);
  const path = geoPath().projection(projection);

  return (
    <svg viewBox='0 0 600 800'>
      {data.map((town) => {
        return <path key={town.properties.town_id} dataName={town.properties.town} d={path(town)} onMouseOver={props.onMouseover}></path>
      })}
    </svg>
  );
};

export default HsinchuCity;