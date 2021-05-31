import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout.js"
import Header from "../components/Header"
import About from "../components/About"

import "../styles/app.css"
const IndexPage = () => {
  return (
    <div>
      <Header />
      <PrimaryLayout>
        <About />
      </PrimaryLayout>
    </div>
  )
}

export default IndexPage
