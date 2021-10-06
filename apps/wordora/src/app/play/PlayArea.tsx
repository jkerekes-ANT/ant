import { VStack } from '@chakra-ui/layout';
import React, { useMemo, useState } from 'react';
import { useEnglishWords } from './useEnglishWors';
import { WordInput } from './WordInput';
import { WordsEntered } from './WordsEntered';
import { WordStatistics } from './WordStatistics';

const useGame = () => {
  const minLength = 2;
  const { data: enValidWords } = useEnglishWords();

  const [words, setWords] = useState<Array<string>>(['the']);

  const pattern = 'o';
  const onValidateWord = (word: string) =>
    !words.find((w) => w === word) && !!enValidWords.find((w) => w === word);
  const onNewWord = (w: string) => {
    if (onValidateWord(w)) {
      setWords([...words, w]);
    }
  };
  const stats = useMemo(
    () =>
  //    Array.from({ length: 10 - minLength }, (_) => 0).map(( _, idx) => words.filter(word => word.length ===idx +1).length
      words.reduce<Array<number>>(
        (acc, word) => {
          const idx =
            word.length > 10 ? 10 - minLength : word.length - minLength;
          return acc.map((v, k) => (idx === k ? v + 1 : v));
        },
        Array.from({ length: 10 - minLength }, (_) => 0)
      ),
    [words]
  );

  return {
    words,
    onNewWord,
    pattern,
    onValidateWord,
    stats,
  };
};

export const PlayArea = () => {
  const { words, onValidateWord, onNewWord, pattern, stats } = useGame();

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
