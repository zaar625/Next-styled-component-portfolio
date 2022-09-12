import Image from "next/image"
import styled from "styled-components"
import DropBox from "../dropbox/dropBox"
import me from '../../public/aboutPage/me.jpg'

const HeaderSideContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media only screen and (max-width: 1024px){
        display: ${props => props.state ? 'block' : 'none'};
    }
`
const HeaderSideUser = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    @media only screen and (max-width: 1024px){
        /* display: none; */
        margin-bottom: 15px;
    }
`
const ImageWrapper = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    overflow: hidden;
`
const HeaderSide = ({state}) => {
  return (
    <HeaderSideContainer state={state}>
        <HeaderSideUser>
            <ImageWrapper>
                <Image src={me} alt='My picture'/>
            </ImageWrapper>
            <DropBox/>
        </HeaderSideUser>
        <div>
            <p>반갑습니다. <br/>저의 사이트에 오신걸 환영합니다.</p>
        </div>
    </HeaderSideContainer>
  )
}

export default HeaderSide