import React from "react"
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import "../styles/app.css"

const PostLayout = ({ data }) => {
  const post = data.wordpressPost
  console.log("post ", data)
  return (
    <div>
      <SEO title="Home" />
      <Header />
      <div className="container">
        <div className="row justify-content-md-center" id="postWrapper">
          <img src={post.featured_media.source_url} alt="" />
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div>
            <h3 id="postDateInfo">
              Pulished on:{" "}
              <span dangerouslySetInnerHTML={{ __html: post.date }} />
            </h3>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PostLayout

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      content
      title
      date(formatString: "MMMM DD, YYYY")
      featured_media {
        source_url
      }
    }
  }
`
