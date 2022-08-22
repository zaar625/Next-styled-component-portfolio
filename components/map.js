import { Map, MapMarker,CustomOverlayMap } from "react-kakao-maps-sdk"
import { motion } from "framer-motion"
import styled from "styled-components"
import { CardStyle } from "../styles/GlobalStyle"
import KaKaoMap from '../public/map.png'

const MapContainer = styled.div`
  ${(props) =>
    props.cardstyle}
`
function KaKao() {
  console.log(KaKaoMap.src)
  return (
    <MapContainer 
      cardstyle={CardStyle}
      as={motion.div} 
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 , delay: 1.5}}
      >
      <Map
        center={{ lat: 37.475875, lng: 126.979886 }}
        style={{ width: "100%", height: "200px" }}
        level={3}
        draggable={false}
      >
        <MapMarker 
          position={{ lat: 37.475875, lng: 126.979886 }}
          image={{
            src:KaKaoMap.src,
            size: {
              width: 15,
              height: 15,
            },
            options: {
              offset: {
                x: 27,
                y: 69,
              },
            }
          }}
        />
          <CustomOverlayMap 
            position={{ lat: 37.475875, lng: 126.979886 }}
            
            >
          <div
              style={{backgroundColor:`var(--main-color)`, color:"#000", borderRadius:"10px"}}
            >
              <div style={{padding:"10px", color:`var(--txt-color)`, display:"flex",flexDirection:"column",gap:"5px"}}>
                <p style={{fontWeight:"bold"}}>Hello! Here is me</p>
                <p>Gwanak-gu.Seoul.Korea</p>
              </div>
            </div>
          </CustomOverlayMap>
      
      </Map>
     
    </MapContainer>
  )
}

export default KaKao