import React, { useState, useEffect } from "react"
import { Navbar, Nav } from "react-bootstrap"

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
      <div className="container">
        <Nav className="m-auto ">
          <Nav.Link href="#/">Home</Nav.Link>
          <Nav.Link href="#faqs">FAQs</Nav.Link>
          <Nav.Link href="#roadmap">Roadmap</Nav.Link>
          <Nav.Link href="#team">Team</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  )
}

export default Header
