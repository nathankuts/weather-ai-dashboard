# WeatherAI Dashboard

A simple React application that integrates with the WeatherAI API to display current weather conditions and a 3-day forecast for any city.

The application allows users to search by city name, automatically converts the city into geographic coordinates using the Open-Meteo Geocoding API, and retrieves weather data from the WeatherAI Weather API.

---

## Features

- Search weather by city name
- Display current weather conditions
- Display a 3-day weather forecast
- Responsive user interface
- Loading and error handling
- Secure API key management using environment variables

---

## Technologies Used

- React
- Vite
- JavaScript (ES6+)
- Axios
- CSS3

---

## APIs

### WeatherAI API

Used to retrieve weather data.

Documentation:
https://weather-ai.co/docs

### Open-Meteo Geocoding API

Used to convert city names into latitude and longitude coordinates.

Documentation:
https://open-meteo.com/en/docs/geocoding-api

---

## Project Structure

```
weather-ai-dashboard/
│
├── src/
│   ├── components/
│   │   ├── SearchForm.jsx
│   │   ├── CurrentWeather.jsx
│   │   └── Forecast.jsx
│   │
│   ├── services/
│   │   └── weatherApi.js
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── .env.example
├── package.json
└── README.md
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/weather-ai-dashboard.git
```

---

### 2. Navigate into the project

```bash
cd weather-ai-dashboard
```

---

### 3. Install dependencies

```bash
npm install
```

---

### 4. Create an environment file

Create a file named:

```
.env
```

Add your WeatherAI API key:

```env
VITE_WEATHER_API_KEY=your_weatherai_api_key
```

---

### 5. Start the development server

```bash
npm run dev
```

Open the URL displayed in the terminal (usually http://localhost:5173).

---

## Build for Production

```bash
npm run build
```

---

## Preview Production Build

```bash
npm run preview
```

---

## Future Improvements

- Weather icons
- Hourly forecast
- AI weather summary
- Temperature unit switch
- Current location support

---

## Author

Nathan Makhombe
