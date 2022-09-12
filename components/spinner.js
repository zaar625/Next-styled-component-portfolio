import styled ,{ keyframes }from 'styled-components'


const KeyFrames = keyframes`
    0% {
        top: 6px;
        height: 51px;
    }
    50%, 100% {
        top: 19px;
        height: 26px;
    }
`;

const Loading = styled.div`
    display: inline-block;
    position: absolute;
    width: 64px;
    height: 64px;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 3rem;
    z-index: 999999;

    & div {
        display: inline-block;
        position: absolute;
        left: 6px;
        width: 13px;
        animation: ${KeyFrames} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;

        &:nth-child(1) {
            left: 6px;
            animation-delay: 0s;
            background: #F6B352;
        }

        &:nth-child(2) {
            left: 26px;
            animation-delay:0.15s;
            background: #FAC70F;
        }

        &:nth-child(3) {
        left: 45px;
        animation-delay:0.3s;
        background: #B8D00A;
        }

        &:nth-child(4) {
        left: 65px;
        animation-delay: 0.45s;
        background: #F68657;
        }
    }
`

const Spinner = () => {
    
  return (  
        <Loading>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Loading>
    ) 
}

export default Spinner