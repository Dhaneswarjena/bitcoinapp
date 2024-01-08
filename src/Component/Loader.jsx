import React from 'react'
import { Box, Spinner, VStack } from '@chakra-ui/react'
const Loader = () => {
  return (
    <VStack  justifyContent={'center'} height={'90vh'}>
    <Box transform={'scale(3)'}>
    <Spinner size='xl' />
    </Box>
        
    </VStack>
  )
}

export default Loader