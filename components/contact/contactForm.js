import { useState } from 'react'
import styled from 'styled-components'
import { CardStyle } from '../../styles/GlobalStyle'

const ContactFormContainer = styled.div`
    margin: auto;

    ${(props) =>
    props.cardstyle}
`

const ContactFormGroup = styled.div`
    width: 100%;
    margin-bottom: 1rem;

    & label {
        font-size: 1rem;
    }

    & label input, textarea {
        margin-top: 1rem;
    }
`
const Input = styled.input.attrs(props => ({
    type: props.type,
    id:props.id,
    value:props.value,
  }))`
    width: 100%;
    font-size: 0.825rem;
    padding: 1.2rem;
    color: gray;
    background-color: var(--main-bg);
    outline: none;
    border:none;
    border-radius:8px;

    &:focus {
        border: solid 1px var(--main-color);
    }
  `
const TextArea = styled.textarea.attrs(props => ({
    type: props.type,
    id:props.id,
    value:props.value,
  }))`
    width: 100%;
    font-size: 0.825rem;
    padding: 1.2rem;
    color: gray;
    background-color: var(--main-bg);
    outline: none;
    border:none;
    border-radius:8px;

    &:focus {
        border: solid 1px var(--main-color);
    }
 `
const Button = styled.button.attrs(props => ({
    type:props.type
}))`
    background-color: var(--main-bg);
    color:var(--txt-color);
    font-size: 1rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem;
    border-radius: 8px;
    cursor:pointer;

    &:hover {
        color:var(--main-color);
    }
`

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    

  return (
    <ContactFormContainer cardstyle={CardStyle}>
        <form method='post'>
            <ContactFormGroup>
                <label htmlFor='name'>
                    Your name
                    <Input type='text' id='name' value={name} onChange={e => setName(e.target.value)}/>
                </label>
            </ContactFormGroup>
            <ContactFormGroup>
                <label htmlFor='email'>
                    Your Email
                    <Input value={email} type='email' id='email' onChange={e => setEmail(e.target.value)}/>
                </label>
            </ContactFormGroup>
            <ContactFormGroup>
                <label htmlFor='message'>
                    Your Message
                    <TextArea value={message} type='text' id='message' onChange={e => setMessage(e.target.value)}/>
                </label>
            </ContactFormGroup>
            <Button type='submit'>Send</Button>
        </form>
    </ContactFormContainer>
  )
}

export default ContactForm