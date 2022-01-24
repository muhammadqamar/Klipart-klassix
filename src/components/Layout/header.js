import * as React from "react"
import { Navbar, Nav } from "react-bootstrap"

const Header = () => {
  return (
    <Navbar>
      <div className="container">
        <Nav className="m-auto ">
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#collection">COLLECTION</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  )
}

export default Header
