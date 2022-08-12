import styled,{keyframes} from 'styled-components'
import lee from '../../public/lee.svg'
import portfolio from '../../public/portfolio.svg'

const LogoWrapper = styled.div`
    position:relative;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:2rem;

    @media only screen and (max-width: 1024px){
        gap: 1rem;
        justify-content: flex-start;
  }
`

// LogoLee styled component
const TextStrokeAnimation = keyframes`
    to{
        stroke-dashoffset: 0;
    }
`

const TextFillAnimation = keyframes`
    from{
        fill: transparent;
    }
    to{
        fill: var(--main-color);
    }
`

const Lee = styled(lee)`
    position: absolute;
    left: 0;
    top: -2rem;
    transform: rotate(-25deg);
    animation: ${TextFillAnimation} 0.5s ease forwards 4.5s;

    & path {
        stroke: var(--main-color);

        &:nth-child(1){
            stroke-dasharray: 547.05px;
            stroke-dashoffset: 547.05px;
            animation: ${TextStrokeAnimation} 2s ease forwards 0.2;
        }
        &:nth-child(2){
            stroke-dasharray: 250.5px;
            stroke-dashoffset: 250.5px;
            animation: ${TextStrokeAnimation} 2s ease forwards 0.5s;
        }
        &:nth-child(3){
            stroke-dasharray: 165.6px;
            stroke-dashoffset: 165.6px;
            animation: ${TextStrokeAnimation} 2s ease forwards 1s;
        }
    }
    @media only screen and (max-width: 1024px) {
        top:0;
    }
    @media only screen and (max-width: 767px){
        top:-1.2rem;
    }
`
//LogoPortfolio styled component

const Portfolio = styled(portfolio)`
    animation: ${TextFillAnimation} 0.5s ease forwards 4s;

    & path {
        stroke: var(--txt-color);

        &:nth-child(1){
            stroke-dasharray: 547.05px;
            stroke-dashoffset: 547.05px;
            animation: ${TextStrokeAnimation} 1.5s ease forwards 0.2s;
        }
        &:nth-child(2){
            stroke-dasharray: 250.5px;
            stroke-dashoffset: 250.5px;
            animation: ${TextStrokeAnimation}  1.5s ease forwards 0.5s;
        }
        &:nth-child(3){
            stroke-dasharray: 165.6px;
            stroke-dashoffset: 165.6px;
            animation: ${TextStrokeAnimation}  1.5s ease forwards 1s;
        }
        &:nth-child(4){
            stroke-dasharray: 415.1px;
            stroke-dashoffset: 415.1px;
            animation: ${TextStrokeAnimation}  1.5s ease forwards 1.5s;
        }
        &:nth-child(5){
            stroke-dasharray: 457.7px;
            stroke-dashoffset: 457.7px;
            animation: ${TextStrokeAnimation}  1.5s ease forwards 2s;
        }
        &:nth-child(6){
            stroke-dasharray: 250.5px;
            stroke-dashoffset: 250.5px;
            animation: ${TextStrokeAnimation}  1.5s ease forwards 2.5s;
        }
        &:nth-child(7){
            stroke-dasharray: 206.9px;
            stroke-dashoffset: 206.9px;
            animation: ${TextStrokeAnimation}  1.5s ease forwards 3s;
        }
        &:nth-child(8){
            stroke-dasharray: 411.1px;
            stroke-dashoffset: 411.1px;
            animation: ${TextStrokeAnimation}  1.5s ease forwards 3.5s;
        }
        &:nth-child(9){
            stroke-dasharray: 457.71px;
            stroke-dashoffset: 457.71px;
            animation: ${TextStrokeAnimation}  1.5s ease forwards 4s;
        }
    }
`

export const Logo = () => {
  return (
    <LogoWrapper>
        <Lee/>
        <Portfolio/>
    </LogoWrapper>
  )
}

export default Logo
