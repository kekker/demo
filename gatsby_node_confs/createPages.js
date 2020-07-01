const { resolve } = require('path');

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const docsTemplate = resolve('./src/templates/docs.jsx');
  const docsMdxTemplate = resolve('./src/templates/docsmdx.jsx');

  return await graphql(
    `
      {
        allMarkdownRemark(
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        allMdx(
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }  
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const allMarkdown = result.data.allMarkdownRemark.edges;
    const allMdx = result.data.allMdx.edges;

    allMarkdown.forEach(edge => {
      const { slug } = edge.node.fields;
      createPage({
        path: slug,
        component: docsTemplate,
        context: {
          slug,
        },
      });
    });

    allMdx.forEach(edge => {
      const { slug } = edge.node.fields;
      createPage({
        path: slug,
        component: docsMdxTemplate,
        context: {
          slug,
        },
      });
    });
  });
};
