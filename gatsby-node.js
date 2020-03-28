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




