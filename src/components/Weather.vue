<template>
  <div class="weather">
    <div class="title">
      <h1>Погода</h1>
      {{ name }}
      <h2>{{ mapGetters.description }}</h2>
      <input
        type="range"
        class="form-range"
        min="0"
        max="2"
        step="1"
        v-model.number="selectCityIndex"
      />
    </div>

    <div class="cards">
      <h3>Температура</h3>
      <p>{{ temp }}</p>
    </div>
    <!-- <div v-for="(value, name, index) in mapGetters" :key="index">
      <p v-if="index < 4">{{ name }}: {{ value }}</p>
    </div> -->
  </div>
</template>
<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";

import { WeatherMain, WeatherModel } from "@/models";

@Component
export default class Weather extends Vue {
  selectedCity = "Mogilev";
  cities = ["Mogilev", "Minsk", "Moscow"];
  selectCityIndex = 0;

  get mapGetters(): WeatherMain {
    return this.$store.getters.getWeatherMain;
  }

  get temp(): number {
    return this.$store.getters.getTemp;
  }

  get name(): string {
    return this.$store.getters.getName;
  }

  calcSelectedCity() {
    this.cities.filter((element, index) => {
      if (index === this.selectCityIndex) {
        this.selectedCity = element;
      }
    });
  }

  @Watch("selectCityIndex")
  private async watchWeather() {
    try {
      this.calcSelectedCity();
      await this.$store.dispatch("GET_WEATHER", this.selectedCity);
    } catch (err) {
      console.log(err);
    }
  }

  async mounted(): Promise<void> {
    try {
      await this.$store.dispatch("GET_WEATHER", this.selectedCity);
      // console.log(this.getFullWeather.weather);
    } catch (err) {
      console.log(err);
    }
  }
}
</script>
<style scoped>
.weather {
  display: inline-block;
  width: 30%;
  margin: 0 30px;
  padding: 20px;
  border: 3px solid red;
  border-radius: 30px;
  font-size: 36px;
  background-color: aquamarine;
}

.cards {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.h2 {
  font-size: 24px;
}
</style>
