import React from 'react';
import { Button, Wrap, WrapItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LinksList: React.FC = () => (
  <Wrap spacing="5">
    <WrapItem>
      <Link to="/tasks">
        <Button h="10rem" w="15rem">
          Tasks
        </Button>
      </Link>
    </WrapItem>
    <WrapItem>
      <Link to="/notes">
        <Button h="10rem" w="15rem">
          Notes
        </Button>
      </Link>
    </WrapItem>
  </Wrap>
);

export default LinksList;
