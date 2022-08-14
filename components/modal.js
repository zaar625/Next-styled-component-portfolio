//모달창 구현은 하진 않았지만, 추후 가능성이 있어 component루트에 빼놓자.

import styled from "styled-components"

const ModalConatainer = styled.div`
    font-size: 0.825rem;
    padding: 1rem;
    background: #EFEEE9;
    border-radius: 8px;
    color: rgb(28,27,27);
`
const ModalList = styled.ul`
    & li {
        margin-bottom: 1rem;
        
        & p{
            margin-bottom: 10px;
        }
    }

`
const Modal = () => {
  return (
    <ModalConatainer>
        <ModalList>
            <li>
                <p>
                    1. 해당 프로젝트는 Next.js + styled-components로 마이그레이션 하였습니다. 
                    2. 저의 메인 프로젝트는 BABAN e-commerce 프로젝트 입니다. 해당 개인 프로젝트는 지속적으로 업데이트 예정입니다. 
                </p>
            </li>
            <li>
                <p>3. 현재 사이트의 코드는 깃허브에서 보실 수 있습니다. </p>
            </li>
            <li>
                <p>
                    4. 아울러 제가 공부한 내용이나 계획서는 노션으로 정리되어 있으니 참고해 주시면 감사하겠습니다. 
                </p>
            </li>
        </ModalList>
    </ModalConatainer>
  )
}

export default Modal