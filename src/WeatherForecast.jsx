import React, {useState, useEffect} from 'react';
import "./WeatherForecast.css";
import axios from 'axios';
import WeatherForecastDay from './WeatherForecastDay';


function WeatherForecast(props) {

let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

useEffect(() => {
  setLoaded(false);
}, [props.coordinates]);

function handleResponse(response) {
setForecast(response.data.daily)
setLoaded(true)
}



if(loaded) {
  return (
    <div className='weatherForecast'>
<div className="row">
  {forecast.map(function (dailyForecast, index) {
    if (index < 5) {
return(
  <div className="col" key={index}>
       <WeatherForecastDay data={dailyForecast} />
    </div>
)
    }
  })}
    
</div>
  </div>
  );

}else{
  let long = props.coordinates.lon;
let lati = props.coordinates.lat;
const apiKey = "3dce9b1c66837262a25b3f448d354a76";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${long}&appid=${apiKey}&units=metric`

axios.get(apiUrl).then(handleResponse);

}}

export default WeatherForecast