import { VStack,  } from '@chakra-ui/layout';
import React from 'react';
import { MainMenu } from './main-menu';

export const PageLayout: React.FC = ({ children }) => {
  return (
    <VStack w="full" h="100vh">
      <MainMenu />
      <VStack w="full" bg="gray.50" p="10" h="full" align="stretch">
        {children}
      </VStack>
    </VStack>
  );
};
