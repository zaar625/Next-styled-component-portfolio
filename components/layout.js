import styled from "styled-components"
import Header from "./header/header"
import Sidebar from "./sidebar/sidebar"

const PagesWraper = styled.div`
  padding-left: 16.5%;
`

const Layout = ({children}) => {
  return (
    <>
        <Sidebar />
        <PagesWraper>
          <main>{children}</main>
        </PagesWraper>
    </>
  )
}

export default Layout
