import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import React from 'react';

import ContainerSection from '../ContainerSection';
import ContainerContent from '../ContainerContent';
import Flex from '../Flex';

import footerNav from '../../../content/footerNav.yml';
import FooterLink from './FooterLink';
import Text from '../TextStyles/Text';
import LogoLink from '../Logo';

const Nav = styled.nav`
  max-width: 500px;
  flex: 1 0 70%;
  margin-bottom: 1em;
`;

const StyledSocialLink = styled.nav`
  text-decoration: none;
  color: ${props => props.theme.colors.invertedText};
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
          <Flex direction="column">
            <StyledSocialLink to="/" title="Facebook">
              <Text tag="div" size="small" color="inherit">
                Facebook
              </Text>
            </StyledSocialLink>
            <StyledSocialLink
              to="https://www.linkedin.com/company/kekker"
              title="LinkedIn"
            >
              <Text tag="div" size="small" color="inherit">
                LinkedIn
              </Text>
            </StyledSocialLink>
            <StyledSocialLink to="/" title="Instagram">
              <Text tag="div" size="small" color="inherit">
                Instagram
              </Text>
            </StyledSocialLink>
            {/* <IconLink type="Facebook" color={theme.colors.invertedText} /> */}
            {/* <IconLink */}
            {/*  link_to="https://www.linkedin.com/company/kekker" */}
            {/*  type="Linkedin" */}
            {/*  color={theme.colors.invertedText} */}
            {/* /> */}
            {/* <IconLink type="Instagram" color={theme.colors.invertedText} /> */}
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
