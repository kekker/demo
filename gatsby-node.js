'use strict';

exports.onCreateNode = require('./gatsby_node_confs/onCreateNode');
exports.createPages = require('./gatsby_node_confs/createPages');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /swagger-ui-react/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
};

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
    type MarkdownRemark implements Node {
        frontmatter: Frontmatter
    }
    type Frontmatter {
        title: String!
        description: String
        next: String
        next_title: String
        prev: String
        prev_title: String
    }
  `;
    createTypes(typeDefs)
};




