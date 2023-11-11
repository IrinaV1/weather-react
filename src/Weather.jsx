import React, { useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from './WeatherForecast';


 function Weather(props) {
  
    const [weatherData, setWeatherData] = useState({ready: false});
const [city, setCity] = useState(props.defaultCity)

   
    
    function handleResponse(response){
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
temperature: response.data.main.temp,
humidity: response.data.main.humidity,
date: new Date(response.data.dt * 1000),
description: response.data.weather[0].description,
icon: response.data.weather[0].icon,
wind: response.data.wind.speed,
city: response.data.name,
});
} 


function search() {
    const apiKey = "caa883a4a60d93878755b08a933f74ea";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
}

function handleSubmit(event) {
    event.preventDefault();
    search();
}
function handleCityChange(event) {
setCity(event.target.value)
}

if (weatherData.ready) {
    return (
        <div>
        
        <form onSubmit={handleSubmit} id="search-form" className="mb-4">
                    <div className="row">
                        <div className="col-8 col-md-9">
    <input type="search" placeholder="Type a city.." className="form-control" id="city-input" autoFocus="on" onChange={handleCityChange} />
    </div>
    <div className="col-4 col-md-3 " >
     <input type="submit" value="search" className="btn btn-outline-secondary w-100" />
    </div>
    </div>
    </form>

    <WeatherInfo data={weatherData} />
    <WeatherForecast coordinates={weatherData.coordinates} />
    </div>
      );

} else {
search()

 return <div>"Loading..."</div>;
}
};

export default Weather