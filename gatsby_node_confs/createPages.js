const { resolve } = require('path');

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const docsTemplate = resolve(`./src/templates/docs.jsx`);

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
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const allMarkdown = result.data.allMarkdownRemark.edges;

    allMarkdown.forEach( edge => {
      const slug = edge.node.fields.slug;
      if (!slug.includes('gitbookconfs/')) {
        createPage({
          path: slug,
          component: docsTemplate,
          context: {
            slug,
          },
        });
      }
    });
  })
};
