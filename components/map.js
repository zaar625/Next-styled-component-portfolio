import { Map, MapMarker,CustomOverlay1Style,CustomOverlayMap } from "react-kakao-maps-sdk"
import KaKaoMap from '../public/map.png'

function KaKao() {
  console.log(KaKaoMap.src)
  return (
    <>
      <Map
        center={{ lat: 37.475875, lng: 126.979886 }}
        style={{ width: "100%", height: "360px" }}
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
     
    </>
  )
}

export default KaKao