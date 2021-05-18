import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import "../styles/app.css"
import { Link } from "gatsby"

const logoStyle = {
  size: "900%",
  color: "#fff",
}

const mediaMatch = window.matchMedia("(max-width: 400)")

export default props => (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
    <Link class="navbar-brand nav-item nav-link navLink" to="/" id="brand">
      Trevor Mearns <span style={logoStyle}>&#9733;</span>{" "}
    </Link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ml-auto" id="navbarNavAltMarkup">
      <div className="navbar-nav ml-auto">
        <Link className="nav-item nav-link navLink" as={Link} to="/blog">
          Blog
        </Link>
        <Link className="nav-item nav-link navLink" as={Link} to="/contact">
          Contact
        </Link>
        <Link className="nav-item nav-link navLink" as={Link} to="/project">
          Projects
        </Link>
        <a
          className="nav-item nav-link navLink"
          href="https://github.com/Trevorton27"
        >
          Github
        </a>
      </div>
    </div>
  </nav>

  // <Navbar bg="dark" variant="dark" expand="lg" sticky="top" id="navbar">
  //   <Navbar.Brand id="brand" as={Link} to="/">
  //     {" "}
  //     Trevor Mearns <span style={logoStyle}>&#9733;</span>{" "}
  //   </Navbar.Brand>
  //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //   <Navbar.Collapse id="basic-navbar-nav">
  //     <Nav className="ml-auto" style={{ marginRight: "5em" }}>
  //       <Nav.Link as={Link} to="/blog" className="navLink">
  //         Blog
  //       </Nav.Link>
  //       <Nav.Link as={Link} to="/contact" className="navLink">
  //         Contact
  //       </Nav.Link>
  //       <Nav.Link as={Link} to="/project" className="navLink">
  //         Projects
  //       </Nav.Link>
  //       <Nav.Link href="https://github.com/Trevorton27" className="navLink">
  //         GitHub
  //       </Nav.Link>
  //     </Nav>
  //   </Navbar.Collapse>
  // </Navbar>
)
