import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

// Components
import Layout from '../components/Layout/Layout';
import RenderRawContent from '../components/MarkdownContent';
import { listAboutLinks, listDocsLinks } from '../utils/getLinkLists';


const DocsMdx = ({ data, pageContext, location }) => {
  const { frontmatter } = data.mdx;
  const { title, description } = frontmatter;
  const content = data.mdx.body;
  const { slug } = pageContext;

  const listItems = slug.includes('docs') ? listDocsLinks : listAboutLinks;

  return (
    <Layout
      location={location.pathname}
      title={title}
      description={description}
    >
      <RenderRawContent
        contentType="mdx"
        frontmatter={frontmatter}
        content={content}
        listItems={listItems}
      />
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
