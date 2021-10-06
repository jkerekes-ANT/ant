import { Box, Link, Text } from '@chakra-ui/react';
import { default as React } from 'react';
import { Link as ReachLink } from 'react-router-dom';

type MainMenuItemProps = {
  link: string;
  active?: boolean;
};

export const MainMenuItem: React.FC<MainMenuItemProps> = ({
  link,
  active,
  children,
}) => {
  return (
    <Box as="li" listStyleType="none">
      <Link as={ReachLink} to={link}>
        <Text fontSize="xl" color={active ? 'yellow.50' : 'gray.500'}>
          {children}
        </Text>
      </Link>
    </Box>
  );
};
