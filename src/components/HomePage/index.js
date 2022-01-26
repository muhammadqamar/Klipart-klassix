import React, { useState, useEffect } from "react"

import Faq from "./Faq"
import KlipVideo from "../../assets/video/Klipart-movie.mp4"
import gif from "../../assets/image/main.gif"
import RoadMap from "./roadMap"
import Team from "./team"

const Index = () => {
  return (
    <div className="container">
      <div className="img-gif">
        <img src={gif} alt="img" />
      </div>
      <div>
        <video src={KlipVideo} width="100%" height="600" muted autoPlay />
      </div>
      <Team />
      <RoadMap />
      <Faq />
    </div>
  )
}

export default Index
