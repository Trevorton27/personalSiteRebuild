/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const {createFilePath} = require('gatsby-source-filesystem');
const path = require('path');
const { node } = require('prop-types');


exports.onCreateNode = ({node, getNode, actions}) => {
    const {createNodeField} = actions;
    if(node.internal.type === 'MarkdownRemark') {
        //print slug name for posts on development version build
      const slug = createFilePath({node, getNode, basePath: 'posts'});
      createNodeField({
          node,
          name: 'slug',
          value: slug
      })
    }
}

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;
    const postLayout = path.resolve(`./src/layouts/PostLayout.js`);
    return graphql(`
    {
    allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
    `)
    .then(result => {
        console.log('result is ', JSON.stringify(result))

        result.data.allMarkdownRemark.edges.forEach((edge) => {
            createPage({
                path: edge.node.fields.slug,
                component: postLayout,
                context: {
                  slug: edge.node.fields.slug
                }
            })
        })
    })
}

// node.node.fields.sluggat