import { useState, useEffect } from 'react';

export const Weather = () => {
  const [weather, setWeather] = useState('');
  const [time, setTime] = useState('');

  console.log(time);

  const getTime = (timezone) => {
    const localTime = new Date().getTime();
    const localOffset = new Date().getTimezoneOffset() * 60000;
    const currentUtcTime = localOffset + localTime;
    const cityOffset = currentUtcTime + 1000 * timezone;
    const cityTime = new Date(cityOffset).toTimeString().split('')[0];
    setTime(cityTime[0]);
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
    <div className="">
      {time && (
        <div>
          <div className="absolute left-0 top-0 m-10 font-bebasNeue text-2xl tracking-wider">
            <br />
          </div>
          <div className="absolute  bottom-0 right-0 font-montserra text-4xl m-10">
            {time}
          </div>
        </div>
      )}
    </div>
  );
};
