import { Center } from '@chakra-ui/layout';
import {
  CircularProgress,
  CircularProgressLabel,
  HTMLChakraProps,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAppSettings } from '../AppSettings';

type TimerProps = {
  time: number;
} & HTMLChakraProps<'div'>;

export const Timer: React.VFC<TimerProps> = ({ time, ...props }) => {
  const { gameTime } = useAppSettings();
  const progress = 100 - (time * 100) / gameTime;

  return (
    <Center {...props}>
      <CircularProgress value={progress} color="blue.400" size="8rem">
        <CircularProgressLabel>
          {time}
        </CircularProgressLabel>
      </CircularProgress>
    </Center>
  );
};
