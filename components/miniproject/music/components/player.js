import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import PlayerDetail from './playerDetail'
import PlayerControl from './playerControl'

// styled
const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media only screen and(max-width:1024px){
    width: 80%;
  }
`

const Player = (props) => {

  const audioEl = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(()=>{
    if(isPlaying){
        audioEl.current.play();
    }else{
        audioEl.current.pause();
    }
  })

const SkipSong = (forwards = true) => {
  if(forwards){
      props.setCurrentSongIndex(()=>{
          let temp = props.currentSongIndex;
          temp++;

          if(temp > props.songs.length - 1){
              temp = 0;
          }
      return temp;
      })
  }else {
      props.setCurrentSongIndex(()=>{
          let temp = props.currentSongIndex;
          temp--;

          if(temp < 0){
              temp = props.songs.length -1;
          }
      return temp;
      })
  }   
}
  
  return (
    <PlayerContainer>
      <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
      <h4>Music Player</h4>
      <PlayerDetail song={props.songs[props.currentSongIndex]}/>
        <PlayerControl 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        SkipSong={SkipSong}/>
        <p><strong>Next up: </strong> {props.songs[props.nextSongIndex].title} by {props.songs.artist}</p>
    </PlayerContainer>
  )
}

export default Player