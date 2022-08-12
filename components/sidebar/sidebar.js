import {useRouter} from "next/router"
import { useState } from "react"
import SidebarItem from "./sidebarItem";
import ReponsiveNav from "./reponsiveNav";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components"
import sidebarNav from "../../configs/sidebarNav"
import Logo from "./logo"

const SidebarWrapper = styled.div`
  width:16.5%;
  position: fixed;
  left: 0;
  background-color: var(--second-bg);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;

  @media only screen and (max-width: 1024px) {
    position: inherit;
    width: 100%;
    height: max-content;
    padding: .5rem
  }
`

const Top = styled.div`
  display: flex;
  flex-direction:column;
  padding: 1rem;
  gap: 2rem;
  width: 100%;

  @media only screen and (max-width: 767px){
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const LogoWrapper = styled.div`
  position:relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

const LinksWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;

  & ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap:1rem;
    width: 100%;

    li {
      padding: 0.6rem 1rem;
      border-radius: 0.6rem;
      display: flex;
      gap: 1rem;
      align-items: center;

      &:hover {
        background-color: var(--main-color);
        a {
          color: #000;
        }
      }

      a {
        text-decoration: none;
        display: flex;
        gap: 1rem;
        color: var(--txt-color);
        align-items: center;
      }

      svg {
        font-size: 1.5rem;
      }
    }

    .active {
      background-color: var(--main-color);
      a {
        color: #000;
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    display: none;
  }

`

const Toggle = styled.div`
  display: none;

  & svg {
    font-size: 2rem;
  }
  @media only screen and (max-width: 767px){
    display: block;
    z-index: 99;
  }
`
const Sidebar = () => {
  const router = useRouter();
  const [navbarState, setNavbarState] = useState(true);
  const activeItem = sidebarNav.findIndex(i => i.link === router.pathname)
  
  return (
    <>
      <SidebarWrapper>
        <Top>
          <LogoWrapper>
            <Logo/>
            <Toggle>
              {
                navbarState ? (<AiOutlineClose onClick={()=>setNavbarState(false)}/>) 
                : (<AiOutlineMenu 
                    onClick={(e)=>{
                      e.stopPropagation();
                      setNavbarState(true);
                    }}/>)
              }
            </Toggle>
            <LinksWrapper>
              <ul>
                {
                  sidebarNav.map((nav,index) => (
                    <SidebarItem 
                      index={index} 
                      link={nav.link} 
                      icon={nav.icon} 
                      text={nav.text}
                      active={index === activeItem}
                      key={index} 
                      />
                  ))
                }
              </ul>
            </LinksWrapper>
          </LogoWrapper>
        </Top>
      </SidebarWrapper>
      <ReponsiveNav navbarState={navbarState}/>
    </>

  )
}
export default Sidebar