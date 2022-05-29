import React from 'react';

import { ChakraProvider } from './ChakraProvider';

type ContextsProps = {
  children: React.ReactNode;
};

const Contexts: React.FC<ContextsProps> = ({ children }) => <ChakraProvider>{children}</ChakraProvider>;

export default Contexts;
