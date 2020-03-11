import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import React from 'react';

import ContainerSection from '../ContainerSection';
import ContainerContent from '../ContainerContent';
import Flex from '../Flex';

import footerNav from '../../../content/footerNav.yml';
import FooterLink from './FooterLink';
import Text from '../Text/Text';
import LogoLink from '../Logo';
import IconLink from '../Icons';

const Nav = styled.nav`
  max-width: 500px;
  flex: 1 0 70%;
  margin-bottom: 1em;
`;

const Footer = ({ theme }) => (
  <ContainerSection bgColor={theme.colors.primaryDark} height="100%">
    <ContainerContent ptop="4em" pbottom="5em">
      <Flex direction="column" height="100%">
        <Flex wrap="wrap" justify="space-between" align="center">
          <LogoLink />
        </Flex>
        <Flex margin="2.2em 0" justify="space-between" wrap="wrap">
          <Nav>
            {footerNav.items.map(link => (
              <FooterLink key={link.title} title={link.title} to={link.to} />
            ))}
          </Nav>
          <Flex>
            <IconLink type="Facebook" color={theme.colors.invertedText} />
            <IconLink type="Linkedin" color={theme.colors.invertedText} />
            <IconLink type="Instagram" color={theme.colors.invertedText} />
          </Flex>
        </Flex>
      </Flex>
      <Text size="extrasmall" color={theme.colors.invertedText}>
        Copyright ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        Kekker
        {' '}
      </Text>
    </ContainerContent>
  </ContainerSection>
);

Footer.propTypes = {
  theme: PropTypes.node,
};

export default withTheme(Footer);
