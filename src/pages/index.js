import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout.js"
import Banner from "../components/Banner"
import Header from "../components/Header"

import "../styles/app.css"
const IndexPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <PrimaryLayout>
        <div className="cardWrapper">Yo. </div>
      </PrimaryLayout>
    </div>
  )
}

export default IndexPage
