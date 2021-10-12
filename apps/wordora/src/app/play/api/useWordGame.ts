import { WordoraGame } from '@ant/api-interfaces';
import { useMemo, useState } from 'react';
import { usePattern } from '.';

const getStatsPos = (wordLength: number, minLength: number) =>
  wordLength > 10 ? 10 - minLength : wordLength - minLength;

const calculatePoints = (
  word: string,
  stats: Array<number>,
  minLength: number
): number => {
  const wordLength = word.length;
  let points = 100 + wordLength * 5;
  const idx = getStatsPos(word.length, minLength);

  if (stats[idx] === 4) {
    points += 500;
  }

  return points;
};

export const useWordGame = (
  wg: WordoraGame,
  time: number,
  onAddPoints: (p: number) => void
) => {
  const minLength = 2;
  const enValidWords = useMemo(() => wg.words.map((w) => w.word), [wg.words]);
  const [words, setWords] = useState<Array<string>>([]);

  const { pattern } = usePattern(wg, time);

  const stats = useMemo<Array<number>>(
    () =>
      //    Array.from({ length: 10 - minLength }, (_) => 0).map(( _, idx) => words.filter(word => word.length ===idx +1).length
      words.reduce<Array<number>>(
        (acc, word) => {
          const idx = getStatsPos(word.length, minLength);
          return acc.map((v, k) => (idx === k ? v + 1 : v));
        },
        Array.from({ length: 10 - minLength }, (_) => 0)
      ),
    [words]
  );

  const onValidateWord = (word: string) =>
    !words.find((w) => w === word) && !!enValidWords.find((w) => w === word);

  const onNewWord = (w: string) => {
    if (onValidateWord(w)) {
      setWords([...words, w]);
      onAddPoints(calculatePoints(w, stats, minLength));
    }
  };

  return {
    words,
    onValidateWord,
    onNewWord,
    pattern,
    stats,
  };
};
