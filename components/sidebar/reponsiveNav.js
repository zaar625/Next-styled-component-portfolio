import { useRouter } from "next/router"
import styled from "styled-components";
import sidebarNav from "../../configs/sidebarNav";
import HeaderSide from "../header/headerSide";
import SidebarItem from "./sidebarItem";

const ReponsiveNavbar = styled.div`
  position: fixed;
  right: ${props => props.state ? "0%" : "-58.33%"};
  top: 0;
  z-index: 10;
  background-color: var(--main-bg);
  height: 100vh;
  transition: right 0.4s ease-in-out;
  display: none;
  top: 0;;
  gap: 1rem;
  padding: 5rem 1rem;

  @media only screen and (max-width: 1024px){
        display: ${props => props.state ? "block" : "none"};
        width: 35%;
    }

  @media only screen and (max-width: 767px){
        display: ${props => props.state ? "block" : "none"};
        width: 60%;
    }
`
const ResponsiveNavContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`
const ResponsiveNavLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  ul {
    width: 100%;
    list-style-type:none;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li{
      display: flex;
      gap: 1rem;
      align-items: center;
      padding: 0.6rem 1rem;
      border-radius: 0.6rem;

      &:hover {
        background-color: var(--main-color);
        a{
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
      a{
        color: #000;
      }
    }
  }
`
//반응형 nav
const ReponsiveNav = (props) => {
    const router = useRouter();
    const state = props.navbarState;
    const activeItem = sidebarNav.findIndex(i => i.link === router.pathname);
  return (
    <ReponsiveNavbar state={state}>
      <ResponsiveNavContainer>
        <HeaderSide state={state}/>
        <ResponsiveNavLinks>
          <ul>
            {
              sidebarNav.map((nav, index)=> (
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
        </ResponsiveNavLinks>
      </ResponsiveNavContainer>
    </ReponsiveNavbar>
  )
}

export default ReponsiveNav

