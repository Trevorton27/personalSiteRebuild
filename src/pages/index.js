import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout.js"
import Banner from "../components/Banner"
import Header from "../components/Header"
import About from "../components/About"
import Message from "../components/Message"

import "../styles/app.css"
const IndexPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Message />
      <PrimaryLayout>
        <About />
      </PrimaryLayout>
    </div>
  )
}

export default IndexPage
