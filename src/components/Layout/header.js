import * as React from "react"
import { Navbar, Nav } from "react-bootstrap"

const Header = () => {
  return (
    <Navbar>
      <div className="container">
        <Nav className="m-auto ">
          <Nav.Link href="#faqs">FAQs</Nav.Link>
          <Nav.Link href="#roadmap">Roadmap</Nav.Link>
          <Nav.Link href="#team">Team</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  )
}

export default Header
