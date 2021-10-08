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
export const getWordCount = (maxCount: number, wordCount: number) => {
  let count = wordCount || 0;
  const countString = count.toString();

  if (parseInt(countString) !== count) {
    count = parseInt(countString) || 0;
  }

  return Math.min(Math.max(count, 0), maxCount);
};

export const WordStatistics: React.VFC<WordStatisticProps> = ({ stats }) => {
  return (
    <HStack>
      {stats.map((wordCount, idx) => {
        const count = getWordCount(maxCount, wordCount);
        const progress = (count * 100) / maxCount;
        return (
          <CircularProgress
            key={`key-${idx}`}
            value={progress}
            color="green.400"
          >
            <CircularProgressLabel>{`${count}/${maxCount}`}</CircularProgressLabel>
          </CircularProgress>
        );
      })}
    </HStack>
  );
};
