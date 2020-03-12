// const { createFilePath } = require('gatsby-source-filesystem');
//
// module.exports = exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;
//
//   if (node.internal.type === 'MarkdownRemark') {
//
//     const slug = createFilePath({ node, getNode });
//
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// };

const path = require('path');

module.exports = exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;

  if (node.internal.type === 'MarkdownRemark') {
      const {relativePath, sourceInstanceName} = getNode(node.parent);

      let slug;

      if (!slug) {
        // This will likely only happen for the partials in /content/home.
        slug = `/${relativePath.replace('.md', '.html')}`;
      }

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug,
      });

      // Used to generate a GitHub edit link.
      // this presumes that the name in gastby-config.js refers to parent folder
      createNodeField({
        node,
        name: 'path',
        value: path.join(sourceInstanceName, relativePath),
      });
  }
};
