import { AtSignIcon } from '@chakra-ui/icons';
import { Box, Heading, HStack, useTheme, VStack } from '@chakra-ui/react';

const MyHeading:React.FC = ({children}) => {
  const theme = useTheme();

  return <h2 
    style={{
      color: 'white',
      fontSize: theme.fontSizes.xl
    }}
  >{children}</h2>
}
export const Meniu = () => (
  <HStack spacing="10" bg="brand.900" w="full">
    <AtSignIcon />

    <MyHeading >
      Wordova
    </MyHeading>
  </HStack>
);
