import React from 'react';

export const useEnglishWords = () => {
  const [data] = React.useState<Array<string>>([
    'string',
    'state',
    'steak',
    'still',
    'soup',
    'the',
    "of",
    'on',
    'off'
  ]);

  return {
    data,
  };
};
