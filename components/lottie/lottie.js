import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import animationData from './18123-developer.json'
import styled from 'styled-components'

const LottieContainer = styled.div`
    width: 40%;
`
const Lottie = () => {
    const container = useRef();
    useEffect(()=>{
        console.log(container)
        lottie.loadAnimation({
            container:container.current,
            render:'svg',
            loop:true,
            autoplay:true,
            animationData:animationData
        })
    },[container])
  return (
    <LottieContainer>
        <div ref={container}></div>
    </LottieContainer>
  )
}

export default Lottie