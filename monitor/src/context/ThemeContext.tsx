import { createContext } from "react";

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  setDarkMode: () => {
    console.error("setDarkMode function must be overridden");
  },
});

export default ThemeContext;
