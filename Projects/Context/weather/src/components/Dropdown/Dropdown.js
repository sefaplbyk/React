import { useWeather } from "../context/Context";

function Dropdown() {
  const { citiesJSON, city, setCity } = useWeather();
  const changeCity = (e) => {
    citiesJSON.filter((item) => {
      if (item.name === e.target.value) {
        setCity(item);
      }
    });
  };
  return (
    <div className="select-box">
      <select name="cities" id="cities" value={city.name} onChange={changeCity}>
        {citiesJSON.map((item, i) => {
          return <option key={i}>{item.name}</option>;
        })}
      </select>
    </div>
  );
}

export default Dropdown;
