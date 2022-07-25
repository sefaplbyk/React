import { useTheme } from "../Context/ThemeContext";

function Button() {
  // kendi oluşturduğumuz hooku çağırıp arkada şu işlemi yaptıyoruz=>useContext hook'una ThemeContext componentini veriyoruz ve o componentten dönen tüm statelere bu şekilde erişebiliyoruz
  const { theme, setTheme } = useTheme();
  return (
    <div>
      Active Theme : {theme}
      <br />
      {/* theme'ya burada değiştirdiğimizde eş zamanlı olarak o state'yi alan her yerde değişiyor */}
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Change Theme
      </button>
    </div>
  );
}

export default Button;
