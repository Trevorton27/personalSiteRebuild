import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import "../styles/app.css"

const logoStyle = {
  size: "900%",
  color: "#fff",
  fontFamily: "",
}

export default props => (
  <Navbar
    bg="dark"
    variant="dark"
    expand="lg"
    sticky="top"
    expand="lg"
    id="navbar"
  >
    <Navbar.Brand href="/" id="brand">
      Trevor Mearns <span style={logoStyle}>&#9733;</span>{" "}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto" style={{ marginRight: "5em" }}>
        <Nav.Link as={Link} to="/" classname="navLink">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/blog" classname="navLink">
          Blog
        </Nav.Link>
        <Nav.Link as={Link} to="/contact" classname="navLink">
          Contact
        </Nav.Link>
        <Nav.Link as={Link} to="/contact" classname="navLink">
          Projects
        </Nav.Link>
        <Nav.Link as={Link} to="/contact" classname="navLink">
          GitHub
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
