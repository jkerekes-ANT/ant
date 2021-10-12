import { Box, Button, Center, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { useGameEngine } from './api';
import { PlayArea } from './PlayArea';
import { Timer } from './Timer';

export const PlayPage = () => {
  const {
    isLoading,
    isReady,
    isPlaying,
    isDone,
    score,
    onStart,
    onStop,
    time,
    addPoints,
    gameData,
  } = useGameEngine();

  return (
    <VStack spacing="4" align="stretch">
      {isLoading && <Box>Loading....</Box>}
      {isReady && (
        <Center>
          <Button onClick={onStart}>Start</Button>
        </Center>
      )}
      {/*we know for a fact that when is in playing state we have the data, this is here for typescript*/}
      {isPlaying && gameData && (
        <>
          <HStack align="top" justify="stretch">
            <Box>{score}</Box>
            <Timer time={time} flexGrow={1} />
            <Box flexGrow={0}>
              <Button bg="red.400" onClick={onStop}>
                Stop
              </Button>
            </Box>
          </HStack>
          <PlayArea gameData={gameData} time={time} onAddPoints={addPoints} />
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
