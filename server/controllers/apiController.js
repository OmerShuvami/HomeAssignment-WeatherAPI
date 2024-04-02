require("dotenv").config();
const axios = require("axios");
const apiKey = process.env.WEATHER_API_KEY;
const URL = "https://api.weatherapi.com/v1/forecast.json";

exports.fetchWeatherData = async (req, res) => {
  console.log("Fetching weather data...");
    const { location } = req.query;
    try {
      const response = await axios.get(URL, {
        params: {
          key: apiKey,
          q: location,
        },
      });
      const weatherData = response.data;
      console.log("Data fetched successfully!");
      res.status(200).json(weatherData);
    } catch (error) {
      console.error("Error fetching weather :(");
      if (error.message === "Request failed with status code 400") {
          res.status(404).json({ error: "Location not found" });
      } else{
          res.status(500).json({ error: "Failed to fetch weather data" });
      }
    }
  };