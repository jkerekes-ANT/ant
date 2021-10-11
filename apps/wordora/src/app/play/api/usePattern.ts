import { WordoraGame } from '@ant/api-interfaces';
import { useEffect, useMemo, useState } from 'react';
import { useAppSettings } from '../../AppSettings';

export const usePattern = (wg: WordoraGame, time: number) => {
  const { gameTime } = useAppSettings();
  const [pattern, setPattern] = useState<string>('');

  const patternLength: number = useMemo(() => Math.ceil(time/(gameTime/3)), [gameTime, time])

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
