import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

// Components
import Layout from '../components/fragments/Layout/Layout';
import RenderRawContent from '../components/blocks/MarkdownContent';
import { listAboutLinks, listDocsLinks, listBenefitsLinks } from '../utils/getLinkLists';
import SideMenu from '../components/blocks/Menu/SideMenu';
import ResponsiveAside from '../components/fragments/ResponsiveAside';

const linkMap = {
  'docs': listDocsLinks,
  about: listAboutLinks,
  benefits: listBenefitsLinks
};


const DocsMdx = ({ data, pageContext, location }) => {
  const { frontmatter } = data.mdx;
  const { title, description } = frontmatter;
  const content = data.mdx.body;
  const { slug } = pageContext;

  const listItems = linkMap[slug.split('/')[1]] || listDocsLinks;

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
      <ResponsiveAside>
        <SideMenu location={location.pathname} links={listItems} />
      </ResponsiveAside>
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
