import axios from "axios";

export default {
  state: {
    kursExchange: [],
  },
  getters: {
    getKursExchange(state: any) {
      return state.kursExchange;
    },

    getKursExchangeRates(state: any) {
      return state.kursExchange.rates;
    },

    getKursBYN(state: any) {
      for (const item in state.kursExchange.rates) {
        if (item == "BYN") {
          return parseFloat(state.kursExchange.rates[item]);
        }
      }
    },

    getKursUSD(state: any) {
      for (const item in state.kursExchange.rates) {
        if (item == "USD") {
          return parseFloat(state.kursExchange.rates[item]);
        }
      }
    },

    getKursEUR(state: any) {
      for (const item in state.kursExchange.rates) {
        if (item == "EUR") {
          return parseFloat(state.kursExchange.rates[item]);
        }
      }
    },

    // getKursBYN(getKursExchangeRates: any) {
    //   for (const item in getKursExchangeRates) {
    //     if (item == "BYN") {
    //       return getKursExchangeRates[item];
    //     }
    //   }
    // },
    //   getTemp(state: any) {
    //     return state.temp;
    //   },
    //   getName(state: any) {
    //     return state.name;
    //   },
  },
  actions: {
    GET_KURS: async (context: any, payload: string) => {
      const res = await axios.request({
        method: "GET",

        url: "https://www.cbr-xml-daily.ru/latest.js",

        // headers: {
        //   "Access-Control-Allow-Origin": "*",
        // },
        // proxy: {
        //   host: "192.168.100.5:8080",
        //   port: 8000,
        // },
        // headers: {
        //   apikey: "qtL628n5e6J9mSLZh3TybAqVosXsKT4z",
        // },
      });
      context.commit("SET_KURS", res.data);
      // context.commit("SET_WEATHER_MAIN", res.data.weather[0]);
      // context.commit("SET_TEMP", res.data.main.temp);
      // context.commit("SET_NAME", res.data.name);
    },
  },
  mutations: {
    SET_KURS: (state: any, kurs: any) => {
      state.kursExchange = kurs;
    },
    //   SET_WEATHER_MAIN: (state: any, weatherMain: WeatherMain) => {
    //     state.weatherMain = weatherMain;
    //   },
    //   SET_TEMP: (state: any, temp: number) => {
    //     state.temp = temp;
    //   },
    //   SET_NAME: (state: any, name: string) => {
    //     state.name = name;
    //   },
  },
};
