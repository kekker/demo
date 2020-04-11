import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import ContainerSection from '../ContainerSection';
import BgImage from '../BgImage';
import ContainerContent from '../ContainerContent';
import Flex from '../Flex';
import HeaderNav from './HeaderNav';
import Heading from '../TextStyles/Heading';
import ButtonLink from '../Button';

const jsonContent = require('../../../content/home');

export const queryMainHeader = graphql`
  query {
    bgImage: file(absolutePath: { regex: "/kekker_mainpage_bg2.jpg/" }) {
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
        <>
            <ContainerSection
                width='100vw'
                height='10vh'
                bg='#000000'
                style={{position: 'fixed', top: '0', left: '0', zIndex: 1}}
            >
                <ContainerContent pt="0" pb="0">
                    <Flex width="100%" alignItems="center" height="100%">
                        <HeaderNav location={location} />
                    </Flex>
                </ContainerContent>
            </ContainerSection>
      <ContainerSection pt='10vh' height={{ xs: 'calc(10vh + 400px)', md: 'calc(10vh + 500px)' }}>
        <BgImage
          height={{ xs: '400px', md: '500px' }}
          fluid={data.bgImage.childImageSharp.fluid}
          title="Kekker background cover"
          color="#141414"
        >
          <ContainerContent pt="0">
            <Flex flexDirection="column" height="100%">
              <Flex
                height="100%"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Heading
                  fontWeight={300}
                  letterSpacing='-0.04em'
                  color="invertedText"
                  textAlign="center"
                  lineHeight="1.1em"
                  fontSize={{ xs: 'h1.sm', sm: 'h1.md', md: 'h1.lg', lg: 'h1.extralg' }}
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
                  <span style={{ fontSize: '1.4em', letterSpacing:'-0.04em', fontWeight: '600' }}>
                      decentralized apps
                  </span>
                </Heading>
                <ButtonLink
                    size="large"
                    fontSize='large'
                    to={jsonContent.getStartedButtonLink}
                    title="Get started"
                />
              </Flex>
            </Flex>
          </ContainerContent>
        </BgImage>
      </ContainerSection>
            </>
    )}
  />
);

MainHeader.propTypes = {
  location: PropTypes.string,
  theme: PropTypes.object,
};

export default withTheme(MainHeader);
