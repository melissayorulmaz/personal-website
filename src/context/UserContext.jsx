import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useLocalStorage('s11d3', false);

    return <UserContext.Provider value={{darkMode, setDarkMode}}>
          {children}
      </UserContext.Provider>;
   };
   