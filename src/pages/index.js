import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout.js"
import Post from "../components/Post.js"
import { graphql } from "gatsby"
import "../styles/app.css"
const IndexPage = ({ data }) => {
  console.log("incoming data is ", data)
  return (
    <PrimaryLayout>
      <div className="cardWrapper">
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
      </div>
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
