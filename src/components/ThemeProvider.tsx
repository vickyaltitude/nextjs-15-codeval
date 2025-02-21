"use client";

import { createContext, useContext } from "react";

type Theme = {
  color: {
    primary: string;
    secondary: string;
  };
};

const displayTheme: Theme = {
  color: {
    primary: "darkblue",
    secondary: "grey",
  },
};

const ThemeProvider = createContext<Theme>(displayTheme);

export default function DisplayThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider.Provider value={displayTheme}>
      {children}
    </ThemeProvider.Provider>
  );
}

export const useTheme = () => useContext(ThemeProvider);
