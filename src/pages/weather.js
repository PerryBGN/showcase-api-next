
"use client";
import { useState, useEffect } from "react";

const WeatherComponent = () => {
  const [weather, setWeather] = useState(null);
  const API_KEY = "e8ccdec0431b61d74a6ad2ed69d0f535"; 

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${"e8ccdec0431b61d74a6ad2ed69d0f535"}`)
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((error) => console.error("Error fetching the weather data:", error));
  }, [API_KEY]);

  return (
    <div>
      <h1>Datos de clima</h1>
      {weather ? (
        <div>
          <p>City: {weather.name}</p>
          {}
          <p>Temperature: {weather.main && Math.round(weather.main.temp - 273.15)}°C</p>
          <p>Weather: {weather.weather && weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Cargando ...</p>
      )}
    </div>
  );
};

export default WeatherComponent;

