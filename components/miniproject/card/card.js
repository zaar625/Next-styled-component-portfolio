import styled from "styled-components";

// styled
const CardContainer = styled.div`
  border: solid 1px var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  animation: 2s hideCard linear;
  transition: transform 0.5s;
  transform: ${props => props.active ? 'rotateY(0deg)' : 'rotateY(180deg)'};

  & img {
    width: 100%;
    transition: transform 0.5s;
    transform: ${props => props.active ? 'scale(1)':'scale(0)'};
    animation: 2s hideImage linear;
  }
`

const Card = ({item, index, handleClick}) => {

  const itemClass = item.stat ? " active " + item.stat : ""

  return (
      <CardContainer 
        active={itemClass} onClick={() => {handleClick(index)}}>
          <img src={item.img} alt="챔피언 이미지" />
      </CardContainer>
  )
}

export default Card