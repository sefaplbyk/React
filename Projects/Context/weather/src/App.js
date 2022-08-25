import "./App.css";
import { WeatherProvider } from "./components/context/Context";
import Container from "./components/Container/Container";

function App() {
  return (
    <WeatherProvider>
      <Container></Container>
    </WeatherProvider>
  );
}

export default App;
