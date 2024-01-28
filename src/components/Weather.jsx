import { useState, useEffect } from 'react';

export const Weather = () => {
  const [weather, setWeather] = useState('');
  console.log(weather);
  useEffect(() => {
    try {
      fetch(
        'http://api.weatherapi.com/v1/current.json?key=94ceaeef5f804101acb30452242801&q=Asuncion&aqi=no'
      )
        .then((response) => response.json())
        .then((data) => setWeather(data));
    } catch (error) {
      console.error(error.message);
    }
  }, []);
  return (
    <div>
      {weather && (
        <div>
          <div>{weather.location.name}</div>
          <div>{weather.location.localtime} </div>{' '}
        </div>
      )}
    </div>
  );
};
