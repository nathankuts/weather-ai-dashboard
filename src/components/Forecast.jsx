function Forecast({ daily }) {
  return (
    <div className="card">
      <h2>3-Day Forecast</h2>

      {daily.map((day) => (
        <div key={day.date} className="forecast-item">
          <h3>{day.date}</h3>

          <p>Max: {day.temp_max} °C</p>

          <p>Min: {day.temp_min} °C</p>

          <p>Rain: {day.precipitation} mm</p>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
