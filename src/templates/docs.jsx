import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

// Components
import Layout from '../components/Layout/Layout';
import MarkdownContent from '../components/MarkdownContent';

import { listDocsLinks, listAboutLinks } from '../utils/getLinkLists';

const Docs = ({ data, pageContext, location }) => {
  const { frontmatter } = data.markdownRemark;
  const { title, description } = frontmatter;
  const content = data.markdownRemark.html;
  const { slug } = pageContext;

  const listItems = slug.includes('docs') ? listDocsLinks : listAboutLinks;

  return (
    <Layout
      location={location.pathname}
      title={title}
      description={description}
    >
      <MarkdownContent
        frontmatter={frontmatter}
        content={content}
        listItems={listItems}
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
        description
        next
        prev
        next_title
        prev_title
        sandboxPromo
      }
      fields {
        slug
      }
    }
  }
`;

export default Docs;
