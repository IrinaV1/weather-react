
import React from 'react';
import "./FormatedDate.css";


function FormatedDate (props) {
 let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`
  }
  let minutes = props.date.getMinutes();
 if (minutes < 10) {
    minutes = `0${minutes}`

 }
 
 
 
 return (
    <div>
 <span id="date">{day} {hours}:{minutes} </span>
            </div>
  )
}

export default FormatedDate