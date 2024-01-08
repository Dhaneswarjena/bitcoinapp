import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import btc from '../Assets/btc.png'

import {motion} from 'framer-motion'
const Home = () => {
  return (
    <Box w={'full'} height={'80vh'} bgColor={'blackAlpha.900'}>
    <motion.div style={{height:'80vh'}} animate={{
      translateY:'20px'
    }}
    transition={{
      duration:1.5,
      repeat:'Infinity',
      repeatType:'reverse'
    }}>
    <Image src={btc} h={'full'} w={'full'} objectFit={'contain'} filter={'grayscale(1)'}/>
    </motion.div>
     
      <Text color={'whiteAlpha.700'} fontSize={'6xl'} fontWeight={'thin'} textAlign={'center'} my={'-20'}>Xcrypto</Text>
    </Box>
  )
}

export default Home