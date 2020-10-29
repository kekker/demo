import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

// Components
import Layout from '../components/fragments/Layout/Layout';
import MarkdownContent from '../components/blocks/MarkdownContent';
import ResponsiveAside from '../components/fragments/ResponsiveAside';
import SideMenu from '../components/blocks/Menu/SideMenu';

import { listDocsLinks, listAboutLinks, listBenefitsLinks } from '../utils/getLinkLists';

const linkMap = {
  docs: listDocsLinks,
  about: listAboutLinks,
  benefits: listBenefitsLinks
};


const Docs = ({ data, pageContext, location }) => {
  const { frontmatter } = data.markdownRemark;
  const { title, description } = frontmatter;
  const content = data.markdownRemark.html;
  const { slug } = pageContext;

  const listItems = linkMap[slug.split('/')[1]] || listDocsLinks;

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
      <ResponsiveAside>
        <SideMenu location={location.pathname} links={listItems} />
      </ResponsiveAside>
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
