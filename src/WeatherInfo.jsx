import React from 'react';
import FormatedDate from './FormatedDate';
import "./WeatherInfo.css"
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';

function WeatherInfo (props) {
  return (
    <div>
    <div className="weather">
    
    <h1 id="city">{props.data.city}</h1>
<ul className='p-0'>
    <li> 
    <FormatedDate date={props.data.date} /></li>
    <li id="description">{props.data.description}</li>
</ul>
</div>
<div className="row">
    <div className="col-11 col-sm-6" >
        <div className="d-flex weather-temperature w-100">
            <div id="icon">
<WeatherIcon 
code={props.data.icon} 
size={64}
/>
</div>
       
       <div> 
        <WeatherTemperature celsius={props.data.temperature} />
    </div>
    </div>
    </div>
    <div className="col-11 col-sm-6 pt-2">
        <ul>
            <li>Humidity:<span id="humidity"> 73</span>{props.data.humidity} %</li>
            <li >Wind: <span id="wind">1</span>{props.data.wind} km/h</li>
        </ul>
    </div>
</div>
</div>
  );
}

export default WeatherInfo