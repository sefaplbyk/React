import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

//childrenlerimizi bu şekilde aliyoruz.Children(bileşenin içine girilen her türlü tanım(veri,component,nesne))
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  useEffect(() => {
    // localstorage'ye yolluyoruz theme verisini key olarak "theme" aliyoruz value olarak ise theme statesin aliyor
    localStorage.setItem("theme", theme);
  }, [theme]);

  //   statelerimizi bu şekilde value isimli bir değişkene aktarıyoruz
  const values = {
    theme,
    setTheme,
  };

  return (
    // values değişkenini value sabitine tanımlıyoruz ve dönen tüm childrenleri eleman olarak ThemeContext.Provider bileşenine veriyoruz.Bu şekilde tüm children componentlere state yollayıp kontrol edebiliyoruz
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};
// Kendi hook'umuzu oluşturarak contextlerimizi biraz daha yalınlaştırmış olduk ve her kullandığımız componentte iki import etmekten kurtularak kodlarımızı kısalttık
export const useTheme = () => useContext(ThemeContext);
