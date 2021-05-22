import React from "react"
import { Jumbotron, Container, Row } from "react-bootstrap"

const Banner = () => {
  return (
    <div className="banner">
      <Jumbotron className="jumbotron-fluid" id="tabletDeskTopJumboTron" fluid>
        <h1 className="title" id="bannerTitleText">
          Personal Website & Repository of Thoughts
        </h1>
        <Row className="justify-content-center"></Row>
      </Jumbotron>
    </div>
  )
}

export default Banner
