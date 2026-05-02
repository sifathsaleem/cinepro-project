import { createContext, useState, useEffect } from "react";

const MovieTheme = createContext();

export const ThemeProvider = ({ children }) => {
  const theme = JSON.parse(localStorage.getItem("theme")) || false;
  const [isDark, setDark] = useState(theme);

  const toggleTheme = () => {
    setDark(!isDark);
    localStorage.setItem("theme", !isDark);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("theme"))
    
    if(theme) {
      document.documentElement.classList.add("dark");
    }
    setDark(theme);
  }, []);

  return (
    <MovieTheme.Provider
      value={{
        isDark,
        toggleTheme,
      }}
    >
      {children}
    </MovieTheme.Provider>
  );
};

export default MovieTheme;
