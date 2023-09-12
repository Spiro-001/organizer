"use client";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface AppProviderProps {
  children: ReactNode;
}

interface Options {
  timeNow: Date;
  timeTmr: Date;
}

type AppContextType = {
  options: Options;
  setOptions: Dispatch<SetStateAction<Options>>;
};

export const AppContext = createContext<AppContextType | null>(null);

const AppProvider = ({ children }: AppProviderProps) => {
  const timeNow = new Date();
  const timeTmr = new Date(timeNow);
  timeTmr.setDate(timeTmr.getDate() + 1);
  timeTmr.setHours(0, 0, 0, 0);

  const [options, setOptions] = useState({
    timeNow: timeNow,
    timeTmr: timeTmr,
  });

  return (
    <AppContext.Provider value={{ options, setOptions }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
