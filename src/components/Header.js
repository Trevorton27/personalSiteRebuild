import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import "../styles/app.css"
import { Link } from "gatsby"

const logoStyle = {
  size: "900%",
  color: "#fff",
  fontFamily: "",
}

export default props => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top" id="navbar">
    <Navbar.Brand id="brand" as={Link} to="/">
      {" "}
      Trevor Mearns <span style={logoStyle}>&#9733;</span>{" "}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto" style={{ marginRight: "5em" }}>
        <Nav.Link as={Link} to="/blog" className="navLink">
          Blog
        </Nav.Link>
        <Nav.Link as={Link} to="/contact" className="navLink">
          Contact
        </Nav.Link>
        <Nav.Link as={Link} to="/project" className="navLink">
          Projects
        </Nav.Link>
        <Nav.Link href="https://github.com/Trevorton27" className="navLink">
          GitHub
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
