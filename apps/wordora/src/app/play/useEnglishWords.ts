import React from 'react';

export const useEnglishWords = () => {
  const [data] = React.useState<Array<string>>([
    'string',
    'strict',
    'street',
    'state',
    'steak',
    'still',
    'soup',
    'the',
    'of',
    'on',
    'off',
  ]);

  return {
    data,
  };
};

export const getName = (fname: string, lname: string) => `${fname} + ${lname}`;

export const add = (a: number, b: number) => a + b;
