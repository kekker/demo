import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

// Components
import Seo from '../components/SEO/Seo';
import { MainHeader } from '../components/Header';
import ContainerContent from '../components/ContainerContent';
import Footer from '../components/Footer';
import Theme from '../components/Theme';
import ButtonLink from '../components/Button';

const BlogIndex = ({ data, location }) => {
  const blogTitle = data.site.siteMetadata.title;
  const { description } = data.site.siteMetadata;

  return (
    <Theme>
      <div>
        <Seo title={blogTitle} description={description} />
        <MainHeader location={location} />

        <main>
          <ContainerContent>
            Content soon will be here
            <ButtonLink to="/docs" title="Go see documents page" />
          </ContainerContent>
        </main>

        <Footer />
      </div>
    </Theme>
  );
};

BlogIndex.propTypes = {
  data: PropTypes.node,
  location: PropTypes.string,
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
