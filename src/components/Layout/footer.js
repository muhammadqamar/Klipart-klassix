import * as React from "react"

import Discord from "../../assets/image/discord.png"
import Twitter from "../../assets/image/twitter.png"

const Footer = () => (
  <footer className="container ">
    <div className="footer social-media-icon">
      <a
        className="Dis-icon"
        rel="noreferrer"
        target="_blank"
        href="  https://discord.gg/z4WXqYGjB3"
      >
        <img src={Discord} alt="discord" />
      </a>
      <a
        className="Twi-icon"
        rel="noreferrer"
        target="_blank"
        href="https://twitter.com/@klipartklassix"
      >
        <img src={Twitter} alt="Twitter" />
      </a>
    </div>
  </footer>
)

export default Footer
