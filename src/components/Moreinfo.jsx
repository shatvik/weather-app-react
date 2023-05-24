// MoreInfo.js
import React from "react";
import Humidity from "../img/humidity.png";
import Storm from "../img/storm.png";
import Hot from "../img/hot.png";
import Temperature from "../img/temperature.png";

const MoreInfo = ({ humidity, wind, maxTemp, minTemp }) => {
  return (
    <div className="lower-data">
      <div className="more-info-label">More info : </div>
      <div className="more-info-container">
        <div className="info-block">
          <div className="info-block-label">
            <img src={Humidity} alt="Humidity" />
            <span>Humidity</span>
          </div>
          <div className="info-block-value">{humidity}%</div>
        </div>
        <div className="info-block">
          <div className="info-block-label">
            <img src={Storm} alt="Wind" />
            <span>Wind</span>
          </div>
          <div className="info-block-value">{wind} Km/hr</div>
        </div>
        <div className="info-block">
          <div className="info-block-label">
            <img src={Hot} alt="max-temp" />
            <span>Max</span>
          </div>
          <div className="info-block-value">{maxTemp}℃</div>
        </div>
        <div className="info-block">
          <div className="info-block-label">
            <img src={Temperature} alt="min-temp" />
            <span>Min</span>
          </div>
          <div className="info-block-value">{minTemp}℃</div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
