import { Badge, Box, Button, Container, HStack, Image, Progress, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { server } from '../index'
import axios from 'axios'
import Error from './Error'
import Chartjs from './Chartjs'
const CoinDetails = () => {
    const [coin,setcoin]=useState({})
    const [Load,setLoad]=useState(true)
    const [error,seterror]=useState(false)
    const [currency,setcureency]=useState('inr')
    const[chatval,setchantval]=useState([])
    const[days,setdays]=useState('24h')
    const param=useParams()
    const btns=['24h','7d','14d','30d','60d','200d','365d','max']
    const switchchatval=(val)=>{
  switch (val) {
    case '24h':
      setdays('24h')
      setLoad(true)
      break;
      case '7d':
        setdays('7d')
        setLoad(true)
        break;
        case '14d':
          setdays('14d')
          setLoad(true)
          break;
          case '30d':
            setdays('30d')
            setLoad(true)
            break;
          
              case '60d':
                setdays('60d')
                setLoad(true)
                break;
                case '200d':
                  setdays('200d')
                  setLoad(true)
                  break;
                  case '1y':
                    setdays('1y')
                    setLoad(true)
                    break;
                    case 'max':
                    setdays('max')
                    setLoad(true)
                    break;
    default:
        setdays('24h')
        setLoad(true)
        break;
  }
    }
    const currencysymbol=
    currency==='inr'?'₹':currency==='eur'?'€':'$'
    useEffect(()=>{
        try {
         const exchangeServ=async()=>{
             const {data}=await axios.get(`${server}/coins/${param.id}`);
             const {data:chartdata}=await axios.get(`${server}/coins/${param.id}/market_chart?vs_currency=${currency}&days=${days}`);
             setcoin(data)
             setchantval(chartdata.prices)
             setLoad(false)
           }
           exchangeServ()
        } catch (error) {
         setLoad(false)
         seterror(true)
        }
     },[param.id,currency,days])
     if (error) return <Error error={"Error While Fetching Coins"} />;
  return (
    <>
        <Container maxW={'container.xl'}>
          {
            Load?<Loader /> :<>
            <Box borderWidth={'1'} w={'full'}>
              <Chartjs currency={currencysymbol} arr={chatval} days={days}/>
            </Box>
            <HStack p={'4'} wrap={'wrap'} overflowX={'auto'}>
            {
              btns.map((itemval,i)=>(
                <Button onClick={()=>switchchatval(itemval)} key={i}>{itemval}</Button>
              ))
            }
            </HStack>
           
            <RadioGroup value={currency} onChange={setcureency} p={'8'}>
                <HStack spacing={'4'}>
                    <Radio value={'inr'}>INR</Radio>
                    <Radio value={'eur'}>EUR</Radio>
                    <Radio value={'usd'}>USD</Radio>
                </HStack>
            </RadioGroup>
              
                  <VStack spacing={'4'} p={'16'} alignItems={'flex-start'}>
                    
                    <Image src={coin.image.large} w={'16'} h={'16'} objectFit={'contain'}/>
                    <Text fontSize={'small'} opacity={'0.7'} alignSelf={'center'}>
                       Last update on {Date(coin.market_data.last_updated).split('G')[0]}
                    </Text>
                    <Stat>
                        <StatLabel>{coin.name}</StatLabel>
                        <StatNumber>{currencysymbol}{coin.market_data.current_price[currency]}</StatNumber>
                        <StatHelpText>
                            <StatArrow type={coin.market_data.price_change_percentage_24h>0?'increase':'decrease'} />
                               {
                                coin.market_data.price_change_percentage_24h
                               }%
                        </StatHelpText>
                    </Stat>
                    <Badge bgColor={'blackAlpha.900'} fontSize={'2xl'} color={'white'}>
                        {
                            `#${coin.market_data.market_cap_rank}`
                        }
                    </Badge>
                    <Custompr high={`${currencysymbol}${coin.market_data.high_24h[currency]}`} low={`${currencysymbol}${coin.market_data.low_24h[currency]}`}/>
                 <Box w={'full'} p={"4"}>
                  <Item title={'Max Supply'} value={coin.market_data.max_supply}/>
                  <Item title={'Circulating Supply'} value={coin.market_data.circulating_supply}/>
                  <Item title={'Market Cap'} value={`${currencysymbol}${coin.market_data.market_cap[currency]}`}/>
                  <Item title={'All Time Low'} value={`${currencysymbol}${coin.market_data.atl[currency]}`}/>
                  <Item title={'All Time High'} value={`${currencysymbol}${coin.market_data.ath[currency]}`}/>
                 </Box>
                  </VStack>
               
            </>
          }
        </Container>
    </>
  )
}
const Item=({title,value})=>{
    return(
        <HStack justifyContent={'space-between'} w={'full'} my={'4'}>
            <Text fontFamily={'Bebas Neue'} letterSpacing={'widest'}>{title}</Text>
            <Text>{value}</Text>
        </HStack>
    )
}
const Custompr=({high,low})=>{
  return(
    <VStack w={'full'}>
        <Progress value={'50'} w={'full'} colorScheme='teal'/>
        <HStack justify={'space-between'} w={'full'}>
          <Badge children={low} colorScheme='red'/>
          <Text fontSize={'small'}>24H range</Text>
          <Badge children={high} colorScheme='green'/>
        </HStack>
    </VStack>
  )
}
export default CoinDetails