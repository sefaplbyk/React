import Button from "./Button";
import Header from "./Header";
import { useTheme } from "../Context/ThemeContext";
import Profile from "./Profile";
function Container() {
  // Context componentten temayı aldık ve div'e class olarak ekledik state değiştiğinde o da değişiyor ve bu şekilde temayı değiştirebiliyoruz
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Header />
      <hr />
      <Button />
      <hr />
      <Profile />
    </div>
  );
}

export default Container;
