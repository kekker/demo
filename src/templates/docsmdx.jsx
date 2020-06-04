import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';

// Components
import Layout from '../components/Layout/Layout';

const DocsMdx = ({ data: { mdx }, location }) => {
  const { frontmatter } = mdx;
  const content = mdx.body;
  const { title, description } = frontmatter;

  return (
    <Layout
      location={location.pathname}
      title={title}
      description={description}
    >
      <MDXRenderer>{content}</MDXRenderer>
    </Layout>
  );
};

DocsMdx.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object,
};

export const pageQuery = graphql`
  query DocsMdx($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        next
        prev
        sandboxPromo
      }
      body  
      fields {
        slug
      }
    }
  }
`;

export default DocsMdx;
