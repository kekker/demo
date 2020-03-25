import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

// Components
import ContainerContent from '../components/ContainerContent';
import ButtonLink from '../components/Button';
import Layout from '../components/Layout';


const DocsList = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location.pathname} title="Docs List" description="Docs List">
        <ContainerContent pl="0" pr="2em">
          {posts.map(post => (
            <div>
              <ButtonLink
                isPrimary={false}
                to={post.node.fields.slug}
                title={post.node.fields.slug}
              />
            </div>
          ))}
        </ContainerContent>
    </Layout>
  );
};

DocsList.propTypes = {
  data: PropTypes.node,
  location: PropTypes.string,
};

export default DocsList;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          html
          frontmatter {
            description
          }
        }
      }
    }
  }
`;
