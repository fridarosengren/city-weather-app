import React from 'react';

const Weather = ({ data }) => {
    // Check if weather data exists
    if (data.main !== undefined) {
        return (
            <div className="flex-item">
                <h2>Väder just nu: </h2>
                <span className="temperature"> {Math.round(data.main.temp)}&#176; </span>
                <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt={data.weather[0].description} /><br />
                <span className="weather-description"> {data.weather[0].description} </span>
            </div>
        )
    } else {
        return <div className="flex-item"><p>{data.message}</p></div>
    }
}

export default Weather;