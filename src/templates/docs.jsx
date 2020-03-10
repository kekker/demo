import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

// Components
import Layout from '../components/Layout/Layout';
import Seo from '../components/SEO/Seo';
import MarkdownContent from '../components/MarkdownContent/MarkdownContent';

const Docs = ({ data, pageContext }) => {
  const { frontmatter } = data.markdownRemark;
  const { title, subtitle, description } = frontmatter;
  const post = data.markdownRemark;
  const { previous, next, slug } = pageContext;

  return (
    <Layout title={title} subtitle={subtitle}>
      <Seo
        title={title}
        description={description || post.excerpt}
        slug={slug}
      />
      <MarkdownContent markdownRemark={post} next={next} previous={previous} />
    </Layout>
  );
};

Docs.propTypes = {
  data: PropTypes.node,
  pageContext: PropTypes.node,
};

export const pageQuery = graphql`
  query DocsMarkdown($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        subtitle
        description
      }
      fields {
        slug
      }
    }
  }
`;

export default Docs;
