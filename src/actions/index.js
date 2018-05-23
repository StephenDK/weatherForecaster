import axios from 'axios';
const API_KEY = 'd1fee814e44308fe7ab13b7fd9ca2c6f'; 
// template strings require back ticks (keyboard key left of 1) and ${}
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    // an action creator always returns an object with a type
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}