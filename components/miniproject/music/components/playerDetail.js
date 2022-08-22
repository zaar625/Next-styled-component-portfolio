import React from 'react'
import styled from 'styled-components'

//styled
const PlayerDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  & h3 {
    color: #EEE;
    font-size: 1.25rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.8), -2px -2px 4px rgba(255,255,255,0.4);
    text-align: center;
    margin-bottom: 10px;
  }
`
const MusicDetailImage = styled.div`
  margin: auto;
  width: 70%;

  & img {
    width: 100%;
    border-radius: 50%;
    margin: auto;
  }
`
const PlayerDetail = (props) => {
  return (
    <PlayerDetailContainer>
      <MusicDetailImage>
          <img src={props.song.img_src} alt='song Image'/>
      </MusicDetailImage>
      <h3>{props.song.title}</h3>
      <h4>{props.song.artist}</h4>
    </PlayerDetailContainer>
  )
}

export default PlayerDetail