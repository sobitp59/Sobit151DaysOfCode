import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../DB/weather';
const WEATHER_URL_ENDPOINT = 'https://example.com/api/weather';

const Weather = () => {
    const [weather, setWeather] = useState({});
    const [isCelcius, setIsCelcius] = useState(true)
    
    const loadWeather = async () => {
        try {
            const response = await fetchWeather(WEATHER_URL_ENDPOINT);
            setWeather(response.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    const toggleWeather = () => {
        setIsCelcius(prev => !prev)

    }

    useEffect(() => {
        loadWeather()
    }, [])

    const {temperature, humidity, windSpeed} = weather;
    const currentWeather = isCelcius ? `${temperature}C` : `${(temperature * 9/5) + 32}F`
  
    return (
    <div className='box'>
        <h1>weather</h1>
            <div>
                <h2>temperature : {currentWeather}</h2>
                <h2>humidity : {humidity}%</h2>
                <h2>windSpeed : {windSpeed}km/h</h2>
            </div>
        
        <button onClick={toggleWeather}>switch to {isCelcius ? 'fahrenheit' : 'celcius'}</button>
    </div>
  )
}

export default Weather