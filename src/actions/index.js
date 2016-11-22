import axios from 'axios';

const API_KEY = '9346afab96d26ebeabc12e5aa3247f88'; //'b5f30aa6e21e47b72d20e67514f7eff4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
