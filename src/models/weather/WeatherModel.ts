export interface WeatherModel {
  base: string;
  clounds: clounds;
  cod: number;
  coord: Coord;
  dt: number;
  id: number;
  main: Main;
  name: string;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: Array<WeatherMain>;
  wind: Wind;
}

interface clounds {
  all: number;
}

interface Coord {
  lat: number;
  lon: number;
}

export interface Main {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface Sys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

export interface WeatherMain {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface Wind {
  deg: number;
  speed: number;
}
