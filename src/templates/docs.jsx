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
    <Layout location={location} title={title} subtitle={subtitle}>
      <Seo
        title={title}
        description={description || post.excerpt}
        slug={slug}
      />

      <div className="blog-container">
        <MarkdownContent
          title={title}
          description={description}
          markdownRemark={post}
          next={next}
          previous={previous}
        />

        <aside>
          <h3>Kekker</h3>
          <p>Menu will be here</p>
        </aside>
      </div>
    </Layout>
  );
};

Docs.propTypes = {
  data: PropTypes.node,
  location: PropTypes.string.isRequired,
  pageContext: PropTypes.node,
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
