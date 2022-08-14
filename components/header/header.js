import { useRouter } from "next/router"
import styled from "styled-components";
import HeaderSide from "./headerSide";
let ReactRotating = require('react-rotating-text')

const HeaderCotainer = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
`
const HeaderTitle = styled.h1`
    margin-bottom: 10px;

    @media only screen and (max-width: 767px){
        font-size: 1.5rem;
    }
`
const HeaderSubTitle = styled.div`
    font-size: 1.5rem;

    @media only screen and (max-width: 767px){
        font-size: 1rem;
    }
    & span{
        margin-right: 10px;
    }
`
const Header = (props) => {
    const router = useRouter();
  return (
    <HeaderCotainer>
        <HeaderTitle>
            안녕하세요.
            <HeaderSubTitle>
                <ReactRotating 
                    typingInterval={80}
                    items={props.item}/>
                    {
                        router.pathname === '/' ? (<span>프론트앤드 개발자를 꿈꾸는 이상윤 입니다.</span>) : '' 
                    }
            </HeaderSubTitle>
        </HeaderTitle>
        <HeaderSide/>
    </HeaderCotainer>
  )
}

export default Header