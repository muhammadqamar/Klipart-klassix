import React, { useState, useEffect } from "react"

import Faq from "./Faq"
import KlipVideo from "../../assets/video/Klipart-movie.mp4"
// import img1 from "../../assets/image/image-1.jpg"
// import img2 from "../../assets/image/image-2.jpg"
// import img3 from "../../assets/image/image-3.jpg"
// import img4 from "../../assets/image/image-4.jpg"

const Image = [
  { img1: "../../assets/image/image-1.jpg" },
  { img1: "../../assets/image/image-2.jpg" },
  { img1: "../../assets/image/image-3.jpg" },
  { img1: "../../assets/image/image-4.jpg" },
]

const Index = () => {
  const [runImg, setRunImg] = useState(Image)
  console.log(runImg)

  return (
    <div className="container">
      <h1>home</h1>
      <div style={{ width: "300px", height: "400px", backgroundColor: "#fff" }}>
        {/* <img src={runImg} alt="xcdd" /> */}
      </div>
      <div>
        <video
          src={KlipVideo}
          width="100%"
          height="600"
          controls="controls"
          autoplay="true"
        />
      </div>
      <Faq />
    </div>
  )
}

export default Index
