import { createContext, useContext, useState } from 'react';

type AppSettingsContext = {
  gameTime: number;
  setGameTime: (t: number) => void;
};

const defaultContextValues: AppSettingsContext = {
  gameTime: 60,
  setGameTime: () => null,
};

const appSettingsContext =
  createContext<AppSettingsContext>(defaultContextValues);

export const useAppSettings = () => useContext(appSettingsContext);




export const AppSettingsProvider: React.FC = ({ children }) => {
  const [gameTime, setGameTime] = useState(defaultContextValues.gameTime);

  return (
    <appSettingsContext.Provider value={{ gameTime, setGameTime }}>
      {children}
    </appSettingsContext.Provider>
  );
};
