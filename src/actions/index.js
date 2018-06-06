import axios from 'axios';
const API_KEY = 'd1fee814e44308fe7ab13b7fd9ca2c6f'; 
// template strings require back ticks (keyboard key left of 1) and ${}
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    // an action creator always returns an object with a type
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // Uncomment the console.log to see the action creator request payload
    // console.log('Request', request);

    // Action creators always have to return an action
    return {
        // An action is an object thats always has a type
        type: FETCH_WEATHER,
        payload: request
    };
}