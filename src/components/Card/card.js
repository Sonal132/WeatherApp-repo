import React from 'react';
import { TempConverter } from '../../utilities/allFunc';
import './card.css';

const Card = ({ date, highTemp, lowTemp, icon, precipitation, weatherConditions }) => {
  return (
    <div className="weather-card card shadow ">
      <div className="card-header bg-primary text-white">
        Weather Forecast
      </div>
      <div className="card-body">
        <h5 className="card-title">{date}</h5>
        <div className="weather-details d-flex justify-content-between align-items-center">
          <div className="weather-icon">
            <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={weatherConditions} />
          </div>
          <div className="weather-description">
            <p className="mb-0">{weatherConditions}</p>
            <p className="mb-0">{precipitation} mm Precipitation</p>
          </div>
        </div>
        <div className="temperature-details d-flex justify-content-between align-items-center mt-3">
          <p className="mb-0">High: {TempConverter( highTemp)} °C</p>
          <p className="mb-0">Low: { TempConverter( lowTemp)} °C</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
