import React from 'react';
import { Outlet } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

import Header from './components/Header';

const AppLayout: React.FC = () => (
  <Flex height="100vh" direction="column">
    <Header />
    <Outlet />
  </Flex>
);

export default AppLayout;
