import "../../styles/weather-info/info-location.css";
import React, { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import { format } from "date-fns";

function InfoLocation() {
  const { weatherLocation } = useContext(ApiContext);

  return (
    <>
      {weatherLocation && (
        <header className="location-info">
          <h3>{weatherLocation?.name}</h3>
          <h4>{weatherLocation?.country}</h4>
          <p>
            {format(weatherLocation?.localtime, "dd/MM/yyyy")} at{" "}
            {format(weatherLocation?.localtime, "HH:mm")}
          </p>
        </header>
      )}
    </>
  );
}

export default InfoLocation;
