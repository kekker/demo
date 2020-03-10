import Img from 'gatsby-image';

import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeaderLink from './HeaderLink';
import ButtonLink from '../Button';
import Flex from '../Flex';

import navHeader from '../../../content/navHeader.yml';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-grow: 2;
  justify-content: flex-end;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  height: 100%;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar: {
    display: 'none';
  }
`;

const LogoLink = styled(Link)`
  max-width: 205px;
  min-width: 100px;
  display: block;
  flex-grow: 0.5;
`;

export const queryHeaderNav = graphql`
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

const HeaderNav = ({ location }) => (
  <StaticQuery
    query={queryHeaderNav}
    render={data => (
      <Flex justify="space-between" align="center">
        <LogoLink to="/">
          <Img
            fluid={data.logoImage.childImageSharp.fluid}
            alt="Kekker logo"
          />
        </LogoLink>
        <Nav>
          {navHeader.items.map(link => (
            <HeaderLink
              key={link.title}
              isActive={location.pathname.includes(link.activeSelector)}
              title={link.title}
              to={link.to}
            />
          ))}
          <ButtonLink to="#" title="Get an invitation" />
        </Nav>
      </Flex>
    )}
  />
);

export default HeaderNav;

HeaderNav.propTypes = {
  location: PropTypes.string.isRequired
};
