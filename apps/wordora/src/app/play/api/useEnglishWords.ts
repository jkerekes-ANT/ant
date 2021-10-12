import { WordoraGame } from '@ant/api-interfaces';
import { useState, useEffect } from 'react';

const exResponse: WordoraGame = {
  pattern: 'str',
  words: [
    { word: 'so', frequency: 100 },
    { word: 'state', frequency: 35 },
    { word: 'sleep', frequency: 1 },
    { word: 'string', frequency: 10 },
    { word: 'street', frequency: 20 },
  ],
};

export const useEnglishWords = () => {
  const [data, setData] = useState<WordoraGame | undefined>();
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const timer = setTimeout(() => setData(exResponse), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return {
    data,
    error,
  };
};

// const fetcher = (...args: any[]) => fetch(...args).then(res => res.json())
// export const useEnglishWords = () => {
//   const {data, error} =useSWR<WordoraGame>('/api/wordora/' , {revalidateOnFocus: false} );
//   return  {
//     data, error
//   }
// }
