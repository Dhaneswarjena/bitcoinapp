import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import {Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react'
import Loader from './Loader'
import Error from './Error'
import Coincard from './Cointcard'
const Coins = () => {
    const [coins,setcoin]=useState([])
    const [Load,setLoad]=useState(true)
    const [error,seterror]=useState(false)
    const [page,setpage]=useState(1)
    const [currency,setcureency]=useState('inr')
   const currencysymbol=
   currency==='inr'?'₹':currency==='eur'?'€':'$'
   const pagearr=new Array(132).fill(1)
   const changepage=(page)=>{
    setpage(page)
    setLoad(true)
   }
    useEffect(()=>{
       try {
        const exchangeServer1=async()=>{
            const {data}=await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
            setcoin(data)
            setLoad(false)
          }
          exchangeServer1()
       } catch (error) {
        setLoad(false)
        seterror(true)
       }
    },[currency,page])
    if (error) return <Error error={"Error While Fetching Coins"} />;
  return (
    <>
    <Container maxW={['full','container.xl']} >
         {
            Load?<Loader/>:<>
            <RadioGroup value={currency} onChange={setcureency} p={'8'}>
                <HStack spacing={'4'}>
                <Radio value={'inr'}>INR</Radio>
                    <Radio value={'eur'}>EUR</Radio>
                    <Radio value={'usd'}>USD</Radio>
                </HStack>
            </RadioGroup>
            <HStack wrap={'wrap'} justifyContent={'space-evenly'}>

                {
                    coins.map((item,index)=>(
                     <Coincard key={item.id} id={item.id} name={item.name} img={item.image} price={item.current_price} symbol={item.symbol} currencysymbol={currencysymbol}/>
                    ))
                }
            </HStack>
            <HStack overflowX={'auto'}>
                {
                    pagearr.map((item,i)=>(
                        <Button bgColor={'blackAlpha.900'} color={'white'} key={i} onClick={()=>changepage(i+1)}>{i+1}</Button>
                    ))
                }
            </HStack>
            </>
         } 
    </Container>
    </>
  )
}

export default Coins