import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

// Components
import ContainerContent from '../components/ContainerContent';
import ButtonLink from '../components/Button';
import Layout from '../components/Layout';
import Heading from '../components/TextStyles/Heading';
import Text from '../components/TextStyles/Text';

const DocsList = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title="Docs List" description="Docs List">
      <div className="blog-container">
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

        <aside>
          {posts.map(post => (
            <Link to={post.node.fields.slug}>
              <Heading textAlign="left" level={4}>
                <Text
                  color="primaryText"
                  isHeadingFont
                  fontWeight="800"
                  textTransform="uppercase"
                >
                  {post.node.frontmatter.description}
                </Text>
              </Heading>
            </Link>
          ))}
        </aside>
      </div>
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
