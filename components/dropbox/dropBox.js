import styled from "styled-components"
import BellIcon from "./bellIcon"
import SettingIcon from "./settingIcon"

const DropBox = () => {

  const DropBoxContatainer = styled.div`
    display: flex;
    gap: 1rem;
  `
  return (
    <DropBoxContatainer>
        <BellIcon/>
        <SettingIcon/>
    </DropBoxContatainer>
  )
}

export default DropBox