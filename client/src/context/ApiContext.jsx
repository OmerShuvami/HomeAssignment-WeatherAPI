import { createContext, useState } from "react";

export const ApiContext = createContext({
  hasLoaded: false,
  setHasLoaded: () => {},
  weatherCurrent: {},
  setWeatherCurrent: () => {},
  weatherLocation: {},
  setWeatherLocation: () => {},
  weatherForecast: {},
  setWeatherForecast: () => {},
});

export const ApiContextProvider = ({ children }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [weatherCurrent, setWeatherCurrent] = useState(null);
  const [weatherLocation, setWeatherLocation] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);


  const contextValue = {
    hasLoaded,
    setHasLoaded,
    weatherCurrent,
    setWeatherCurrent,
    weatherLocation,
    setWeatherLocation,
    weatherForecast,
    setWeatherForecast,
  };
  return (
    <ApiContext.Provider value={contextValue}>
      {children}
    </ApiContext.Provider>
  );
};
