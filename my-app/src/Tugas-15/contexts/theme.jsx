import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const handleChange = (value) =>
    setIsLightTheme(parseInt(value) === 1 ? true : false);

  return (
    <ThemeContext.Provider value={{ isLightTheme, onChange: handleChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
