import axios from "axios";
import { Main, WeatherMain, WeatherModel } from "@/models";

export default {
  state: {
    weather: {},
    weatherMain: {},
    temp: 0,
    // name: "",
  },
  getters: {
    getFullWeather(state: any) {
      return state.weather;
    },
    getWeatherMain(state: any) {
      return state.weatherMain;
    },
    getTemp(state: any) {
      return state.temp;
    },
    getName(state: any) {
      return state.weather.name;
    },
  },
  actions: {
    GET_WEATHER: async (context: any, payload: any) => {
      const res = await axios.request({
        method: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather",
        params: {
          q: payload,
          lang: "ru",
          units: "metric",
          appid: "3ae4b0c9f9231e36ef0a9763c82c19bd",
        },
      });
      context.commit("SET_WEATHER", res.data);
      context.commit("SET_WEATHER_MAIN", res.data.weather[0]);
      context.commit("SET_TEMP", res.data.main.temp);
      // context.commit("SET_NAME", res.data.name);
    },
  },
  mutations: {
    SET_WEATHER: (state: any, weather: WeatherModel) => {
      state.weather = weather;
    },
    SET_WEATHER_MAIN: (state: any, weatherMain: WeatherMain) => {
      state.weatherMain = weatherMain;
    },
    SET_TEMP: (state: any, temp: number) => {
      state.temp = temp;
    },
    // SET_NAME: (state: any, name: string) => {
    //   state.name = name;
    // },
  },
};
