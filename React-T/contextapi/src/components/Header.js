import { useTheme } from "../Context/ThemeContext";

function Header() {
  // Contextimiz içindeki stateleri burada da aldık ve onClick eventi ile değiştirdik burada değiştiğinde kullanılan tüm componentlerde otomatiik olarak değişiyor
  const { theme, setTheme } = useTheme();
  return (
    <div>
      Active Theme :{theme}
      <br />
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Change Theme
      </button>
    </div>
  );
}

export default Header;
