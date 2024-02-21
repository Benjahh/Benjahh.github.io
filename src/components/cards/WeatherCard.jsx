import { useState, useEffect } from 'react';

export const WeatherCard = () => {
  const [weather, setWeather] = useState('');
  const [time, setTime] = useState('');

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
    <>
      {time && (
        <div className="card__border bg-secondAccent ">
          <header className="card__title flex w-full">
            <h1 className="flex self-start flex-col card__svgText">
              <span>Asuncion, </span>
              <span>{weather.name}</span>
            </h1>
          </header>

          <section className="flex justify-between  w-full h-full">
            <div className="flex flex-col self-end items-start  card__svgText">
              <span> {weather.weather[0].main}</span>

              <span> {weather.main.temp} °C</span>
            </div>

            <div className="text-firstAccent self-end font-bebasNeue md:text-4xl text-3xl sm:text-5xl  xl:text-7xl lg:text-5xl ">
              <span>{time}</span>
            </div>
          </section>
        </div>
      )}
    </>
  );
};
