import { useState, useEffect } from 'react';

export const WeatherCard = () => {
  const [weather, setWeather] = useState('');
  const [time, setTime] = useState('');

  console.log(weather);

  const getTime = (timezone) => {
    const localTime = new Date().getTime();
    const localOffset = new Date().getTimezoneOffset() * 60000;
    const currentUtcTime = localOffset + localTime;
    const cityOffset = currentUtcTime + 1000 * timezone;
    const cityTime = new Date(cityOffset).toTimeString().split('');
    setTime(cityTime.splice(0, 5));
  };

  const fetchWeather = () => {
    try {
      fetch(
        'http://api.openweathermap.org/data/2.5/weather?q=Paraguay&type=hour&id=524901&appid=b787b03041ac4071a60242f0aeb9066f&units=metric'
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          getTime(data.timezone);
          setWeather(data);
        });
    } catch (error) {
      console.error('Error fetching weather:', error.message);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchWeather();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="test-border bg-secondAccent">
      {time && (
        <div>
          <div className="absolute left-0 top-0 m-10 flex  flex-col font-bebasNeue text-4xl ">
            <span>Asuncion, {weather.name}</span>
          </div>
          <div>
            <div className="absolute left-0 bottom-0 m-10 flex flex-col font-bebasNeue text-3xl ">
              <span> {weather.weather[0].main}</span>
              <img
                className=""
                src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                alt=""
              />
              <span>{weather.main.temp} °C</span>
            </div>
          </div>
          <div className="absolute text-firstAccent  bottom-0 right-0 font-bebasNeue text-5xl m-10">
            {time}
          </div>
        </div>
      )}
    </div>
  );
};
