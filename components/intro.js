import styled from "styled-components"
import Image from "next/image"
import Introbg from "../public/aboutPage/mine.jpg"
import { BsBookmarksFill } from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"

const IntroContainer = styled.div`
    & h1 {
        color: var(--main-color);
        text-align: center;
        margin-bottom: 2rem;
    }
`
const ItroWrapper = styled.div`
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media only screen and (max-width: 767px){
        flex-direction: column;
    }
`
const ImgStyling = styled.div`
    width: 16%;
    border-radius:15px;
`
const ItroContent = styled.div`
    & p {
        display: flex;
        line-height: 25px;
        align-items: center;
        margin-bottom: 10px;
    }
`
const Sns = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: end;

    & p {
        display: flex;
        align-items: center;
        font-size: 1.25rem;
        margin-left: 8px;
        font-size: 1rem;

        &:hover {
            color:var(--main-color);
        }

        svg {
            margin-right: 5px;
        }
    }
`
const Intro = () => {
  return (
    <IntroContainer>
        <h1>LEE SANG YOON</h1>
        <ItroWrapper>
            <ImgStyling> <Image src={Introbg} alt="my image"/></ImgStyling>
            <ItroContent>
                <p>
                    안녕하세요. <br/> 프론트엔드 개발자를 꿈꾸며 새로운 길에 도전 중인 이상윤입니다.<br/>
                    고객의 니즈를 찾고 해결해 나가는 것을 좋아합니다.<br/>
                    다양한 고객이 동일한 서비스를 받도록 노력합니다. <br/>
                    다양한 산업 현장에서 크고 작은 불편들이 IT로 해결하는 것처럼 여러 문제들을 해결하는 개발자가 되고 싶습니다. 
                </p>
            </ItroContent>
        </ItroWrapper>
        <Sns>
            <p><AiFillGithub/>Github</p>
            <p><BsBookmarksFill/>TIL</p>
        </Sns>
    </IntroContainer>
  )
}

export default Intro