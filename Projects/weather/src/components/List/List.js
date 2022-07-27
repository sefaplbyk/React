import axios from "axios";
import { useWeather } from "../context/Context";
import { useEffect } from "react";

function List() {
  const { city, days, weather, setWeather } = useWeather();
  const key = "b37aa290edaa204b9b97e59e2a1d23a9";

  useEffect(() => {
    const getData = async () => {
      const res = await axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&units=metric&exclude={part}&appid=${key}`
      );
      setWeather(res.data.daily);
    };
    getData();
  }, [city, setWeather]);
  return (
    <div className="days">
      {weather.map((item, i) => {
        return (
          <div className="day" key={i}>
            <div className="day-title">
              {days[new Date(item.dt * 1000).getDay()]}
            </div>
            <span>Current:{Math.round(item.temp["day"])}&deg;</span>
            <img
              className="day-img"
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description.toUpperCase()}
              title={item.weather[0].description.toUpperCase()}
            ></img>
            <div className="day-deg">
              <span className="temp-max">
                Max:{Math.round(item.temp["max"])} &deg;
              </span>
              <span className="temp-min">
                Min:{Math.round(item.temp["min"])} &deg;
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
