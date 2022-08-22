import styled from "styled-components"
import { motion } from "framer-motion"
import { CardStyle } from "../../../styles/GlobalStyle"
import Cards from "./cards"

const GameContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: flex-start;
  width: 25%;

  @media only screen and(max-width:1024px){
    width: 100%;
  }

  & h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 2rem 0 ;
    font-size: 1rem;
    color: var(--txt-color);
  }

  ${(props) =>
    props.cardstyle}
`

const Game = () => {
  return (
    <GameContainer 
      cardstyle={CardStyle}
      as={motion.div} 
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 , delay: 1.5}}
      >
    <h2>LOL Card Game</h2>
    <Cards/>
  </GameContainer>
  )
}

export default Game