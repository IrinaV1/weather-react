import React, { useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";



 function Weather(props) {
  
    const [weatherData, setWeatherData] = useState({ready: false});
const [city, setCity] = useState(props.defaultCity)

   
    
    function handleResponse(response){
        setWeatherData({
            ready: true,
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
    const apiKey = "f9a03396395e77596cdd41ea58a7f663";
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
                        <div className="col-9">
    <input type="search" placeholder="Type a city.." className="form-control" id="city-input" autoFocus="on" onChange={handleCityChange} />
    </div>
    <div className="col-3">
     <input type="submit" value="search" className="btn btn-outline-secondary w-100" />
    </div>
    </div>
    </form>

    <WeatherInfo data={weatherData} />
    </div>
      );

} else {
search()

 return <div>"Loading..."</div>;
}
};

export default Weather