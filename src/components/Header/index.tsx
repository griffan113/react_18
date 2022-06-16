import React from 'react';
import { Flex, IconButton, Text, useColorMode } from '@chakra-ui/react';
import { BsSunFill, BsFillMoonFill } from 'react-icons/bs';

const Header: React.FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex align="center" justify="space-between" p="5">
      <Text fontSize="1.5rem" fontWeight="bold">
        My Things
      </Text>
      <IconButton aria-label="Toggle Theme" icon={colorMode === 'dark' ? <BsSunFill /> : <BsFillMoonFill />} onClick={toggleColorMode} />
    </Flex>
  );
};

export default Header;
