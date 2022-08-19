import Image from "next/image"
import styled from "styled-components"
import DropBox from "../dropbox/dropBox"
import me from '../../public/aboutPage/me.jpg'

const HeaderSideContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const HeaderSideUser = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    @media only screen and (max-width: 1024px){
        margin-bottom: 15px;
    }
`
const ImageWrapper = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    overflow: hidden;
`
const HeaderSide = () => {
  return (
    <HeaderSideContainer>
        <HeaderSideUser>
            <ImageWrapper>
                <Image src={me} alt='My picture'/>
            </ImageWrapper>
            <DropBox/>
        </HeaderSideUser>
    </HeaderSideContainer>
  )
}

export default HeaderSide