import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ThemeAction from '../redux/actions/ThemeActions'
import styled ,{ThemeProvider}from "styled-components"
import Sidebar from "./sidebar/sidebar"
import GlobalStyle from "../styles/GlobalStyle"

const PagesWraper = styled.div`
  padding-left: 16.5%;
`

const Layout = ({children}) => {
  const themeReducer = useSelector(state => state.ThemeReducer);
  const dispatch = useDispatch();

  useEffect(()=>{
    const themeClass = localStorage.getItem('themeMode');
    const colorClass = localStorage.getItem('colorMode');
    dispatch(ThemeAction.setMode(themeClass));
    dispatch(ThemeAction.setColor(colorClass));
  },[dispatch])

  return (
    <>
        <GlobalStyle themeReducer={themeReducer}/>
          <Sidebar />
          <PagesWraper>
            <main>{children}</main>
          </PagesWraper>
    </>
  )
}

export default Layout
