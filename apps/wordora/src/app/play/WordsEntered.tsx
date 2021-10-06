import { CheckIcon } from '@chakra-ui/icons';
import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { words } from 'lodash';
import React from 'react';
type WordsEnteredProps = {
  words: Array<string>;
};

export const WordsEntered: React.VFC<WordsEnteredProps> = ({ words }) => (
  <List spacing={3}>
    {words.map((word) => (
      <ListItem key={word}>
        <ListIcon as={CheckIcon} color="green.500" />
        {word}
      </ListItem>
    ))}
  </List>
);
