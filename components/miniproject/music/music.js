import { useState , useEffect} from "react"
import { motion } from "framer-motion";
import styled from "styled-components"
import { CardStyle } from "../../../styles/GlobalStyle";
import Player from "./components/player";


const MusicContainer = styled.div`
  width: 25%;
  ${(props) =>
  props.cardstyle};

  @media only screen and (max-width:1024px){
    width: 100%;
  }
`
const Music = () => {

  const [songs, setSongs] = useState([
    {
      title: "Head Above Water",
      artist: "Avril Lavigne",
      img_src: "/miniPage/music/imgs/avril.jpeg",
      src: "/miniPage/music/mp3/AvrilLavigne.mp3"
    },
    {
      title: "Call Me Maybe",
      artist: "Carly Rae Jepsen",
      img_src: "/miniPage/music/imgs/Carly.jpeg",
      src: "/miniPage/music/mp3/CallMeMaybe.mp3"
    },
    {
      title: "Hola Hola",
      artist: "Kard",
      img_src: "/miniPage/music/imgs/Hola.jpeg",
      src: "/miniPage/music/mp3/KardHola.mp3"
    },
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

    useEffect(()=>{
      setNextSongIndex(()=>{
        if(currentSongIndex + 1 > songs.length -1 ){
          return 0;
        }else {
          return currentSongIndex + 1;
        }
      })
    },[currentSongIndex])

  return (
    <MusicContainer 
      cardstyle={CardStyle}
      as={motion.div} 
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 , delay: .5}}>
       <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </MusicContainer>
  )
}

export default Music