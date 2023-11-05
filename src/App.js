
import "./index.css"

function App() {

  return (
    <div className="App">
     <div class="container">
        <div class="weather-app-wrapper">
        <div class="weather-app">
            <form id="search-form" class="mb-4">
                <div class="row">
                    <div class="col-9">
<input type="search" placeholder="Type a city.." class="form-control" id="city-input" autocomplete="off" />
</div>
<div class="col-3">
 <input type="submit" value="search" class="btn btn-outline-secondary w-100" />
</div>
</div>
</form>
            <div class="overview">
    <h1 id="city">New York</h1>
<ul>
    <li> <span id="date"></span></li>
    <li id="description">Clear</li>
</ul>
</div>
<div class="row">
    <div class="col-6">
        <div class="d-flex weather-temperature">
        <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="Clear" id="icon" />
       <div> 
        <strong id="temperature">12</strong>
        <span class="units">
            <a href="#" id="celsius-link" class="active">°C |</a> 
            <a href="#" id="fahrenheit-link"> °F</a>
        </span>
    </div>
    </div>
    </div>
    <div class="col-6">
        <ul>
        <li>Precipitation:<span id="precipitation"></span> 0%</li>
            <li>Humidity:<span id="humidity"> 73</span>%</li>
            <li >Wind: <span id="wind">1</span> km/h</li>
        </ul>
    </div>
</div>
<div class="weather-forecst" id="forecast">
    
</div>
</div>
<small> <a href="https://github.com/IrinaV1/vanilla-weather-app" target="_blank">Open-source code</a>, by Irina Vyust</small>
</div>
</div>
    </div>
  );
}

export default App;
