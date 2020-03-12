import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

// Components
import ContainerContent from '../components/ContainerContent';
import ButtonLink from '../components/Button';
import Layout from '../components/Layout';
import Heading from '../components/TextStyles/Heading';
import Text from '../components/TextStyles/Text';

// Utils
import shorten from '../utils/truncateStr';

const DocsList = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title="Docs List" description="Docs List">
      <div className="blog-container">
        <ContainerContent pleft="0" pright="2em">
          {posts.map(post => (
            <div className="post-summary">
              <p>{post.node.frontmatter.date}</p>
              <h2>{post.node.frontmatter.title}</h2>
              <div
                className="content"
                dangerouslySetInnerHTML={{
                  __html: shorten(post.node.html, 300),
                }}
              />
              <ButtonLink to={post.node.fields.slug} title="Read More" />
            </div>
          ))}
        </ContainerContent>

        <aside>
          {posts.map(post => (
            <Link to={post.node.fields.slug}>
              <Heading align="left" level={4}>
                <Text
                  isHeadingFont
                  weight="800"
                  transform="uppercase"
                  decoration="underline"
                >
                  {post.node.frontmatter.title}
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
