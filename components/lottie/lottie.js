import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import { motion } from 'framer-motion'
import animationData from './18123-developer.json'
import styled from 'styled-components'

const LottieContainer = styled.div`
    width: 40%;

    @media only screen and (max-width: 1024px){
      align-self:flex-end;
    }
`
const Lottie = () => {
    const container = useRef();
    useEffect(()=>{
        
        lottie.loadAnimation({
            container:container.current,
            render:'svg',
            loop:true,
            autoplay:true,
            animationData:animationData
        })
    },[container])
  return (
    <LottieContainer
    as={motion.div} 
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5, delay:1}}
    >
        <div ref={container}></div>
    </LottieContainer>
  )
}

export default Lottie