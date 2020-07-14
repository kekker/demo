import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import ContainerSection from '../../fragments/ContainerSection';
import BgImage from '../../fragments/BgImage';
import ContainerContent from '../../fragments/ContainerContent';
import Flex from '../../fragments/Flex';
import HeaderNav from './HeaderNav';
import Heading from '../../fragments/TextStyles/Heading';
import ButtonLink from '../../fragments/Button';
import LogoLink from '../../fragments/Logo';

const jsonContent = require('../../../../content/home.json');

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

const LogoLinkWrapper = styled.div`
  display: block;
  margin-bottom: 20px;
  margin-top: -40px;
  
  @media (min-width: 700px) {
    display: none;
  }

`;


const MainHeader = ({ location, theme }) => (
  <StaticQuery
    query={queryMainHeader}
    render={data => (
      <>
        <ContainerSection
          width="100%"
          height={theme.layout.menuHeight}
          bg="#000000"
          style={{
            position: 'fixed', top: '0', left: '0', zIndex: 1
          }}
        >
          <ContainerContent pt="0" pb="0">
            <Flex width="100%" alignItems="center" height="100%">
              <HeaderNav location={location} />
            </Flex>
          </ContainerContent>
        </ContainerSection>

        <ContainerSection
          pt={theme.layout.menuHeight}
          height={{
            xs: `calc(${theme.layout.menuHeight} + ${theme.layout.indexHeaderSectionHeight.xs})`,
            md: `calc(${theme.layout.menuHeight} + ${theme.layout.indexHeaderSectionHeight.md})`
          }}
        >
          <BgImage
            height={{
              xs: `${theme.layout.indexHeaderSectionHeight.xs}`,
              md: `${theme.layout.indexHeaderSectionHeight.md}`
            }}
            fluid={data.bgImage.childImageSharp.fluid}
            title="Kekker background cover"
            color="#000000"
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
                    mb={3}
                    fontWeight={300}
                    letterSpacing="-0.04em"
                    color="invertedText"
                    textAlign="center"
                    lineHeight="1.1em"
                    fontSize={{
                      xs: 'h1.sm',
                      sm: 'h1.md',
                      md: 'h1.lg',
                    }}
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
                    <span
                      style={{
                        fontSize: '1.4em',
                        letterSpacing: '-0.04em',
                        fontWeight: '600',
                      }}
                    >
                      decentralized apps
                    </span>
                  </Heading>
                  <ButtonLink
                    size="large"
                    fontSize="medium_"
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