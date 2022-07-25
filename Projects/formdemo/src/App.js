import { useState } from "react";
import "./App.css";
import Informations from "./Components/Informations/Informations";
import Login from "./Components/Login/Login";
import Recommend from "./Components/Recommend/Recommend";
import List from "./Components/LPage";

function App() {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      {counter === 0 && (
        <Login
          data={data}
          setData={setData}
          setCounter={setCounter}
          counter={counter}
        />
      )}
      {counter === 1 && (
        <Informations
          setCounter={setCounter}
          counter={counter}
          data={data}
          setData={setData}
        />
      )}
      {counter === 2 && (
        <Recommend
          data={data}
          setData={setData}
          setCounter={setCounter}
          counter={counter}
        />
      )}
      {counter === 3 && <List data={data} setData={setData} />}
    </div>
  );
}
export default App;
