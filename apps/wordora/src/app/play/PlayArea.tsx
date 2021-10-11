import { WordoraGame } from '@ant/api-interfaces';
import { VStack } from '@chakra-ui/react';
import { useWordGame } from './api';
import { WordInput } from './WordInput';
import { WordsEntered } from './WordsEntered';
import { WordStatistics } from './WordStatistics';

type PlayAreaProps = {
  gameData: WordoraGame,
  time: number
}

export const PlayArea:React.VFC<PlayAreaProps> = ({ gameData, time}) => {
  const { words, onValidateWord, onNewWord, pattern, stats } = useWordGame(gameData, time);
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
