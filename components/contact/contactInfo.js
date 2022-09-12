import styled from "styled-components"
import { motion } from "framer-motion";
import { BsFillTelephoneFill, BsFillEnvelopeFill,BsFillPinMapFill } from "react-icons/bs";
import { CardStyle } from "../../styles/GlobalStyle"

const ContactInfoContainer = styled.div`
    position: relative;
    display: flex;
    margin: auto;
    flex-direction: column;
    gap: 1rem;
    width: 67%;

    @media only screen and (max-width:1024px){
        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: gray;
            bottom: -1rem;
            left: 0;
        }
    }

    @media only screen and (max-width:767px){
        width: 100%;
    }
`
const ContactInfoIconBox = styled.div`
    display: flex;
    align-items: center;
    font-size: 1rem;
    gap: 1rem;
    color:var(--txt-color);

    ${(props) =>
    props.cardstyle}

    & span {
        font-size: 1.5rem;
        color:var(--txt-color)
    }

`
const ContactInfoIconBoxInner = styled.div`
    border-radius: 50%;
    background-color: var(--main-bg);
    padding: 1rem;
`

const ContactInfo = () => {
  return (
    <ContactInfoContainer
        as={motion.div}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 , delay: .7}}
    >
        <ContactInfoIconBox cardstyle={CardStyle}>
            <ContactInfoIconBoxInner>
                <BsFillTelephoneFill/>
            </ContactInfoIconBoxInner>
            <span>+1040082360</span>
        </ContactInfoIconBox>
        <ContactInfoIconBox cardstyle={CardStyle}>
            <ContactInfoIconBoxInner>
                <BsFillEnvelopeFill/>
            </ContactInfoIconBoxInner>
            <span>zaar@naver.com</span>
        </ContactInfoIconBox>
        <ContactInfoIconBox cardstyle={CardStyle}>
            <ContactInfoIconBoxInner>
                <BsFillPinMapFill/>
            </ContactInfoIconBoxInner>
            <span>Gwanak / Seoul</span>
        </ContactInfoIconBox>
    </ContactInfoContainer>
  )
}

export default ContactInfo