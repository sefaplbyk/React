import "./App.css";
import { EmojiProvider } from "./Context/Context";
import Header from "./Header/Header";
import List from "./List/List";
import Search from "./Search/Search";
function App() {
  return (
    <EmojiProvider>
      <Header />
      <Search />
      <List />
    </EmojiProvider>
  );
}

export default App;
