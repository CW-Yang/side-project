import React, { useState, useEffect } from 'react';

import Board from './components/forecast/Board';
import Map from './components/map/Map';
import Button from './components/Button';

import Taiwan from './components/Taiwan';
import Area from './components/country/Area';

import dataId from './components/store/dataId';

const App = () => {
  const apiKey = 'CWB-7B5391D0-EEFC-4092-8F82-45F32A66F3EC';
  const [country, setCountry] = useState('');
  const [clickedCountry, setClickedCountry] = useState('');
  const [town, setTown] = useState('');
  const [countriesData, setCountriesData] = useState([]);
  const [countrieswheatherData, setWheatherData] = useState([]);
  const [townsWeatherData, setTownsWeatherData] = useState([]);

  useEffect(async () => {
    const response = await fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/${dataId['臺灣']}?Authorization=${apiKey}`);
    const result = await response.json();
    setCountriesData(result.records.location)
  }, [])

  const chooseCountryHandler = (event) => {
    const currentCountry = event.target.getAttribute('dataName');
    setCountry(currentCountry);

    const data = countriesData.filter((country) => {
      if (country.locationName === currentCountry) {
        return country;
      }
    });
    setWheatherData(data);
  };

  const fetchTownWeatherData = async (country, town) => {
    const response = await fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/${dataId[`${country}`]}?Authorization=${apiKey}&locationName=${town}`);
    const result = await response.json();
    
    const data = result.records.locations[0].location[0].weatherElement.filter((element) => {
      if (element.elementName === 'PoP12h') {
        return element;
      }
      if (element.elementName === 'MinT') {
        return element;
      }
      if (element.elementName === 'MaxT') {
        return element;
      }
      if (element.elementName === 'Wx') {
        return element;
      }
      if (element.elementName === 'MinCI') {
        return element
      }
    });
    setTownsWeatherData(data);
  };

  const clickedCountryHandler = (event) => {
    const currentCountry = event.target.getAttribute('dataName');
    setClickedCountry(currentCountry);
  };

  const clickedPrevHandler = () => {
    setClickedCountry('');
    setTown('');
    setTownsWeatherData([]);
  }

  const chooseTownHandler = (event) => {
    const currentTown = event.target.getAttribute('dataName');
    setTown(currentTown);
    fetchTownWeatherData(country, currentTown);
  };

  return (
    <React.Fragment>
      <Map>
        {!clickedCountry && <Taiwan onMouseover={chooseCountryHandler} onClick={clickedCountryHandler}/>}
        {clickedCountry && <Area onMouseover={chooseTownHandler} town={clickedCountry}/>}
      </Map>
      {countrieswheatherData.length > 0 && townsWeatherData.length < 1 && <Board country={country} town={town} countryData={countrieswheatherData[0]}/>}
      {townsWeatherData.length > 0 && <Board country={country} town={town} townData={townsWeatherData}/>}
      {clickedCountry && <Button onClick={clickedPrevHandler}/>}
    </React.Fragment>
  );
};

export default App;
