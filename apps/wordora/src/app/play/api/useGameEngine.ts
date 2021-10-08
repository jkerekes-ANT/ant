import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useAppSettings } from '../../AppSettings';

export enum GameState {
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
    console.log('clear', { timer });
  }
};

export const useGameEngine = () => {
  const { gameTime: GAME_TIME } = useAppSettings();

  const [state, setState] = useState<GameState>(GameState.isReady);
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
    isReady: state === GameState.isReady,
    isPlaying,
    isDone: state === GameState.isDone,
    onStart,
    onStop,
    time,
    state,
    score,
  };
};
