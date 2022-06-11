import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import Header from './components/Header';

const AppLayout: React.FC = () => (
  <Box height="100vh">
    <Header />
    <Outlet />
  </Box>
);

export default AppLayout;
