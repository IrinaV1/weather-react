import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';


function WeatherIcon(props) {
  return (
    <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color='black'
    size={64}
    animate={true}
  />
  )
}

export default WeatherIcon