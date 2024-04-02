import axios from "axios";
import { format } from "date-fns";

axios.defaults.withCredentials = true;

// Fetches the weather data from the API
export const fetchWeatherData = async (location) => {
  return axios.get(`${import.meta.env.VITE_API_URL}/api/weather`, {
    params: location,
  });
};


  // Narrows the forecast only to the next 5 hours
  export const filterForecastData = (forecastData, locationData) => {
    const currentHour = Number(format(locationData.localtime, "HH")) + 1;
    const newForecastData = forecastData.slice(currentHour, currentHour + 5);
    if (currentHour + 5 > forecastData.length) { // Check if there aren't enough data points for 5 hours
      const hoursLeft = currentHour + 5 - forecastData.length;
      return [
        ...forecastData.slice(currentHour - hoursLeft, currentHour),
        ...newForecastData,
      ];
    }
    return newForecastData;
  };
