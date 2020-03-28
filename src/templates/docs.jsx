import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

// Components
import Layout from '../components/Layout/Layout';
import Seo from '../components/SEO/Seo';
import MarkdownContent from '../components/MarkdownContent';

const Docs = ({ data, pageContext, location }) => {
  const { frontmatter } = data.markdownRemark;
  const { title, subtitle, description } = frontmatter;
  const post = data.markdownRemark;
  const { previous, next, slug } = pageContext;

  return (
    <Layout location={location.pathname} title={title} subtitle={subtitle}>
      <Seo
        title={title}
        description={description || post.excerpt}
        slug={slug}
      />

      <MarkdownContent
        title={title}
        description={description}
        markdownRemark={post}
        next={next}
        previous={previous}
      />
    </Layout>
  );
};

Docs.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object,
};

export const pageQuery = graphql`
  query DocsMarkdown($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;

export default Docs;
