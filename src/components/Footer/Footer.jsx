import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

import ContainerSection from '../ContainerSection';
import ContainerContent from '../ContainerContent';
import Flex from '../Flex';

import footerNav from '../../../content/footerNav.yml';
import FooterLink from './FooterLink';
import Text from '../TextStyles/Text';
import LogoLink from '../Logo';

const StyledSocialLink = styled.nav`
  text-decoration: none;
  color: ${props => props.theme.colors.invertedText};
  font-weight: 400;

  &:after {
    content: '/';
    padding-left: 0.6em;
    padding-right: 0.6em;
    font-size: ${props => props.theme.fontSizes.small}px;
    color: grey;
  }

  &:last-child:after {
    content: '';
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  margin-top: 50px;
  margin-bottom: 30px;
`;

const Footer = () => {
  const footerFontSize = 'medium';
  return (
    <ContainerSection bg="primaryDark" height="100%">
      <ContainerContent>
        <Flex flexDirection="column" height="100%">
          <Flex
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
          >
            <LogoLink />
          </Flex>
          <Grid>
            {footerNav.items.map(linkSection => (
              <FooterLink
                key={`footerSection${linkSection.header}`}
                footerColumn={linkSection}
                count={footerNav.items.length}
                fontSize={footerFontSize}
              />
            ))}
          </Grid>
          <Flex mb={4}>
            {footerNav.social.map(socialLink => (
              <StyledSocialLink
                to={socialLink.to}
                title={socialLink.title}
                key={`social${socialLink.title}`}
              >
                <Text fontSize={footerFontSize} color="inherit">
                  {socialLink.title}
                </Text>
              </StyledSocialLink>
            ))}
          </Flex>
        </Flex>
        <Text fontSize={footerFontSize} color="grey">
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
};

Footer.propTypes = {
  theme: PropTypes.node,
};

export default Footer;
