import styled from "styled-components"
import { BsSun, BsMoon } from "react-icons/bs"

const modeSettings = [
    {
        id:'Sun',
        name:'Light',
        background:'light-background',
        class:'theme-mode-light'
    },
    {
        id:'Moon',
        name:'Dark',
        background:'dark-background',
        class:'theme-mode-dark'
    },
]

const colorSetting = [
    {
        id:'green',
        name:'green',
        background: 'green-color',
        class:'them-color-green'
    },
    {
        id:'pink',
        name:'pink',
        background: 'pink-color',
        class:'them-color-pink'
    },
    {
        id:'yellow',
        name:'yellow',
        background: 'yellow-color',
        class:'them-color-yellow'
    },
    {
        id:'apricot',
        name:'apricot',
        background: 'apricot-color',
        class:'them-color-apricot'
    },
]

const ThemeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
const ThemeState = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap:nowrap;
    gap: 1rem;
    justify-content: end;
    border-bottom: solid 2px rgba(207,207, 207, 0.445);
    padding-bottom: 10px;
`

const ThemeModeList = styled.ul`
    display: flex;
    gap: 1rem;

    & li {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        gap: 0.5rem;
        cursor: pointer;
    }
`
const Theme = () => {
  return (
    <ThemeContainer>
        <ThemeState></ThemeState>
        <ThemeModeList>
            {
                modeSettings.map((item, index) => (
                    <li key={index}>
                        <div className={`${item.background}`}>
                            {item.id === 'Sun' ? (<BsSun/>) : (<BsMoon/>)}
                        </div>
                        <span>{item.name}</span>
                    </li>
                ))
            }
        </ThemeModeList>
    </ThemeContainer>
  )
}

export default Theme