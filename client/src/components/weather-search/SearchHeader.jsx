import "../../styles/weather-search/search-header.css";
import React, { useContext } from 'react'
import { ApiContext } from '../../context/ApiContext';
import { useForm } from 'react-hook-form';
import {fetchWeatherData , filterForecastData} from '../../utils/ApiService';

function SearchHeader() {
// useForm
const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();


  // useContext
  const {
    setHasLoaded,
    setWeatherCurrent,
    setWeatherLocation,
    setWeatherForecast,
    hasLoaded,
    weatherCurrent,
    weatherLocation,
  } = useContext(ApiContext);

// Submits the location information to the API
const onSubmit = async (data) => {
    if (!data.location) {
      // Check if location is provided
      setError("location", {
        type: "manual",
        message: "Please enter location",
      });
      return;
    }
    try {
      // Fetch weather data
      const response = await fetchWeatherData(data);
      setWeatherCurrent(response.data.current);
      setWeatherLocation(response.data.location);
      setWeatherForecast(
        filterForecastData(
          response.data.forecast.forecastday[0].hour,
          response.data.location
        )
      );
      setHasLoaded(true);
    } catch (err) {
      // Displays error message
      console.error(err);
      if (err?.response?.status === 404) {
        setError("location", {
          type: "manual",
          message: "Location not found",
        });
      } else {
        setError("location", {
          type: "manual",
          message: "Failed to fetch weather data",
        });
      }
    }
  };

  return (
    <header className="search-header">
        <h2>Use our weather app to see the weather around the world</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>City name</p>
          <label>
            <input
              type="text"
              name="location"
              autoComplete="off"
              placeholder="Enter city name here..."
              className={errors.location && "error-input"}
              {...register("location", { required: !!errors.location })}
            />
            <button type="submit">Check</button>
            {errors.location && (
              <p className="error-text">{errors.location.message}</p>
            )}
          </label>
        </form>
      </header>
  )
}

export default SearchHeader