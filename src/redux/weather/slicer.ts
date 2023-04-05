import { createSlice } from "@reduxjs/toolkit";

const WeatherSlicer = createSlice({
  name: "weatherSlicer",
  initialState: {
    date: "",
    temp: 0,
    description: "",
    main: "",
    pressure: 0,
    humidity: 0,
  },
  reducers: {
    setWeatherData: (state, action) => {
      const { date, temp, description, main, pressure, humidity } = action.payload;
      state.date = date;
      state.temp = temp;
      state.description = description;
      state.main = main;
      state.pressure = pressure;
      state.humidity = humidity;
    },
  },
});

export const { setWeatherData } = WeatherSlicer.actions;
export const weather = WeatherSlicer.reducer;
