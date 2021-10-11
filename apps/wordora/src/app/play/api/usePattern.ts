import { WordoraGame } from '@ant/api-interfaces';
import { useEffect, useMemo, useState } from 'react';
import { useAppSettings } from '../../AppSettings';

export const usePattern = (wg: WordoraGame, time: number) => {
  const { gameTime } = useAppSettings();
  const [pattern, setPattern] = useState<string>('');
  const patternLength: number = useMemo(() => {
    const progress = ((gameTime- time) * 100) / gameTime;
    if (progress > 66) {
      return wg.pattern.length - 2;
    } else if (progress > 33) {
      return wg.pattern.length - 1;
    }
    return wg.pattern.length;
  }, [gameTime, time, wg.pattern.length]);

  useEffect(() => {
    setPattern(wg.pattern);
  }, [wg]);

  useEffect(() => {
    setPattern(wg.pattern.slice(0, patternLength));
  }, [patternLength, wg.pattern]);

  return {
    pattern,
  };
};
