import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

// Components
import Flex from '../Flex';
import ContainerSection from '../ContainerSection';
import BgImage from '../BgImage';
import ContainerContent from '../ContainerContent';
import HeaderNav from './HeaderNav';

export const queryShortHeader = graphql`
  query {
    bgImage: file(absolutePath: { regex: "/kekker_bg.png/" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const ShortHeader = ({ location }) => (
  <StaticQuery
    query={queryShortHeader}
    render={data => (
      <ContainerSection>
        <BgImage
          height="12vh"
          fluid={data.bgImage.childImageSharp.fluid}
          title="Kekker background cover"
          color="#141414"
        >
          <ContainerContent pt="0" pb="0">
            <Flex width="100%" alignItems="center" height="100%">
              <HeaderNav location={location} />
            </Flex>
          </ContainerContent>
        </BgImage>
      </ContainerSection>
    )}
  />
);

ShortHeader.propTypes = {
  location: PropTypes.string.isRequired,
};

export default withTheme(ShortHeader);
