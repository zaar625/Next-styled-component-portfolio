import { useRouter } from "next/router"
import styled from "styled-components";
import sidebarNav from "../../configs/sidebarNav";
import SidebarItem from "./sidebarItem";

const ReponsiveNavbar = styled.div`
  position: fixed;
  right: ${props => props.navbarState ? "0%" : "-58.33%"};
  top: 0;
  z-index: 10;
  background-color: var(--main-bg);
  height: 100vh;
  width: 58.33%;
  transition:0.4s ease-in-out;
  display: none;
  gap: 1rem;
  padding: 5rem 1rem;
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
    list-style-type:none;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li{
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
    // console.log(props)
    const activeItem = sidebarNav.findIndex(i => i.link === router.pathname);
  return (
    <ReponsiveNavbar>
      <ResponsiveNavContainer>
        {props.children}
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

