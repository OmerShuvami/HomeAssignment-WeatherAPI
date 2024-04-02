import "../../styles/weather-info/info-forecast.css";
import React, { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import { format } from "date-fns";

function InfoForecast() {
  const { weatherForecast } = useContext(ApiContext);

  return (
    <>
      {weatherForecast && (
        <div className="forecast-info">
          {weatherForecast.map((forecast, index) => {
            return (
              <span className="forecast-item" key={index}>
                <p>{format(forecast?.time, "HH:mm")}</p>
                <b>{Math.round(forecast?.temp_c)}&deg;</b>
              </span>
            );
          })}
        </div>
      )}
    </>
  );
}

export default InfoForecast;
