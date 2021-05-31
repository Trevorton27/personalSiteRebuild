import React from "react"
import { Jumbotron, Container, Row } from "react-bootstrap"

const Banner = () => {
  return (
    <div className="banner">
      <Jumbotron
        className="jumbotron-fluid"
        fluid
        style={{
          backgroundImage: "../images/Snag_14cd2137.png",
        }}
      >
        <h1 className="title" id="bannerTitleText">
          Personal Website & Repository of Thoughts
        </h1>
        <Row className="justify-content-center"></Row>
      </Jumbotron>
    </div>
  )
}

export default Banner
