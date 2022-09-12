import { useState } from 'react';
import styled from 'styled-components';
import Card from './card';

// styled

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows:repeat(4, 1fr);
  gap: 1em;

`
const Cards = () => {

  const [items, setItems] = useState([
    { id: 1, img: './miniPage/game/Seraphine.png', stat: "" },
    { id: 1, img: './miniPage/game/Seraphine.png', stat: "" },
    { id: 2, img: './miniPage/game/Thresh.png', stat: "" },
    { id: 2, img: './miniPage/game/Thresh.png', stat: "" },
    { id: 3, img: './miniPage/game/Vladimir.png', stat: "" },
    { id: 3, img: './miniPage/game/Vladimir.png', stat: "" },
    { id: 4, img: './miniPage/game/Ashe.png', stat: "" },
    { id: 4, img: './miniPage/game/Ashe.png', stat: "" },
    { id: 5, img: './miniPage/game/Veigar.png', stat: "" },
    { id: 5, img: './miniPage/game/Veigar.png', stat: "" },
    { id: 6, img: './miniPage/game/Leona.png', stat: "" },
    { id: 6, img: './miniPage/game/Leona.png', stat: "" },
    { id: 7, img: './miniPage/game/Senna.png', stat: "" },
    { id: 7, img: './miniPage/game/Senna.png', stat: "" },
    { id: 8, img: './miniPage/game/Pantheon.png', stat: "" },
    { id: 8, img: './miniPage/game/Pantheon.png', stat: "" }
].sort(() => Math.random() - 0.5))

const [prev, setPrev] = useState(-1)//카드 이전값

//정답인지 체크하기
function check(current){
    if(items[current].id === items[prev].id){
        items[current].stat = "correct"
        items[prev].stat = "correct"
        setItems([...items])
        setPrev(-1)
    }else{
        items[current].stat = "wrong"
        items[prev].stat = "wrong"
        setItems([...items])
        setTimeout(() => {
            items[current].stat = ""
            items[prev].stat = ""
            setItems([...items])
            setPrev(-1)
        }, 1000)
    }
}
//카드 클릭함수
function handleClick(id){
    if(prev === -1){
        items[id].stat = "active"
        setItems([...items])
        setPrev(id)
    }else{
        check(id)
    }
}

return (
    <CardsContainer>
        { items.map((item, index) => (
            <Card key={index} item={item} index={index} handleClick={handleClick} />
        )) }
    </CardsContainer>
)
}

export default Cards