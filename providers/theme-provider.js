"use client";
import { createContext } from "react";

export const ThemeContext = createContext({});

export default function ThemeProvider({ children, site }) {
  return <ThemeContext.Provider value={site}>{children}</ThemeContext.Provider>;
}
