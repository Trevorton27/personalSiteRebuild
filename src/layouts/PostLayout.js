import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import SEO from "../components/seo";
import {graphql} from 'gatsby';

const PostLayout = ({data}) => {
    const post = data.markdownRemark;
    return(
        <div>
        <SEO title="Home" />
        <Header />
        <div className="container" >
            <div className="row justify-content-md-center">
               <h1>{post.frontmatter.title}</h1>
               <div dangerouslySetInnerHTML={{__html: post.html}}/>
            </div>
        </div>
        <Footer />
    </div>
    )
};

export default PostLayout;

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}} ){
            html
            frontmatter {
                title
            }
        }
    }
`