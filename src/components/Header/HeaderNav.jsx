import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeaderLink from './HeaderLink';
import ButtonLink from '../Button';
import Flex from '../Flex';

import navHeader from '../../../content/navHeader.yml';
import LogoLink from '../Logo';

const Nav = styled.nav`
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: flex-end;
  flex-grow: 1;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  height: 100%;
  margin-right: 1em;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar: {
    display: 'none';
  }
`;

const HeaderNav = ({ location }) => (
  <Flex
    height="10vh"
    width="100%"
    justifyContent="space-between"
    alignItems="center"
  >
    <LogoLink />

    <Nav>
      {navHeader.items.map(link => (
        <HeaderLink
          key={link.title}
          isActive={location.includes(link.activeSelector)}
          title={link.title}
          to={link.to}
        />
      ))}
    </Nav>
    <ButtonLink isPrimary to="/invitation" title="Sandbox Access" />
  </Flex>
);

export default HeaderNav;

HeaderNav.propTypes = {
  location: PropTypes.string.isRequired,
};
