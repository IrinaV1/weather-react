import React from "react";
import "./index.css"
 import Weather from "./Weather";


function App() {

  return (
    <div className="App">
     <div className="container">
        <div className="weather-app-wrapper">
        <div className="weather-app">
            
      <Weather defaultCity="London" />      
<div className="weather-forecst" id="forecast">
    
</div>
</div>
<small> <a href="https://github.com/IrinaV1/vanilla-weather-app" rel="noreferrer" target="_blank">Open-source code</a>, by Irina Vyust</small>
</div>
</div>
    </div>
  );
}

export default App;
