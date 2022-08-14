import { useRef } from "react";
import { BiBell } from "react-icons/bi";
import styled from "styled-components";
import Modal from "../modal";
import { SettingContainer, SettingDropToggle, SettingDropContent } from "./settingIcon"

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

const BellContainer = styled(SettingContainer)`
    &::before {
        position: absolute;
        content: '1';
        background-color: var(--main-color);
        color: #000;
        width:15px;
        height: 15px;
        border-radius: 50%;
        padding:0.1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        top:-8px;
        right: -6px;
    }
`

const BellIcon = () => {
    const dropdownToggle = useRef(null);
    const dropdownContent = useRef(null);


        if(process.browser){
            console.log('실행')
            clickOutsideRef(dropdownContent, dropdownToggle)
        }
  return (
    <BellContainer>
        <SettingDropToggle>
            <button ref={dropdownToggle} aria-label="알림 내용">
                <BiBell/>
            </button>
        </SettingDropToggle>
        <SettingDropContent ref={dropdownContent}>
            <Modal/>
        </SettingDropContent>
    </BellContainer>
  )
}

export default BellIcon