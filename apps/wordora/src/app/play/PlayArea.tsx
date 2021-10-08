import { VStack } from '@chakra-ui/react';
import { useWordGame } from './api';
import { WordInput } from './WordInput';
import { WordsEntered } from './WordsEntered';
import { WordStatistics } from './WordStatistics';

export const PlayArea = () => {
  const { words, onValidateWord, onNewWord, pattern, stats } = useWordGame();
  return (
    <VStack align="stretch">
      <WordInput
        pattern={pattern}
        onValidateWord={onValidateWord}
        onAdd={onNewWord}
      />
      <WordStatistics stats={stats} />
      <WordsEntered words={words} />
    </VStack>
  );
};
