// ThemeContext.js
import React, { createContext, useContext } from "react";
import { theme } from "../assets/Colors/Theme";

const ThemeContext = createContext(theme);

export const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
