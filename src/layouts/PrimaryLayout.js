import React from "react"
import Footer from "../components/Footer.js"
import SEO from "../components/seo"

const PrimaryLayout = props => (
  <div style={{ marginTop: "110px" }}>
    <SEO title="Home" />

    <div className="container-fluid">
      <div>{props.children}</div>
    </div>
    <Footer />
  </div>
)

export default PrimaryLayout
