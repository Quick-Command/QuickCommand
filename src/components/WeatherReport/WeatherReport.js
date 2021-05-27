import './WeatherReport.css';
import React, { useState, useEffect } from 'react';
import { getWeather } from '../../API-calls';
import { formatDate } from '../../utilities';

const WeatherReport = ({ location }) => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    const createConditions = async () => {
      try {
        const response = await getWeather(location);
        setWeather(response.data.attributes);
      } catch {
        throw new Error(`No Weather Available for ${location}`)
      }
    }
    createConditions()
  }, [location])

  return (
    <article>
      {weather ? <div className='report-container'>
        <h4>Conditions in {location} for {formatDate(weather.sunrise)}</h4>
        <h3>{weather.conditions.toUpperCase()}</h3>
        {/* <p>{(new Date(weather.sunrise)).getHour()}</p> */}
        <p>Low: {weather.min_temp.toFixed(0)}º F</p>
        <p>High: {weather.max_temp.toFixed(0)}º F</p>
        <p>Humidity: {weather.humidity}%</p>
        <p>Wind Speed: {weather.wind_speed.toFixed()}mph with gusts of up to {weather.wind_gust.toFixed()}mph</p>
        <p>Estimated Daily Precipitation: {weather.precipitation}in. </p>

      </div> : <p>Loading...</p>}
    </article>
  )
}

export default WeatherReport;
