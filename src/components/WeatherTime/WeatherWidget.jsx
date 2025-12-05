import React, { useState, useEffect, useCallback } from "react";
import Time from "./TimeWidget.jsx";

export default function Weather() {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [coords, setCoords] = useState(null);

  const API_KEY = "68e268569ac54192980173312250512";

  // Update time
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto detect location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
      },
      () => {
        setError("Location permission denied");
      }
    );
  }, []);

  // Fetch weather
  const fetchWeather = useCallback(async () => {
    if (!coords) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${coords.lat},${coords.lon}&aqi=yes`
      );
      const data = await res.json();

      if (data.current) {
        setWeather(data);
      } else {
        setError("Weather not found");
      }
    } catch {
      setError("Unable to fetch weather");
    }

    setLoading(false);
  }, [coords]);

  useEffect(() => {
    if (coords) fetchWeather();
  }, [coords, fetchWeather]);

  return (
    <div className="w-24 sm:w-36   text-black absolute top-1 right-[-5px]  sm:top-2 sm:right-4 rounded-lg">

    

      {/* LOADING */}
      {loading && (
        <div className="text-[10px] text-blue-400 text-center">Detecting...</div>
      )}

      {/* ERROR */}
      {error && (
        <div className="text-[10px] text-red-400 text-center">{error}</div>
      )}

      {/* WEATHER */}
      {weather && weather.current && (
        <div className="text-center">
          <p className="text-[11px] font-semibold">
            📍 {weather.location.name}
          </p>

          <div className="flex items-center justify-center gap-1 mt-[-10px] sm:mt-1">
            <img
              src={weather.current.condition.icon}
              className="w-8 h-8 relative left-4"
            />
            <p className="text-xs sm:text-2xl font-bold">
              {weather.current.temp_c}°C
            </p>
          </div>

          <p className="text-[8px] sm:text-[10px] opacity-80 mt-[-10px] sm:mt-0">
            {weather.current.condition.text}
          </p>

          <div className=" grid  sm:grid-cols-2  gap-1 text-[10px]">
            <div className="relative left-4 sm:left-0 p-1 rounded-md flex flex-row sm:flex-col gap-1 mt-[-8px] sm:mt-0">
              <p className="opacity-80">Humidity</p>
              <p className="font-semibold">
                {weather.current.humidity}%
              </p>
            </div>

            <div className="relative left-4 sm:left-0  p-1 rounded-md flex flex-row gap-1 sm:flex-col mt-[-15px] sm:mt-0  ">
              <p className="opacity-80">Wind</p>
              <p className="font-semibold">
                {weather.current.wind_kph} KPH
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
