import Vue from "vue";
import Vuex from "vuex";

import weather from "./modules/weather.store";
import kursExchange from "./modules/kursExchange.store";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    weather,
    kursExchange
  },
});
