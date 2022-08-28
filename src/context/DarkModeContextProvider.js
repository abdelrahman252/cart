import { createContext, useReducer } from "react";
import React from "react";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [dark, dispatchDark] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: dark.darkMode, dispatchDark }}>
      {children}
    </DarkModeContext.Provider>
  );
};
