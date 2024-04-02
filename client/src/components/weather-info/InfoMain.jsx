import "../../styles/weather-info/info-main.css";
import React, { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";

function InfoMain() {
  const { weatherCurrent } = useContext(ApiContext);

  return (
    <>
      {weatherCurrent && (
        <main className="main-info">
          <h1>{Math.round(weatherCurrent?.temp_c)}&deg;</h1>
          <h2>{weatherCurrent?.condition?.text}</h2>
        </main>
      )}
    </>
  );
}

export default InfoMain;
