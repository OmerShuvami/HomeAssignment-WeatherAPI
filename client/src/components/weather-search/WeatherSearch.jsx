import "../../styles/weather-search/weather-search.css";
import React, { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";
import SearchHeader from "./SearchHeader";
import SearchInfo from "./SearchInfo";
import logo from "../../assets/logo.svg";

function WeatherSearch() {
  // useContext
  const { hasLoaded } = useContext(ApiContext);
  return (
    <section
      className={
        hasLoaded ? "weather-search loaded" : "weather-search preloaded"
      }
    >
      <img src={logo} alt="Fintek logo" />
      <SearchHeader />
      <SearchInfo />
    </section>
  );
}

export default WeatherSearch;
