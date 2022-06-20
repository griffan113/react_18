import React from 'react';
import { Flex, IconButton, Link, useColorMode } from '@chakra-ui/react';
import { BsSunFill, BsFillMoonFill } from 'react-icons/bs';
import { Link as ReactRouterLink } from 'react-router-dom';

import { useActualColorScheme } from '../../contexts/ActualColorScheme';

const Header: React.FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const actualColorScheme = useActualColorScheme();

  return (
    <Flex align="center" justify="space-between" p="5">
      <Link as={ReactRouterLink} to="/" fontSize="1.5rem" fontWeight="bold" color={actualColorScheme}>
        My Things
      </Link>
      <IconButton
        color={actualColorScheme}
        aria-label="Toggle Theme"
        icon={colorMode === 'dark' ? <BsSunFill /> : <BsFillMoonFill />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Header;
