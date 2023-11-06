
import React from 'react';
import "./FormatedDate.css";


function FormatedDate (props) {
 let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
 
 
 
 
 return (
    <div>
 <span id="date">{day} {hours}:{minutes} </span>
            </div>
  )
}

export default FormatedDate