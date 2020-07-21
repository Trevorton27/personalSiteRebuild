import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import SEO from "../components/seo";
import { graphql } from 'gatsby';

const PostLayout = ({ data }) => {
    const post = data.wordpressPost;
    return (
        <div>
            <SEO title="Home" />
            <Header />
            <div className="container" >
                <div className="row justify-content-md-center">
                    <h1 dangerouslySetInnerHTML={{__html: post.title}} />
                    <div dangerouslySetInnerHTML={{ __html: post.content}} />
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default PostLayout;

export const query = graphql`
query($slug: String!) {
    wordpressPost(slug: { eq: $slug } ){
        content
        title
    }
}`
