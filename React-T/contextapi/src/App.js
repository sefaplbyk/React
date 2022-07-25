import "./App.css";
import Container from "./components/Container";

import { ThemeProvider } from "./Context/ThemeContext";
import { UserProvider } from "./Context/UserContext";

function App() {
  return (
    <ThemeProvider>
      {/* userprovider themeprovider'i de kullanabilmiş oluyor bu şekilde */}
      <UserProvider>
        <Container />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
