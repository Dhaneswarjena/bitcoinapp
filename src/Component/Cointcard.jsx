import {Heading, Img, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
const Coincard=({id,img,name,price,symbol,currencysymbol="inr"})=>{
    return(
      <Link to={`/coin/${id}`} >
          <VStack w={'52'} shadow={'lg'} borderRadius={'lg'} p={'8'} transition={'0.5s all'} m={'4'} css={{
              "&:hover":{
                  transform:"scale(1.2)"
              }
          }}>
            <Img src={img} alt={name} w={'10'} h={'10'} objectFit={'contain'}/>
            <Heading size={"md"} noOfLines={1}>{symbol}</Heading>
            <Text noOfLines={1}>{name}</Text>
            <Text noOfLines={1}>{price?`${currencysymbol}${price}`:'NA'}</Text>
          </VStack>
      </Link>
    )
  }
  export default Coincard;