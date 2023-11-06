import React from 'react';
import FormatedDate from './FormatedDate';
import "./WeatherInfo.css"

function WeatherInfo (props) {
  return (
    <div>
    <div className="weather">
    
    <h1 id="city">{props.data.city}</h1>
<ul>
    <li> 
    <FormatedDate date={props.data.date} />    
        </li>
    <li id="description">{props.data.description}</li>
</ul>
</div>
<div className="row">
    <div className="col-6">
        <div className="d-flex weather-temperature">
        <img src={props.data.iconUrl} alt={props.data.description} id="icon" />
       <div> 
        <strong id="temperature">{Math.round(props.data.temperature)}</strong>
        <span className="units">
            <a href="/" id="celsius-link" className="active">°C |</ a> 
            <a href="/" id="fahrenheit-link"> °F</a>
        </span>
    </div>
    </div>
    </div>
    <div className="col-6">
        <ul>
        <li>Precipitation:<span id="precipitation"></span> 0%</li>
            <li>Humidity:<span id="humidity"> 73</span>{props.data.humidity} %</li>
            <li >Wind: <span id="wind">1</span>{props.data.wind} km/h</li>
        </ul>
    </div>
</div>
</div>
  );
}

export default WeatherInfo