import React, { useState, useEffect, useCallback } from "react";

export default function WeatherTime() {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Delhi");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [coords, setCoords] = useState(null);
  const [isAutoFetch, setIsAutoFetch] = useState(true);

  const API_KEY = "68e268569ac54192980173312250512";

  // 1. Update Time Every Second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Auto Detect Location (Geolocation)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (geoError) => {
          console.error("Geolocation Error:", geoError);
          setError("Location permission denied. Showing Delhi weather.");
          setCoords("failed");
        },
        { enableHighAccuracy: true, timeout: 5000 }
      );
    } else {
      setError("Browser does not support location. Showing Delhi weather.");
      setCoords("failed");
    }
  }, []);

  // 3. Fetch Weather (Auto or Manual)
  const fetchWeather = useCallback(
    async (latitude = null, longitude = null, manualCity = null) => {
      let selectedCity = manualCity || city;

      if (!latitude && !longitude && !selectedCity.trim()) {
        setError("Please enter a city name.");
        return;
      }

      setLoading(true);
      setError(null);

      let queryParam = "";

      if (latitude && longitude) {
        queryParam = `q=${latitude},${longitude}`;
      } else {
        queryParam = `q=${selectedCity}`;
      }

      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&${queryParam}&aqi=yes`
        );

        const data = await res.json();

        if (res.ok && data.current) {
          setWeather(data);

          if (latitude && longitude && data.location) {
            setCity(data.location.name);
          }
        } else {
          setWeather(null);
          setError(data.error?.message || "City not found.");
        }
      } catch (error) {
        console.error("Weather Fetch Error:", error);
        setError("Unable to fetch weather.");
      } finally {
        setLoading(false);
        if (isAutoFetch) setIsAutoFetch(false);
      }
    },
    [city, API_KEY, isAutoFetch]
  );

  // 4. When coords change → Fetch automatically
  useEffect(() => {
    if (coords && coords !== "failed") {
      fetchWeather(coords.lat, coords.lon);
    } else if (coords === "failed" && isAutoFetch) {
      fetchWeather();
    }
  }, [coords, fetchWeather, isAutoFetch]);

  // Manual search
  const handleManualFetch = () => {
    setIsAutoFetch(false);
    fetchWeather(null, null, city);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleManualFetch();
  };

 return (
  <div className="w-44 p-2 bg-transparent backdrop-blur-sm text-black">

      {/* Time */}
      <div className="mb-1 text-center">
        <p className="text-[9px] opacity-70">Time</p>
        <p className="text-lg font-semibold">
          {time.toLocaleTimeString()}
        </p>
      </div>

      {/* Loading */}
      {isAutoFetch && loading && (
        <div className="text-[10px] text-blue-300 p-1 rounded-lg text-center">
          Detecting...
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-[10px] text-red-300 p-1 rounded-lg text-center">
          {error}
        </div>
      )}

      {/* Weather Data */}
      {weather && weather.current ? (
        <div className="text-center">
          <p className="text-[11px] font-semibold">
            📍 {weather.location.name}
          </p>

          <div className="flex items-center justify-center gap-1 mt-1">
            <img
              src={weather.current.condition.icon}
              className="w-8 h-8"
              alt="Weather Icon"
            />
            <p className="text-2xl font-bold">
              {weather.current.temp_c}°
            </p>
          </div>

          <p className="text-[10px] opacity-80 mt-1">
            {weather.current.condition.text}
          </p>

          {/* Details */}
          <div className="grid grid-cols-2 gap-1 mt-2 text-[10px]">
            <div className="bg-white/10 backdrop-blur-sm p-1 rounded-md">
              <p className="opacity-80">Humidity</p>
              <p className="font-semibold">
                {weather.current.humidity}%
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-1 rounded-md">
              <p className="opacity-80">Wind</p>
              <p className="font-semibold">
                {weather.current.wind_kph} KPH
              </p>
            </div>
          </div>
        </div>
      ) : (
        !loading &&
        !error && (
          <p className="text-[10px] opacity-80 text-center mt-1">
            Weather unavailable
          </p>
        )
      )}
    </div>
);


}
