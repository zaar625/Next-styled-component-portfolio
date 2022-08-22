import styled from 'styled-components'
import Header from '../components/header/header'
import dynamic from 'next/dynamic'
import Music from '../components/miniproject/music/music'
import Weather from '../components/miniproject/weather'

const MiniProjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`
const DynamicGame = dynamic(() => import('../components/miniproject/card/game'), {
  ssr: false,
})

const Mini = () => {
  return (
    <div>
      <Header item={['리액트로 작은 프로젝트를 만들어 보았습니다.']}/>
      <MiniProjectWrapper>
        <Music/>
        <Weather/>
        <DynamicGame/>
      </MiniProjectWrapper>
    </div>
  )
}

export default Mini
