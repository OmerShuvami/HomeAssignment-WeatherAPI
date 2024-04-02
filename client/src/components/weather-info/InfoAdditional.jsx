import "../../styles/weather-info/info-additional.css";
import React, { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";

function InfoAdditional() {
  const { weatherCurrent } = useContext(ApiContext);

  return (
    <>
      {weatherCurrent && (
        <div className="additional-info">
          <span>
            <p>Precipitation</p>
            <b>{weatherCurrent?.precip_mm} mm</b>
          </span>
          <span>
            <p>Humidity</p>
            <b>{weatherCurrent?.humidity}%</b>
          </span>
          <span>
            <p>Wind</p>
            <b>{Math.round(weatherCurrent?.wind_kph)} km/h</b>
          </span>
        </div>
      )}
    </>
  );
}

export default InfoAdditional;
