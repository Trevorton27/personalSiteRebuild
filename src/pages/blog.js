import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout.js"
import Post from "../components/Post"
import { graphql } from "gatsby"
import Header from "../components/Header"

const IndexPage = ({ data }) => {
  console.log("blog.js data ", data)
  return (
    <div>
      <Header />
      <PrimaryLayout column="col-xs-6">
        <h1 style={{ padding: ".8em" }}>Hiya. Welcome to my blog.</h1>
        {data.allWordpressPost.nodes.map(node => (
          <div>
            <Post
              image={node.featured_media.source_url}
              title={node.title}
              excerpt={node.excerpt}
              readMoreLink={node.slug}
              date={node.date}
            />
          </div>
        ))}
      </PrimaryLayout>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  {
    allWordpressPost {
      nodes {
        slug
        title
        excerpt
        date(formatString: "MMMM DD, YYYY")
        featured_media {
          source_url
        }
      }
    }
  }
`
