import React, { useRef } from 'react';
import styled from 'styled-components';
import {IoIosSettings} from 'react-icons/io'
import Theme from './theme';



const clickOutsideRef = (contentRef, toggleRef) => {
    document.addEventListener('mousedown',(e)=> {
        //user click toggle
        if(toggleRef.current && toggleRef.current.contains(e.target)){
            console.log(contentRef.current.classList)
            contentRef.current.classList.toggle('active')
        }else {
            //외부에 클릭했을 때,(이벤트 타겟이 없을 때)
            if(contentRef.current && !contentRef.current.contains(e.target)){
                contentRef.current.classList.remove('active')
            }
        }
    })

}
//sytle
const SettingContainer = styled.div`
    position: relative;
`
const SettingDropToggle = styled.div`
    & button {
        font-size: 1.5rem;
        color:var(--txt-color);

        &:hover {
            color: var(--main-color);
        }
    }
`
const SettingDropContent = styled.div`
    padding: .5rem;
    position: absolute;
    right: 0;
    top: calc(100% +15px);
    max-width: 300px;
    width: max-content;
    background-color: var(--second-bg);
    transform: scale(0);
    box-shadow: var(--box-shadow);
    border-radius: 10%;
    overflow: hidden;
    transform-origin: top right;
    transition: transform 0.3s ease 0s;
    color: white;

    &.active {
        transform: scale(1);
        transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        z-index: 1;
    }
`

const SettingIcon = () => {
    const dropdownToggle = useRef(null);
    const dropdownContent = useRef(null);


        if(process.browser){
            console.log('실행')
            clickOutsideRef(dropdownContent, dropdownToggle)
        }


  return (
    <SettingContainer>
        <SettingDropToggle>
            <button ref={dropdownToggle} aria-label="테마옵션">
                <IoIosSettings/>
            </button>
        </SettingDropToggle>
        <SettingDropContent ref={dropdownContent}>
            <Theme/>
        </SettingDropContent>
    </SettingContainer>
  )
}

export default SettingIcon