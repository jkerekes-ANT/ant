import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';

type WordInputProps = {
  onAdd: (word: string) => void;
  pattern: string;
  onValidateWord: (word: string) => boolean;
};

export const WordInput: React.VFC<WordInputProps> = ({
  onValidateWord,
  onAdd,
  pattern,
}) => {
  const [value, setValue] = useState<string>('');
  const [isInvalid, setInvalid] = useState(false);

  const handleAdd = useCallback(() => {
    const word = pattern + value;
    if (onValidateWord(word)) {
      onAdd(word);
      setValue('');
    } else {
      if (value !== '') {
        setInvalid(true);
      }
    }
  }, [onAdd, onValidateWord, pattern, value]);

  useEffect(() => {
    setInvalid(false);
  }, [value]);

  // useEffect(() => {
  //   setValue(pattern)
  // }, [pattern])

  return (
    <div>
      <InputGroup size="md">
        <InputLeftAddon children={pattern} />
        <Input
          isInvalid={isInvalid}
          pr="4.5rem"
          type="text"
          placeholder="Enter password"
          value={value}
          color={isInvalid? 'red.300': ''}
          onChange={(e) => setValue(e.target.value)}
          onKeyUp={(e) => e.code === 'Enter' && handleAdd()}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleAdd}>
            Add
          </Button>
        </InputRightElement>
      </InputGroup>
    </div>
  );
};
