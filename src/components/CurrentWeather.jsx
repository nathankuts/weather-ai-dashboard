function CurrentWeather({ current, city, country }) {
  return (
    <div className="card">
      <h2>
        {city}, {country}
      </h2>

      <p>
        <strong>Temperature:</strong> {current.temperature} °C
      </p>

      <p>
        <strong>Wind Speed:</strong> {current.windspeed} km/h
      </p>

      <p>
        <strong>Wind Direction:</strong> {current.winddirection}°
      </p>

      <p>
        <strong>Weather Code:</strong> {current.weathercode}
      </p>

      <p>
        <strong>Updated:</strong> {current.time}
      </p>
    </div>
  );
}

export default CurrentWeather;
