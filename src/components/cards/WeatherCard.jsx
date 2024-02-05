import { useState, useEffect } from "react";

export const WeatherCard = () => {
  const [weather, setWeather] = useState("");
  const [time, setTime] = useState("");

  const getTime = (timezone) => {
    const localTime = new Date().getTime();
    const localOffset = new Date().getTimezoneOffset() * 60000;
    const currentUtcTime = localOffset + localTime;
    const cityOffset = currentUtcTime + 1000 * timezone;
    const cityTime = new Date(cityOffset).toTimeString().split("");
    setTime(cityTime.splice(0, 5));
  };

  const fetchWeather = () => {
    try {
      fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=Paraguay&type=hour&id=524901&appid=b787b03041ac4071a60242f0aeb9066f&units=metric"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          getTime(data.timezone);
          setWeather(data);
        });
    } catch (error) {
      console.error("Error fetching weather:", error.message);
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
          <header className="card__title ">
            <h1 className="flex items-start  flex-col card__svgText">
              Asuncion, <span>{weather.name}</span>
            </h1>
          </header>

          <section className="flex justify-between  w-full h-full">
            <p className="flex flex-col self-end card__svgText">
              <span> {weather.weather[0].main}</span>

              <span> {weather.main.temp} °C</span>
            </p>

            <div className="text-firstAccent self-end font-bebasNeue md:text-3xl text-2xl lg:text-4xl ">
              <span>{time}</span>
            </div>
          </section>
        </div>
      )}
    </>
  );
};
