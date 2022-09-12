import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CardStyle } from '../../styles/GlobalStyle'
import axios from 'axios';
import clear from '../../public/miniPage/weather/clear.jpeg'
import cloud from '../../public/miniPage/weather/cloud.jpeg'
import rain from '../../public/miniPage/weather/rain.jpeg'
import snow from '../../public/miniPage/weather/snow.jpeg'

const api = {
    key: "52adf1bb16f14bf661b1190e2e4d45db",
    base: "https://api.openweathermap.org/data/2.5/"
}

const locationData = ['Seoul', 'Incheon','Ulsan','Gyeongju','Busan', 'Jeju',]

// 당일 날씨에 따라 배경이미지 변경 함수
const background =(w) => {
    switch(w){
        case "Clear":
            return clear.src;
        case "Clouds":
            return cloud.src;
        case "Rain": 
            return rain.src;
        case "Snow":
            return snow.scr;
        default:
            return 'Not data'
    }
    
}

//style
const WeatherContainer = styled.div`
    display: flex;
    width: 33.3%;

    ${(props) =>
    props.cardstyle}

    @media only screen and (max-width:1024px){
        width: 100%;
    }
`
const WeatherWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.5rem;
    padding: 1rem;
    border-radius:20px;
    background-image: ${({bg}) => `url(${bg})`};
    
    & h2 {
        text-align: center;
    }

    @media only screen and (max-width:1024px){
        width: 80%;
        margin: auto;
    }
    @media only screen and (max-width:767px){
        width: 100%;
    }
`
const WeatherAreas = styled.div`
    display: flex;
    flex-wrap:wrap;
    gap: 1rem;

    & div {
        background-color: var(--main-bg);
        padding: 0.5rem 0.8rem;
        border-radius: 20px;
        color: var(--txt-color);
        font-size: 0.825rem;
        cursor: pointer;

        &:hover {
            color: var(--main-color);
        }
    }
`
const WeatherArea = styled.div`
    text-align: center;
    color: var(--main-color);
    font-weight: bold;
`
const WeatherDate = styled.div`
    font-size: 0.825em;
    text-align: center;
    font-weight: bold;
    color: var(--main-color);
`
const WeatherState = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    & div:first-child{
        border-radius: 10px;
        border: solid 1px rgba(184, 180, 180, 0.644);
        background-color: rgba(156, 156, 156, 0.288);
        padding: 2rem;
    }

    & div:nth-child(2){
        margin: auto;
        font-size: 2rem;
        font-size: bold;
    }
`
const WeatherPre = styled.div`
    display: flex;
    gap: 1rem;
    flex-flow: wrap;
    text-align: center;
    justify-content: space-between;

    & div {
        display: flex;
        flex-direction: column;
    }
`

const Weather = () => {
    const [weather, setWeather] = useState([]);
    const [preweather, setPreWeather] = useState([]);

    //지역 날씨 가져오기
    const weatherFetch = async(location) => {
        const {data} = await axios.get(`${api.base}weather?q=${location}&units=metric&appid=${api.key}`);
        setWeather(data);
        weatherPreFetch(location)
    }

    //예보5일 날씨 가져오기
    const weatherPreFetch = async(location) => {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${api.key}`)
        const res = data.list.filter(it => new RegExp("06:00:00","i").test(it.dt_txt))
        let prediction = []
        res.forEach((item)=>{
            prediction.push(...item.weather)
        })
        setPreWeather(prediction)
    }

    //오늘 날짜 반환
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    useEffect(()=>{
        weatherFetch(locationData[0]);
    },[]);
    
  return (
    <WeatherContainer 
        cardstyle={CardStyle}
        as={motion.div} 
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 , delay: 1}}>
        {
            Object.keys(weather).length !== 0 ? (
                <WeatherWrapper bg={background(weather.weather[0].main)}>
                    <h2>OpenWeatherMap API</h2>
                    <WeatherAreas>
                        {
                            locationData.map((item, index) => (
                                <div key={index} onClick={()=>{weatherFetch(item); weatherPreFetch(item);}}>{item}</div>
                            ))
                        }
                    </WeatherAreas>
                    <WeatherArea>{weather.name}. {weather.sys.country}</WeatherArea>
                    <WeatherDate>{dateBuilder(new Date())}</WeatherDate>
                    <WeatherState>
                        <div> {
                            Object.keys(weather).length === 0 ? '' : weather.main.temp
                        } °c</div>
                        <div>{Object.keys(weather).length === 0 ? '' : weather.weather[0].main}</div>
                    </WeatherState>
                    <WeatherPre>
                    {
                        Object.keys(preweather).length === 0 ? '' : (
                            preweather.map((item, index)=> (
                                <div key={index}>
                                    <span>{new Date(new Date().setDate(new Date().getDate()+(index+1))).getDate()}</span>
                                    <span key={index}>{item.main}</span>
                                    <Image src={`http://openweathermap.org/img/wn/${item.icon}.png`} width={50} height={50} alt='weather icon'/>
                                </div>
                            ))
                        )
                    }
                    </WeatherPre>
                </WeatherWrapper>
            ) : ''
        
        }
    </WeatherContainer>
  )
}

export default Weather




