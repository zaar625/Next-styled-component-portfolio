import styled from "styled-components"
import { motion } from "framer-motion"

import {AiOutlineCheckSquare} from 'react-icons/ai'
import { CardStyle } from "../../styles/GlobalStyle"

const ProjectCardContainer = styled.div`
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;

    ${(props) =>
    props.cardstyle}

    @media only screen and(max-width:1024px){
        flex-direction: column;
    }
`
const Imagewrapper = styled.div`
    position: relative;
    width: 33.3%;
    & img {
        width: 100%;
        height: auto;
    }

    /* &:hover ${CardHoverEffect} {
        opacity: 1;
        & h1 {
            transform: translateX(0px);
        }
    }
    &:hover ${View}{
        transform: translateX(0px);
    } */

    @media only screen and(max-width:1024px){
        width: 100%;
    }
`
const CardHoverEffect = styled.div`
        display: flex;
        flex-direction: column;
        gap:0.5rem;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.514);
        opacity: 0;
        transition: all 0.3s ease-in-out;
        color: #fff;

        h1{
            font-size: 1rem;
            font-weight: 300;
            transform: translateX(-50px);
            transition: all 0.4s ease-in-out;
            
            &:first-child{
            font-size: 1.15rem;
            font-weight: bold;
            transform: translateX(50px);
            transition: all 0.4s ease-in-out;
            }
        }
        ${Imagewrapper}:hover & {
            opacity: 1;
            h1 {
                transform:translateX(0px);
            }
        }
`
const View = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 0.825rem;
    margin-top: 2rem;
    transform: translateY(20px);
    transition: all 0.2s ease-in-out;

    p {
        cursor: pointer;
        &:hover {
            color: var(--main-color);
        }
    }

    ${Imagewrapper}:hover & {
        transform: translateY(0px);
    }
`
const CardDescription = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    gap: 1rem;

    @media only screen and (max-width:767px){
        font-size: 0.825rem;
    }
    & div {
        display: flex;
        align-items: center;

        svg{
            margin-right:10px;
            font-size: 0.825rem;
        }
    }
`
const ProjectCard = ({data, num}) => {

  return (
    <ProjectCardContainer 
    cardstyle={CardStyle}
    as={motion.div} 
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 + num * .5, delay: 1}}
    >
        <Imagewrapper>
            <img src={data.image} alt="프로젝트 이미지"></img>
            <CardHoverEffect>
                <h1>{data.title}</h1>
                <h1>{data.sub}</h1>
                <View>
                    <p><a rel="noreferrer"  href={data.git} target="_blank">Github</a></p>
                    <p><a  rel="noreferrer" href={data.site} target="_blank">View</a></p>
                </View>
            </CardHoverEffect>
        </Imagewrapper>
        <CardDescription>
            {
            data.des.map((des,index) => (
            <div key={index}>
                <AiOutlineCheckSquare/>
                <p>{des}</p>
            </div>
            ))
            }
        </CardDescription>
    </ProjectCardContainer>
  )
}

export default ProjectCard