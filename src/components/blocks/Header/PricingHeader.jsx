import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import ContainerSection from '../../fragments/ContainerSection';
import BgImage from '../../fragments/BgImage';
import ContainerContent from '../../fragments/ContainerContent';
import Flex from '../../fragments/Flex';
import HeaderNav from './HeaderNav';
import Heading from '../../fragments/TextStyles/Heading';


export const queryPricingHeader = graphql`
    query {
        bgImage: file(absolutePath: { regex: "/kekker_bg_pricing.png/" }) {
            childImageSharp {
                fluid(maxWidth: 1600, maxHeight: 400) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;


const PricingHeader = ({ location, theme }) => (
  <StaticQuery
    query={queryPricingHeader}
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
            _: '200px',
            xs: `calc(${theme.layout.menuHeight} + 365px)`,
            md: `calc(${theme.layout.menuHeight} + 365px)`
          }}
        >
          <BgImage
            height={{
              _: 200,
              xs: 365,
              md: 365
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
                    Start with the
                    {' '}
                    <span
                      style={{
                        fontWeight: '800',
                      }}
                    >
                      free plan
                    </span>
                    {' '}
                    and&nbsp;upgrade
                    <br />
                    for unlimited usage
                  </Heading>

                </Flex>
              </Flex>
            </ContainerContent>
          </BgImage>
        </ContainerSection>
      </>
    )}
  />
);

PricingHeader.propTypes = {
  location: PropTypes.string,
  theme: PropTypes.object,
};

export default withTheme(PricingHeader);
