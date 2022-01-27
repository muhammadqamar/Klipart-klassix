import React, { useState, useEffect } from "react"
import { Navbar, Nav } from "react-bootstrap"

import Discord from "../../assets/image/discord.png"
import Twitter from "../../assets/image/twitter.png"

const Header = () => {
  const [navChang, setNavChang] = useState(false)

  const ScrollDown = () => {
    if (window.scrollY >= 90) {
      setNavChang(true)
    } else {
      setNavChang(false)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", ScrollDown)
    }
  }, [])

  return (
    <Navbar sticky="top" className={navChang ? "navColor" : "nav-top-fix"}>
      <div className="container header-space">
        <Nav className="m-auto ">
          <Nav.Link href="#/">Home</Nav.Link>
          <Nav.Link href="#faqs">FAQs</Nav.Link>
          <Nav.Link href="#roadmap">Roadmap</Nav.Link>
          <Nav.Link href="#team">Team</Nav.Link>
        </Nav>

        <Nav className="social-media-icon">
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
        </Nav>
      </div>
    </Navbar>
  )
}

export default Header
