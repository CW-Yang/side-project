import React from 'react';

import classes from './Area.module.css';

import Ylan from './ylan/Ylan';
import Hualien from './hualien/Hualien';
import Lianjiang from './lianjiang/Lianjiang';
import Kinmen from './kinmen/Kinmen';
import Taoyuan from './taoyuan/Taoyuan';
import Hsinchu from './hsinchu/Hsinchu';
import Miaoli from './miaoli/Miaoli';
import Changhua from './changhua/Changhua';
import Nantou from './nantou/Nantou';
import Yunlin from './yunlin/Yunlin';
import Chiayi from './chiayi/Chiayi';
import Pingtung from './pingtung/Pingtung';
import Taitung from './taitung/Taitung';
import Penghu from './penghu/Penghu';
import Keelung from './keelung/Keelung';
import HsinchuCity from './hsinchuCity/HsinchuCity';
import ChiayiCity from './chiayiCity/ChiayiCity';
import Taipei from './taipei/Taipei';
import Kaoshiung from './kaohsiung/Kaoshiung';
import NewTaipei from './newTaipei/NewTaipei';
import Taichung from './taichung/Taichung';
import Tainan from './tainan/Tainan';

const Area = (props) => {
  const town = props.town;
  let target = '';

  switch (town) {
    case '宜蘭縣': 
      target = <Ylan onMouseover={props.onMouseover}/>;
      break;
    case '花蓮縣':
      target = <Hualien onMouseover={props.onMouseover}/>;
      break;
    case '連江縣':
      target = <Lianjiang onMouseover={props.onMouseover}/>;
      break;
    case '金門縣':
      target = <Kinmen onMouseover={props.onMouseover}/>;
      break;
    case '桃園市':
      target = <Taoyuan onMouseover={props.onMouseover}/>;
      break;
    case '新竹縣':
      target = <Hsinchu onMouseover={props.onMouseover}/>;
      break;
    case '苗栗縣':
      target = <Miaoli onMouseover={props.onMouseover}/>;
      break;
    case '彰化縣':
      target = <Changhua onMouseover={props.onMouseover}/>; 
      break;
    case '南投縣':
      target = <Nantou onMouseover={props.onMouseover}/>;
      break;
    case '雲林縣':
      target = <Yunlin onMouseover={props.onMouseover}/>;
      break;
    case '嘉義縣': 
      target = <Chiayi onMouseover={props.onMouseover}/>;
      break;
    case '屏東縣':
      target = <Pingtung onMouseover={props.onMouseover}/>;
      break;
    case '臺東縣':
      target = <Taitung onMouseover={props.onMouseover}/>;
      break;
    case '澎湖縣':
      target = <Penghu onMouseover={props.onMouseover}/>;
      break;
    case '基隆市':
      target = <Keelung onMouseover={props.onMouseover}/>;
      break;
    case '新竹市':
      target = <HsinchuCity onMouseover={props.onMouseover}/>;
      break;
    case '嘉義市':
      target = <ChiayiCity onMouseover={props.onMouseover}/>;
      break;
    case '臺北市':
      target = <Taipei onMouseover={props.onMouseover}/>;
      break;
    case '高雄市':
      target = <Kaoshiung onMouseover={props.onMouseover}/>;
      break;
    case '新北市':
      target = <NewTaipei onMouseover={props.onMouseover}/>;
      break;
    case '臺中市':
      target = <Taichung onMouseover={props.onMouseover}/>;
      break;
    case '臺南市':
      target = <Tainan onMouseover={props.onMouseover}/>;
      break;
  };

  return (
    <div className={classes.area}>
      {target}
    </div>
  );
};

export default Area;
