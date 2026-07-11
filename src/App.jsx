import { useState } from "react";
import SearchForm from "./components/SearchForm";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import { getWeather } from "./services/weatherApi";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");

    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (err) {
      console.error(err);

      if (err.response) {
        setError(
          `Error ${err.response.status}: ${
            err.response.data.message || "Request failed"
          }`
        );
      } else {
        setError(err.message || "Unable to fetch weather data.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>WeatherAI Dashboard</h1>

      <SearchForm onSearch={fetchWeather} />

      {loading && <p>Loading...</p>}

      {error && <p className="error">{error}</p>}

      {weather && (
        <>
          <CurrentWeather
            current={weather.current}
            city={weather.city}
            country={weather.country}
          />

          <Forecast daily={weather.daily} />
        </>
      )}
    </div>
  );
}

export default App;
