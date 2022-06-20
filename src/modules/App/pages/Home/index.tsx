import React from 'react';
import { Flex } from '@chakra-ui/react';

import LinksList from '../../components/LinksList';

const Home: React.FC = () => (
  <Flex flex="1" justify="center" alignItems="center">
    <LinksList />
  </Flex>
);

export default Home;
