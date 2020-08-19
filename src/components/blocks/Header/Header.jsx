import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

// Components
import Flex from '../../fragments/Flex';
import ContainerSection from '../../fragments/ContainerSection';
import BgImage from '../../fragments/BgImage';
import ContainerContent from '../../fragments/ContainerContent';
import HeaderNav from './HeaderNav';

export const queryShortHeader = graphql`
  query {
    bgImage: file(absolutePath: { regex: "/kekker_mainpage_bg2.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1600, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const ShortHeader = ({ location, theme }) => (
  <StaticQuery
    query={queryShortHeader}
    render={data => (
      <ContainerSection
        width="100%"
        height={theme.layout.menuHeight}
        style={{
          position: 'fixed', top: '0', left: '0', zIndex: 2
        }}
      >
        <BgImage
          height={theme.layout.menuHeight}
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
