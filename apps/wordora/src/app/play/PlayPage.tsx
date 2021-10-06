import { VStack } from '@chakra-ui/react'
import React from 'react'
import { PlayArea } from './PlayArea'
import { Timer } from './Timer'

export const PlayPage = () => {
    return (
      <VStack spacing="4" align="stretch">
        <Timer />
        <PlayArea />  
      </VStack>
    )
}
