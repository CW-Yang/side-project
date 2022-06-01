import React from 'react';

import classes from './Context.module.css';

const Context  = (props) => {
  return (
    <React.Fragment>
      <div className={classes.control}>
        <label>{props.date}</label>
        <div className={classes.tempature}>{props.minT} - {props.maxT} ℃</div>
        <div className={classes.rain}>{props.rainy} %</div>
        <div className={classes.description}>
          <div>{props.weather}</div>
          <div>{props.feeling}</div>
        </div>
      </div>
    </React.Fragment>
    
  );
};

export default Context;