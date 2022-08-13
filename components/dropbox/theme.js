import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import ThemeAction from '../../redux/actions/ThemeActions';
import { BsSun, BsMoon } from "react-icons/bs";
import styled from "styled-components";

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

const colorSettings = [
    {
        id:'green',
        name:'green',
        background: 'green',
        class:'them-color-green'
    },
    {
        id:'pink',
        name:'pink',
        background: 'pink',
        class:'them-color-pink'
    },
    {
        id:'yellow',
        name:'yellow',
        background: 'yellow',
        class:'them-color-yellow'
    },
    {
        id:'apricot',
        name:'apricot',
        background: 'gray',
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

        &.modeList-color {

        }
    }
`

const ThemeColorList = styled.li`
    background-color: ${props => props.color ? `${props.color}` : ""};
    width: 15px;
    height: 15px;
    border-radius: 50%;
`

const Theme = () => {
    const [currMode, setCurrMode] = useState('Dark'); //배경색 상태
    const [currColor, setcurrColor] = useState('yellow')
    const dispatch = useDispatch();

    const setColor = color => {
        setcurrColor(color.background);
        localStorage.setItem('colorMode', color.class)
        dispatch(ThemeAction.setColor(color.class))

    }

    const setMode = mode => {
        setCurrMode(mode.name);
        localStorage.setItem('themeMode', mode.class);
        dispatch(ThemeAction.setMode(mode.class))
    }

    useEffect(()=> {
        const themeClass = modeSettings.find(e => e.class === localStorage.getItem('themeMode'))
        const colorClass = colorSettings.find(e => e.class === localStorage.getItem('colorMode'))

        if(themeClass !== undefined) setCurrMode(themeClass.id);
        if(colorClass !== undefined) setcurrColor(colorClass.background);
    },[])

  return (
    <ThemeContainer>
        <ThemeState>
            <span>
                {
                    currMode === 'Dark' ? (<BsMoon/>) : (<BsSun/>)
                }
            </span>
        </ThemeState>
        {/* theme light/dark */}
        <ThemeModeList>
            {
                modeSettings.map((item, index) => (
                    <li key={index} onClick={()=>setMode(item)}>
                        <div className={`${item.background}`}>
                            {item.id === 'Sun' ? (<BsSun/>) : (<BsMoon/>)}
                        </div>
                        <span>{item.name}</span>
                    </li>
                ))
            }
       
        
        </ThemeModeList>
        {/* theme color */}
        <ThemeModeList>
            {
                colorSettings.map((item, index) => (
                    <ThemeColorList color={item.background} key={index} onClick={()=>{
                        setColor(item);
                    }}></ThemeColorList>
                ))
            }
        </ThemeModeList>
    </ThemeContainer>
  )
}

export default Theme