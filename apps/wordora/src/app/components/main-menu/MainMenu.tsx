import { Box, Heading, HStack, Link } from '@chakra-ui/react';
import React from 'react';
import { Link as ReachLink } from 'react-router-dom';
import { MainMenuItem } from './MainMenuItem';

export const MainMenu = () => {
  return (
    <HStack
      as="nav"
      bg="orange.900"
      w="full"
      color="orange.50"
      p="10"
      align="center"
      spacing="10"
    >
      <Heading as="h1" size="xl">
        Wordora
      </Heading>
      <HStack as="ul" spacing="4">
        <MainMenuItem link="/home">Dashboard</MainMenuItem>
        <MainMenuItem link="/play" active>Play</MainMenuItem>
      </HStack>
    </HStack>
  );
};
