import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useEnglishWords } from '.';
import { useAppSettings } from '../../AppSettings';

export enum GameState {
  isLoading,
  isReady,
  isPlaying,
  isDone,
}
type TimerType = NodeJS.Timeout | undefined;
const stopTimer = (
  timer: TimerType,
  setTimer: Dispatch<SetStateAction<TimerType>>
) => {
  if (timer) {
    clearInterval(timer);
    setTimer(undefined);
  }
};

export const useGameEngine = () => {
  const { gameTime: GAME_TIME } = useAppSettings();
  const [state, setState] = useState<GameState>(GameState.isLoading);
  const { data: gameData } = useEnglishWords();
  const [score, setScore] = useState(0);
  const [time, setTime] = useState<number>(GAME_TIME);
  const [timer, setTimer] = useState<TimerType>();

  const isPlaying = state === GameState.isPlaying;

  const onStart = useCallback(() => {
    setState(GameState.isPlaying);
    setTime(GAME_TIME);

    const newTimer = setInterval(() => {
      setTime((currentTime) => --currentTime);
    }, 1000);

    setTimer((currentTimer) => {
      stopTimer(currentTimer, setTimer);
      return newTimer;
    });
  }, [GAME_TIME]);

  const onStop = useCallback(() => {
    setState(GameState.isDone);
    stopTimer(timer, setTimer);
  }, [timer]);

  const addPoints = useCallback((point: number) => {
    setScore((s) => s + point);
  }, []);

  useEffect(() => {
    if (!gameData) {
      setState(GameState.isLoading);
    } else if (state === GameState.isLoading) {
      setState(GameState.isReady);
    }
  }, [gameData, state]);

  useEffect(() => {
    if (time <= 0) {
      onStop();
    }
  }, [onStop, time]);

  useEffect(
    () => () => {
      stopTimer(timer, setTimer);
    },
    [timer]
  );

  return {
    isLoading: state === GameState.isLoading,
    isReady: state === GameState.isReady,
    isPlaying,
    isDone: state === GameState.isDone,
    addPoints,
    onStart,
    onStop,
    time,
    state,
    score,
    gameData,
  };
};
