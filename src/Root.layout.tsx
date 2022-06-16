import React from 'react';
import { Flex } from '@chakra-ui/react';

import Header from './components/Header';
import Routes from './routes';

const RootLayout: React.FC = () => (
  <Flex height="100vh" direction="column">
    <Header />
    <Routes />
  </Flex>
);

export default RootLayout;
