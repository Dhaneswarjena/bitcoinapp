import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import {Container, HStack, Heading, Img, Text, VStack } from '@chakra-ui/react'
import Loader from './Loader'
import Error from './Error'
const Exchanges = () => {
    const [exchang,setExchang]=useState([])
    const [Load,setLoad]=useState(true)
    const [error,seterror]=useState(false)
    useEffect(()=>{
       try {
        const exchangeServer=async()=>{
            const {data}=await axios.get(`${server}/exchanges?per_page=250`)
            setExchang(data)
            setLoad(false)
          }
          exchangeServer()
       } catch (error) {
        setLoad(false)
        seterror(true)
       }
    },[])
    if(error) return <Error error={"Something went wrong"}/>
  return (
    <>
    <Container maxW={['full','container.xl']} >
         {
            Load?<Loader/>:<><HStack wrap={'wrap'} justifyContent={'space-evenly'}>

                {
                    exchang.map((item,index)=>(
                     <Exchangeval key={item.id} url={item.url} name={item.name} img={item.image} rank={item.trust_score_rank}/>
                    ))
                }
            </HStack>
            </>
         } 
    </Container>
    </>
  )
}
const Exchangeval=({url,img,name,rank})=>{
  return(
    <a href={url} target={'blank'}>
        <VStack w={'52'} shadow={'lg'} borderRadius={'lg'} p={'8'} transition={'0.5s all'} m={'4'} css={{
            "&:hover":{
                transform:"scale(1.2)"
            }
        }}>
          <Img src={img} alt={name} w={'10'} h={'10'} objectFit={'contain'}/>
          <Heading size={"md"} noOfLines={1}>{rank}</Heading>
          <Text noOfLines={1}>{name}</Text>
        </VStack>
    </a>
  )
}
export default Exchanges