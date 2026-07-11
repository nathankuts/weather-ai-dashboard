import { useState } from "react";

function SearchForm({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) {
      alert("Please enter a city name.");
      return;
    }

    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter city (e.g. Nairobi)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit">Get Weather</button>
    </form>
  );
}

export default SearchForm;
