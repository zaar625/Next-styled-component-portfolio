//모달창 구현은 하진 않았지만, 추후 가능성이 있어 component루트에 빼놓자.

import Link from "next/link"
import styled from "styled-components"
import { AiOutlineArrowRight } from "react-icons/ai";

const ModalConatainer = styled.div`
    font-size: 0.825rem;
    padding: 1rem;
    /* background: #EFEEE9; */
    border-radius: 8px;
    color: rgb(28,27,27);
    color: var(--txt-color);
`
const ModalList = styled.ul`
    & li {
        margin-bottom: 1rem;
        
        & p{
            margin-bottom: 10px;
        }

        & div {
            display: inline-block;
            background-color: var(--main-bg);
            padding: .5rem;
            border-radius: 5px;

            & svg {
                margin-left:5px;
            }

            &:hover {
                background-color: var(--main-color);
            }
        }
    }

`
const Modal = () => {
  return (
    <ModalConatainer>
        <ModalList>
            <li>
                <p>
                    1. 해당 보고계신 사이트는 Next.js + styled-components로 마이그레이션 되었습니다. <br/>
                    기존 React + Scss ver 를 보고 싶으시다면 아래 링크를 클릭해주세요. 
                </p>
                <div>
                    <Link href="https://sy-react-portfolio.netlify.app">
                        <a target='_blank' rel="noreferrer">View Site</a>
                    </Link>
                    <AiOutlineArrowRight/>
                </div>
            </li>
            <li>
                <p>
                    2. 저의 메인 프로젝트는 BABAN e-commerce 프로젝트 입니다. 해당 개인 프로젝트는 지속적으로 업데이트 중에 있습니다. 
                </p>
                <div>
                    <Link href="https://lively-lee.netlify.app">
                        <a target='_blank' rel="noreferrer">View Site</a>
                    </Link>
                    <AiOutlineArrowRight/>
                </div>
            </li>
            <li>
                <p>3. 현재 사이트의 코드는 깃허브에서 보실 수 있습니다. </p>
                <div>
                    <Link href="https://github.com/zaar625/Next-styled-component-portfolio">
                        <a target='_blank' rel="noreferrer">View Git</a>
                    </Link>
                    <AiOutlineArrowRight/>
                </div>
            </li>
            <li>
                <p>
                    4. 아울러 제가 공부한 내용이나 계획서는 노션으로 정리되어 있으니 참고해 주시면 감사하겠습니다. 
                </p>
                <div>
                    <Link href="https://wary-spy-d47.notion.site/6ee88740c71e4074937a7f49c43540c2?v=1d3ae83fd37948268377f9852ad19a50">
                        <a arget='_blank' rel="noreferrer">Notion</a>
                    </Link>
                    <AiOutlineArrowRight/>
                </div>
            </li>
        </ModalList>
    </ModalConatainer>
  )
}

export default Modal