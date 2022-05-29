import React from 'react';
import { Outlet } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';

const AppLayout: React.FC = () => (
  <>
    <Flex justify="center" alignItems="center">
      <Text>AppLayout Works!</Text>
    </Flex>
    <Outlet />
  </>
);

export default AppLayout;
