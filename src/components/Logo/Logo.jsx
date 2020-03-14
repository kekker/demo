import Img from 'gatsby-image';
import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import Flex from '../Flex';

const StyledLogoLink = styled(Link)`
  max-width: 205px;
  min-width: 100px;
  width: 100%;
  display: block;
`;

export const queryLogo = graphql`
  query {
    logoImage: file(absolutePath: { regex: "/kekker_logo.png/" }) {
      childImageSharp {
        fluid(maxWidth: 205) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const LogoLink = () => (
  <StaticQuery
    query={queryLogo}
    render={data => (
      <Flex flexBasis="20%">
        <StyledLogoLink to="/">
          <Img fluid={data.logoImage.childImageSharp.fluid} alt="Kekker logo" />
        </StyledLogoLink>
      </Flex>
    )}
  />
);

export default LogoLink;
