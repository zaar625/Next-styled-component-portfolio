import {AiOutlineFastBackward,AiOutlineFastForward,AiOutlinePlayCircle,AiOutlinePauseCircle} from 'react-icons/ai'
import styled from 'styled-components'

const PlayerControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ControllSkipBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #888;
  font-size: 18px;
`
const ControllPlayBtn = styled.button`
  display: flex;
        margin: 0 30px;
        padding: 20px;
        border-radius: 50%;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.8), -4px -4px 10px rgba(255, 255, 255, 0.4), inset -4px -4px 10px rgba(0, 0, 0, 0.4), inset 4px 4px 10px rgba(255, 255, 255, 0.4);
        border: none;
        outline: none;
        background-color: var(--main-color);
        color: #FFF;
        font-size: 24px;
        cursor: pointer;
`
const PlayerControl = (props) => {
  return (
    <PlayerControlContainer className='music__controls'>
    <ControllSkipBtn className='music__controls__skip-btn' onClick={()=>props.SkipSong(false)}>
        <AiOutlineFastBackward/>
    </ControllSkipBtn>
    <ControllPlayBtn className='music__controls__play-btn' onClick={()=>props.setIsPlaying(!props.isPlaying)}>
    {
        props.isPlaying ? (<AiOutlinePauseCircle/>) : (  <AiOutlinePlayCircle/>)
    }
    </ControllPlayBtn>
    <ControllSkipBtn className='music__controls__skip-btn' onClick={()=>props.SkipSong(true)}>
        <AiOutlineFastForward/>
    </ControllSkipBtn>
</PlayerControlContainer>
  )
}

export default PlayerControl