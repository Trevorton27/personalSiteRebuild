import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout.js"
import Post from "../components/Post.js"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  console.log("incoming data is ", data)
  return (
    <PrimaryLayout column="col-xs-6">
      {data.allWordpressPost.nodes.map(node => (
        <Post
          image={node.featured_media.source_url}
          title={node.title}
          excerpt={node.excerpt}
          readMoreLink={node.slug}
          date={node.date}
        />
      ))}
    </PrimaryLayout>
  )
}

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
export default IndexPage
