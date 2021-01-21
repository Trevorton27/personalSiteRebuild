import React from "react"
import Footer from "../components/Footer.js"
import SEO from "../components/seo"

const PrimaryLayout = props => (
  <div>
    <SEO title="Home" />

    <div className="container">
      <div>
        <div>{props.children}</div>
      </div>
    </div>
    <Footer />
  </div>
)

export default PrimaryLayout
