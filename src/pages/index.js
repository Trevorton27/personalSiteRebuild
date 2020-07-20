import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout.js';
import Post from '../components/Post.js';
import {graphql} from 'gatsby';


const IndexPage = ({data}) => {

  return (
  <PrimaryLayout column="col-6">
    {data.allMarkdownRemark.nodes.map(node => (
          <Post 
          image={node.frontmatter.image}
          title={node.frontmatter.title} 
          excerpt={node.excerpt}
          readMoreLink={node.fields.slug}
          />
    ))}
  </PrimaryLayout>
  )
}

export const query = graphql`{
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        date
        image
        
      }
      excerpt
      html
      fields {
        slug
      }
      
    }
  }
}`
export default IndexPage;
