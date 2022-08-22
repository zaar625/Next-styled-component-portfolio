
import styled from "styled-components"
import { motion } from "framer-motion"
import ContactInfo from "../components/contact/contactInfo"
import Header from "../components/header/header"
import ContactComment from "../components/contact/contactComment"
import ContactForm from "../components/contact/contactForm"
import KaKao from "../components/map"
import Head from "next/head"

const ContactContainer = styled.div`
  display: flex;
  flex-direction:column;
  gap: 1rem;
`
const ContactHeader = styled.div`
  display: flex;
  flex-direction:column;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--main-color);

  & h1 {
    font-size: 5rem;
    /* letter-spacing: 0.5rem; */
  }
`
const ContactInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width:1024px){
    gap:2rem;
  }
`
const ContactInfoStyle = styled.div`
  width: 50%;
  border-right: solid 2px rgba(136, 136, 136, 0.448);
`
const ContactFormStyle = styled(ContactInfoStyle)``
const Contact = () => {
  return (
    <>
      <Head>
        <title>About Codevolution</title>
        <meta name="description" content='Free tutorials on web development'></meta>
      </Head>
      <ContactContainer>
        <Header item={['겸손하게 부족한 부분을 채워가며 성장하는 개발자가 되겠습니다.']}/>
        <ContactHeader
          as={motion.div} 
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 , delay: .5}}
        >
          <p>get in touch</p>
          <h1>Contact</h1>
        </ContactHeader>
        <ContactInfoWrapper>
          <ContactInfoStyle>
            <ContactInfo/>
          </ContactInfoStyle>
          <ContactFormStyle>
            <ContactForm/>
          </ContactFormStyle>
        </ContactInfoWrapper>
        <ContactComment/>
        <KaKao/>
      </ContactContainer>
    </>
  )
}

export default Contact