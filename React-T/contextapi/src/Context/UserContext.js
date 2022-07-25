import { createContext, useContext, useState } from "react";

const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const values = {
    user,
    setUser,
  };
  return <userContext.Provider value={values}>{children}</userContext.Provider>;
};

// Kendi hook'umuzu oluşturarak contextlerimizi biraz daha yalınlaştırmış olduk ve her kullandığımız componentte iki import etmekten kurtularak kodlarımızı kısalttık
export const useUser = () => useContext(userContext);
