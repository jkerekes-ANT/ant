import { Box, Button, Center, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { PlayArea } from './PlayArea';
import { Timer } from './Timer';
import { useGameEngine } from './api';

export const PlayPage = () => {
  const { isReady, isPlaying, isDone, score, onStart, onStop, time } =
    useGameEngine();

  return (
    <VStack spacing="4" align="stretch">
      {isReady && (
        <Center>
          s<Button onClick={onStart}>Start</Button>
        </Center>
      )}
      {isPlaying && (
        <>
          <HStack align="top" justify="stretch">
            <Timer time={time} flexGrow={1} />
            <Box flexGrow={0}>
              <Button bg="red.400" onClick={onStop}>
                Stop
              </Button>
            </Box>
          </HStack>
          <PlayArea />
        </>
      )}
      {isDone && (
        <VStack>
          <Box> Score: {score}</Box>
          <Button onClick={onStart}>Start new game</Button>
        </VStack>
      )}
    </VStack>
  );
};
