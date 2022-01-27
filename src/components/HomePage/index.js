import React, { useRef, useState } from "react"

import Faq from "./Faq"
import KlipVideo from "../../assets/video/Klipart-movie.mp4"
import gif from "../../assets/image/main0.gif"
import Mute from "../../assets/image/mute.png"
import Volume from "../../assets/image/volume-up.png"
import RoadMap from "./roadMap"
import Team from "./team"

const Index = () => {
  const videoConfig = useRef()
  const [muteVideo, setMuteVideo] = useState(true)
  return (
    <div className="container">
      <div id="/" className="img-gif">
        <img src={gif} alt="img" />
      </div>
      <div className="video-sect">
        <div className="volume-images">
          <img
            onClick={() => {
              videoConfig.current.muted = !videoConfig.current.muted
              setMuteVideo(!muteVideo)
            }}
            className="img-1"
            src={muteVideo ? Mute : Volume}
            alt="volume"
          />
        </div>
        <video className="video" ref={videoConfig} loop autoPlay muted>
          <source src={KlipVideo} type="video/mp4" />.
        </video>
      </div>
      <Faq />
      <RoadMap />
      <Team />
    </div>
  )
}

export default Index
