import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setWeatherData } from "../../../redux/weather/slicer";

const STATUS_OK = 200;

export const useFetchWeather = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const fetchWeather = async () => {
    const urlEndpoint = `/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1`;
    const response = await axios.get(
      `https://samples.openweathermap.org${urlEndpoint}`
    );

    if (response.status === STATUS_OK) {
      const weatherData = response.data.list.length
        ? response.data.list[0]
        : [];
      const weather = weatherData.weather[0] ?? null;
      const newData = {
        date: weatherData.dt_txt,
        temp: weatherData.main.temp,
        description: weather.description ?? null,
        main: weather.main ?? null,
        pressure: weatherData.main.pressure,
        humidity: weatherData.main.humidity,
      };
      dispatch(setWeatherData(newData));
      navigate("/weather");
    }
  };

  return {
    fetchWeather,
    setCity,
  };
};
