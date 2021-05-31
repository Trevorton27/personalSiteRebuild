import React from "react"
import "../styles/app.css"
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"
import { Link } from "gatsby"

const logoStyle = {
  size: "900%",
  color: "#fff",
}

export default props => (
  <div>
    <Navbar className="navbar-dark bg-dark  " expand="lg" sticky="top">
      <Navbar.Brand as={Link} to="/" id="brand">
        {" "}
        Trevor Mearns <span style={logoStyle}>&#9733;</span>{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="ml-auto " style={{ alignContent: "center" }}>
          <Nav.Link as={Link} to="/blog">
            Blog
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/project">
            Projects
          </Nav.Link>
          <Nav.Link href="https://github.com/Trevorton27">Github</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    {/* <p>OLD NAVBAR BELOW HERE</p>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
      <Link class="navbar-brand nav-item nav-link navLink" to="/">
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
      <div className="collapse navbar-collapse mr-auto" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link className="nav-item nav-link navLink" as={Link} to="/blog">
            Blog
          </Link>
          <Link className="nav-item nav-link navLink" as={Link} to="contact">
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
    </nav> */}
  </div>
)
