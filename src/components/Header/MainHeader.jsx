import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { fontSize } from 'styled-system';
import ContainerSection from '../ContainerSection';
import BgImage from '../BgImage';
import ContainerContent from '../ContainerContent';
import Flex from '../Flex';
import HeaderNav from './HeaderNav';
import Heading from '../TextStyles/Heading';
import ButtonLink from '../Button';


export const queryMainHeader = graphql`
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

const MainHeader = ({ location, theme }) => (
  <StaticQuery
    query={queryMainHeader}
    render={data => (
      <ContainerSection height={{ xs: '300px', md: '500px' }}>
        <BgImage
          height={{ xs: '300px', md: '500px' }}
          fluid={data.bgImage.childImageSharp.fluid}
          title="Kekker background cover"
          color="#141414"
        >
          <ContainerContent pt="0">
            <Flex flexDirection="column" height="100%">
              <HeaderNav location={location} />

              <Flex
                height="100%"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Heading
                  weight={800}
                  color="invertedText"
                  textAlign="center"
                  lineHeight="1.1em"
                  fontSize={{ xs: 'h1.sm', sm: 'h1.md', lg: 'h1.lg' }}
                >
                  A
                  {' '}
                  <span style={{ color: theme.colors.primaryBrand }}>
                    platform
                  </span>
                  {' '}
                  for building
                  {' '}
                  <br />
                  <span style={{ fontSize: '1.4em' }}>decetralized apps</span>
                </Heading>
                <ButtonLink
                  variant={'primary'}
                  to="/"
                  title="Get started"
                />
              </Flex>
            </Flex>
          </ContainerContent>
        </BgImage>
      </ContainerSection>
    )}
  />
);

MainHeader.propTypes = {
  location: PropTypes.string,
  theme: PropTypes.node,
};

export default withTheme(MainHeader);
