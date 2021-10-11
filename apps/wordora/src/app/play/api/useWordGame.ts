import { WordoraGame } from '@ant/api-interfaces';
import { useMemo, useState } from 'react';
import { usePattern } from '.';

export const useWordGame = (wg: WordoraGame, time: number) => {
  const minLength = 2;
  const enValidWords = useMemo(() => wg.words.map((w) => w.word), [wg.words]);
  const [words, setWords] = useState<Array<string>>([]);

  const { pattern } = usePattern(wg, time);

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
    onValidateWord,
    onNewWord,
    pattern,
    stats,
  };
};
