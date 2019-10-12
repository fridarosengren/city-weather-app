import React, { useState, useEffect } from 'react';
import APIKey from '../config/keys';

const Weather = ({ city }) => {
    const [weather, setWeather] = useState();

    // Call weather API
    useEffect(() => {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${APIKey.weather}`;
        city && fetch(URL).then(res => res.json()).then(
            data => {
                setWeather(data.main.temp);
            },
            error => {
                console.log(error)
            }
        )
    }, [city]) // Only run when city value changes

    return <p>{weather}</p>
}

export default Weather;