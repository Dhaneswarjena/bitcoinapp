import { Box, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'whiteAlpha.700'} w={'full'} minH={'48'} px={'16'} py={['16','8']}>
    <Stack direction={['column','row']} h={'full'} alignItems={'center'}>
    <VStack w={'full'} alignItems={['center','flex-start']}>
               <Text fontWeight={'bold'}>About Us</Text>
               <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center','left']}>We are the best crypto trading app in india, we provide our guidance at a very less price</Text>
               </VStack>
               <VStack>
                <Image src='https://avatars.githubusercontent.com/u/46029416?v=4' alt="user" style={{borderRadius: '50%',
    height: '100px',
    width: '100px'}}/>
                <Text>Our Founder</Text>
               </VStack>
    </Stack>
      
    </Box>
  )
}

export default Footer