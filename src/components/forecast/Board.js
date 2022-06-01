import React, { useState } from 'react';

import classes from './Board.module.css';

import Context from './Context';

const Board = (props) => {
  let weather;
  let rainy;
  let MinT;
  let MaxT;
  let feeling;

  if (!props.townData) {
    weather = props.countryData.weatherElement[0].time.map((element) => {
      return element.parameter.parameterName;
    });
  
    rainy = props.countryData.weatherElement[1].time.map((element) => {
      return element.parameter.parameterName;
    });
  
    MinT = props.countryData.weatherElement[2].time.map((element) => {
      return element.parameter.parameterName;
    });
  
    feeling = props.countryData.weatherElement[3].time.map((element) => {
      return element.parameter.parameterName;
    });
  
    MaxT = props.countryData.weatherElement[4].time.map((element) => {
      return element.parameter.parameterName;
    });
  } else {
    weather = props.townData[2].time.map((element, index) => {
      if (index % 2 === 0 && index < 6) {
        return element.elementValue[0].value;
      };
    });
    weather = weather.filter((element) => {
      if (element !== undefined) {
        return element;
      }
    })
    rainy = props.townData[0].time.map((element, index) => {
      if (index % 2 === 0 && index < 6) {
        return element.elementValue[0].value;
      };
    });
    rainy = rainy.filter((element) => {
      if (element !== undefined) {
        return element;
      }
    })
    feeling = props.townData[1].time.map((element, index) => {
      if (index % 2 === 0 && index < 6) {
        return element.elementValue[1].value;
      };
    });
    feeling = feeling.filter((element) => {
      if (element !== undefined) {
        return element;
      }
    })
    MinT = props.townData[3].time.map((element, index) => {
      if (index % 2 === 0 && index < 6) {
        return element.elementValue[0].value;
      };
    });
    MinT = MinT.filter((element) => {
      if (element !== undefined) {
        return element;
      }
    })
    MaxT = props.townData[4].time.map((element, index) => {
      if (index % 2 === 0 && index < 6) {
        return element.elementValue[0].value;
      };
    });
    MaxT = MaxT.filter((element) => {
      if (element !== undefined) {
        return element;
      }
    })
  }

  return (
    <div className={classes.board}>
      <label>{props.country}</label>
      <span>{props.town}</span>
      
      
      <Context weather={weather[0]} rainy={rainy[0]} feeling={feeling[0]} minT={MinT[0]} maxT={MaxT[0]} date='今天'/>
      <Context weather={weather[1]} rainy={rainy[1]} feeling={feeling[1]} minT={MinT[1]} maxT={MaxT[1]} date='明天'/>
      <Context weather={weather[2]} rainy={rainy[2]} feeling={feeling[2]} minT={MinT[2]} maxT={MaxT[2]} date='後天'/>
    </div>
  );
};

export default Board;