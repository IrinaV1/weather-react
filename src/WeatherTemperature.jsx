import React, {useState} from 'react'


function WeatherTemperature(props){
const [units, setUnits] = useState("celsius")

function showCelsius(event){
    event.preventDefault();
    setUnits("celsius")
}

function showFahrenheit(event){
    event.preventDefault();
    setUnits("fahrenheit")
}

function fahrenheite(){
    return(props.celsius * 9) / 5 + 32;
}

if(units === "celsius"){
  return (
    <div className='weatherTemperature'>
    <strong id="temperature">{Math.round(props.celsius)}</strong>
    <span className="units">
        <a href="/" id="celsius-link" className="active">°C | {""}</ a> 
        <a href="/" onClick={showFahrenheit} id="fahrenheit-link"> °F</a>
    </span>
    </div>
  )
}else{
    return(
        <div className='weatherTemperature'>
        <strong id="temperature">{Math.round(fahrenheite())}</strong>
        <span className="units">
            <a href="/" onClick={showCelsius} id="celsius-link" className="active">°C {""}| </ a> 
            <a href="/"  id="fahrenheit-link"> °F</a>
        </span>
        </div>
    )
}
}

export default WeatherTemperature