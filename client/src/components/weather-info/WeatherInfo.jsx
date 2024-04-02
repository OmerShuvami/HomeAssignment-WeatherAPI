import "../../styles/weather-info/weather-info.css";
import React, { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import InfoLocation from "./InfoLocation";
import InfoForecast from "./InfoForecast";
import InfoMain from "./InfoMain";
import InfoAdditional from "./InfoAdditional";

function WeatherInfo() {
  const { hasLoaded } = useContext(ApiContext);

  return (
    <section className={hasLoaded ? "weather-info" : "hidden"}>
      <div>
        <InfoLocation />
        <InfoMain />
        <InfoAdditional />
        <InfoForecast />
      </div>
    </section>
  );
}

export default WeatherInfo;
