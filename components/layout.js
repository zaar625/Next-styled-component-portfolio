import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ThemeAction from '../redux/actions/ThemeActions'
import styled from "styled-components"
import Sidebar from "./sidebar/sidebar"
import GlobalStyle from "../styles/GlobalStyle"
import Spinner from "./spinner"

const PagesWraper = styled.div`
  padding-left: 16.5%;

  @media only screen and (max-width: 1024px){
      padding: 0;
    }
`
const MainLayOut = styled.main`
  padding: 1rem;
`
const Layout = ({children}) => {
  const themeReducer = useSelector(state => state.ThemeReducer);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  setTimeout(()=>{
    setLoading(false)
  },2500);

  useEffect(()=>{
    const themeClass = localStorage.getItem('themeMode');
    const colorClass = localStorage.getItem('colorMode');
    dispatch(ThemeAction.setMode(themeClass));
    dispatch(ThemeAction.setColor(colorClass));
  },[dispatch])

  return (
    <>
      {loading ? (<Spinner/>):(
      <>
        <GlobalStyle themeReducer={themeReducer}/>
          <Sidebar />
          <PagesWraper>
            <MainLayOut>{children}</MainLayOut>
          </PagesWraper>
      </>
      )
    }
    </>
    // <>
    //     <GlobalStyle themeReducer={themeReducer}/>
    //       <Sidebar />
    //       <PagesWraper>
    //         <MainLayOut>{children}</MainLayOut>
    //       </PagesWraper>
    // </>
  )
}

export default Layout
