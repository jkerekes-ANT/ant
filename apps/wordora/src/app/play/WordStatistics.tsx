import {
  CircularProgress,
  CircularProgressLabel,
  HStack,
} from '@chakra-ui/react';
import React from 'react';

type WordStatisticProps = {
  stats: Array<number>;
};

const maxCount = 5;

export const WordStatistics: React.VFC<WordStatisticProps> = ({ stats }) => {
    console.log({stats})
  return (
    <HStack>
      {stats.map((wordCount, idx) => {
        const progress = (wordCount * 100) / maxCount;
        return (
          <CircularProgress
            key={`key-${idx}`}
            value={progress}
            color="green.400"
          >
            <CircularProgressLabel>{progress}%</CircularProgressLabel>
          </CircularProgress>
        );
      })}
    </HStack>
  );
};
