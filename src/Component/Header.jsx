import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <HStack p={'4'} backgroundColor={'blackAlpha.900'} color={'white'}>
             <Button variant={'unstyled'} mx={'2'}>
                <Link to="/">Home</Link>
             </Button>
             <Button variant={'unstyled'} mx={'2'}>
                <Link to="/coins">Coins</Link>
             </Button>
             <Button variant={'unstyled'} mx={'2'}>
                <Link to="/exchanges">Exchanges</Link>
             </Button>
        </HStack>
    </>
  )
}

export default Header