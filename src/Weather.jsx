import React, { useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import FormatedDate from './FormatedDate';


 function Weather(props) {
  
    const [weatherData, setWeatherData] = useState({ready: false});
    const apiKey = "f9a03396395e77596cdd41ea58a7f663";


let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

    
    function handleResponse(response){
        setWeatherData({
            ready: true,
temperature: response.data.main.temp,
humidity: response.data.main.humidity,
date: new Date(response.data.dt * 1000),
description: response.data.weather[0].description,
iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
wind: response.data.wind.speed,
city: response.data.name
});

} 
if (weatherData.ready) {

    return (
        <>
        <form id="search-form" className="mb-4">
                    <div className="row">
                        <div className="col-9">
    <input type="search" placeholder="Type a city.." className="form-control" id="city-input" autocomplete="off" />
    </div>
    <div className="col-3">
     <input type="submit" value="search" className="btn btn-outline-secondary w-100" />
    </div>
    </div>
    </form>
        <div className="weather">
    
        <h1 id="city">{weatherData.city}</h1>
    <ul>
        <li> 
        <FormatedDate date={weatherData.date} />    
            </li>
        <li id="description">{weatherData.description}</li>
    </ul>
    </div>
    <div className="row">
        <div className="col-6">
            <div className="d-flex weather-temperature">
            <img src={weatherData.iconUrl} alt={weatherData.description} id="icon" />
           <div> 
            <strong id="temperature">{Math.round(weatherData.temperature)}</strong>
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
                <li>Humidity:<span id="humidity"> 73</span>{weatherData.humidity} %</li>
                <li >Wind: <span id="wind">1</span>{weatherData.wind} km/h</li>
            </ul>
        </div>
    </div>
    </>
      );

} else {

 return <p>"Loading..."</p>;
}
};

export default Weather