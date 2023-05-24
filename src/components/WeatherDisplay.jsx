// WeatherDisplay.js
import React from "react";
import Summer from "../img/summer.jpg";
import Winter from "../img/winter.jpg";

const WeatherDisplay = ({ city, temp, isWinter }) => {
  return (
    <div className="upper-data">
      {isWinter ? (
        <img src={Winter} alt="winter" />
      ) : (
        <img src={Summer} alt="summer" />
      )}
      <div className="weather-data">
        <div className="location">{city}</div>
        <div className="temperature">{temp}℃</div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
