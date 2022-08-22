import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'
import skillImage from '../public/aboutPage/skill-img.png'

const SkillContainer = styled.div`
    & h1 {
        color:var(--main-color);
        text-align: center;
        margin-bottom: 2rem;
    }
`
const UsedSkill = styled.div`
    display: flex;
    gap: 1.5rem;

    @media only screen and (max-width: 767px){
        flex-direction: column;
        align-items: center;
    }
`
const ImgStyling = styled.div`
    width: 16%;
`
const Skills = styled.div`
    & h1 {
        color:var(--main-color);
        text-align: center;
    }
    & ul {
        display: flex;
        flex-flow: wrap;
        gap:1rem;

        & li {
            border:solid 2px var(--main-color);
            padding: 0.5rem;
            border-radius: 15px;

            &:hover {
                background: var(--main-color);
                color: #000;
            }
        }
    }
`
const Skill = () => {
    const skill = ['HTML5','CSS3','SCSS','Styled-component','Javascript','Typescript','React','Next.js', 'Vue', 'fireBase']
  return (
    <SkillContainer
    as={motion.div} 
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5, delay:.5}}
    >
        <h1>What I used Skill</h1>
        <UsedSkill>
            <ImgStyling><Image src={skillImage} alt="skill image"/></ImgStyling>
            <Skills>
                <ul>
                    {
                        skill.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </Skills>
        </UsedSkill>
    </SkillContainer>
  )
}

export default Skill