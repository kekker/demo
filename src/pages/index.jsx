import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

// Components
import Seo from '../components/SEO/Seo';
import { MainHeader } from '../components/Header';
import ContainerContent from '../components/ContainerContent';
import Footer from '../components/Footer';
import Theme from '../components/Theme';
import ButtonLink from '../components/Button';
import Flex from "../components/Flex";
import GridItem from "../components/GridItem";

// Content
const jsonContent = require('../../content/home');

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
            <Flex wrap={'wrap'} justify={'space-between'}>
              { jsonContent.benefits.map( item => (
                <GridItem cols={jsonContent.benefits.length}
                          header={item.header}
                          content={item.content}
                          link_to={item.link_to}
                />
              ))}
            </Flex>
            <Img fluid={data.demoImage.childImageSharp.fluid}
                 alt={'Demo preview'}
            />
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
    demoImage: file(absolutePath: { regex: "/Demo.png/" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
