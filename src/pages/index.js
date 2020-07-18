import React from "react"
import Footer from '../components/Footer.js';
import Layout from "../components/layout";
import Post from '../components/Post.js';
import SEO from "../components/seo";
import Header from '../components/Header.js';

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Header />
    <div className="container" >
      <div className="row justify-content-md-center">
        <div className="col-xs-6">
          <h1 >Hi, humans...</h1>
          <Post />
        </div>
      </div>

    </div>
    <Footer />
  </div>


)

export default IndexPage
