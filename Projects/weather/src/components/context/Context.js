import { createContext, useContext } from "react";
import citiesJSON from "../data/city_of_turkey.json";
import { useState } from "react";
// Context'i oluşturduk
const MainContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);
  //City değerine Default olarak idsi 46 olan şehiri seçtik
  const [city, setCity] = useState(citiesJSON.find((item) => item.id === 46));
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Diğer componentlerde kullanmak istediğimiz tüm verileri yolladık
  const values = {
    city,
    setCity,
    citiesJSON,
    days,
    weather,
    setWeather,
  };
  // componentin içinde olan bütün elemanları children ile aldık
  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};
// Kendi hookumuzu yazdık her yerde defalarca fazladan import işlemi yapmamak için
export const useWeather = () => useContext(MainContext);
