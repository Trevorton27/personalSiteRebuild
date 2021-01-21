import React from "react"
import { Jumbotron, Button, Container, Row } from "react-bootstrap"

const Banner = () => {
  // const backgroundImage = {}
  return (
    <div className="banner">
      <Jumbotron className="jumbotron" fluid>
        <Container id="bannerText">
          <h1 className="title" id="bannerTitleText">
            {" "}
            My Personal Website & Repository of Thoughts
          </h1>
          <Row className="justify-content-center"></Row>
          <p></p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Banner
