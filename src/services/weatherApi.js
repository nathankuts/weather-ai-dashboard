import axios from "axios";

const WEATHER_API = "https://api.weather-ai.co/v1/weather";

const GEO_API =
  "https://geocoding-api.open-meteo.com/v1/search";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeather(city) {

  // Find city coordinates
  const geoResponse = await axios.get(GEO_API, {
    params: {
      name: city,
      count: 1
    }
  });

  if (
    !geoResponse.data.results ||
    geoResponse.data.results.length === 0
  ) {
    throw new Error("City not found");
  }

  const { latitude, longitude, name, country } =
    geoResponse.data.results[0];

  // Request weather
  const weatherResponse = await axios.get(WEATHER_API, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: {
      lat: latitude,
      lon: longitude,
      days: 3,
      units: "metric",
      ai: false,
    },
  });

  return {
    ...weatherResponse.data,
    city: name,
    country,
  };
}
