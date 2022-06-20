import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

enum ColorScheme {
  DEFAULT = 'InfoText',
  ORANGE = 'orange.600',
  PURPLE = 'purple.600',
}

type ActualColorSchemeContextData = ColorScheme;

const ActualColorSchemeContext = createContext<ActualColorSchemeContextData>({} as ActualColorSchemeContextData);

type ActualColorSchemeProviderProps = {
  children: React.ReactNode;
};

const ActualColorSchemeProvider: React.FC<ActualColorSchemeProviderProps> = ({ children }) => {
  const [actualColorScheme, setActualColorScheme] = useState<ActualColorSchemeContextData>(ColorScheme.DEFAULT);
  const { pathname, ...location } = useLocation();

  useEffect(() => {
    if (pathname.includes('/tasks')) setActualColorScheme(ColorScheme.ORANGE);
    else if (pathname.includes('/notes')) setActualColorScheme(ColorScheme.PURPLE);
    else setActualColorScheme(ColorScheme.DEFAULT);
  }, [location, pathname]);

  return <ActualColorSchemeContext.Provider value={actualColorScheme}>{children}</ActualColorSchemeContext.Provider>;
};

function useActualColorScheme(): ActualColorSchemeContextData {
  const context = useContext(ActualColorSchemeContext);

  if (!context) {
    throw new Error('useActualColorScheme must be used within a ActualColorSchemeProvider');
  }

  return context;
}

export { useActualColorScheme, ActualColorSchemeProvider };
