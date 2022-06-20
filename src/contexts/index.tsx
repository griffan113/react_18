import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ChakraProvider } from './ChakraProvider';
import { ActualColorSchemeProvider } from './ActualColorScheme';

type ContextsProps = {
  children: React.ReactNode;
};

const Contexts: React.FC<ContextsProps> = ({ children }) => (
  <Router>
    <ActualColorSchemeProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </ActualColorSchemeProvider>
  </Router>
);

export default Contexts;
