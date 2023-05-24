// App.js
import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import MoreInfo from "./components/Moreinfo";

function App() {
  const [city, setCity] = useState("Mumbai");
  const [temp, setTemp] = useState("");
  const [wind, setWind] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [isWinter, setIsWinter] = useState(false);

  useEffect(() => {
    async function weatherData() {
      const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "930cca5a2bmshb01bada313f6500p1442b2jsnf4ca7ea43620",
          "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setTemp(result.temp);
        setHumidity(result.humidity);
        setWind(result.wind_speed);
        setMaxTemp(result.max_temp);
        setMinTemp(result.min_temp);
        if (result.temp <= 16) {
          setIsWinter(true);
        } else {
          setIsWinter(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
    weatherData();
  }, [city]);

  const handleSearch = (searchTerm) => {
    setCity(searchTerm);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="container">
        <WeatherDisplay city={city} temp={temp} isWinter={isWinter} />
        <MoreInfo
          humidity={humidity}
          wind={wind}
          maxTemp={maxTemp}
          minTemp={minTemp}
        />
      </div>
    </div>
  );
}

export default App;
