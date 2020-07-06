import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';

import ContainerSection from '../ContainerSection';
import ContainerContent from '../ContainerContent';
import Flex from '../Flex';

import footerNav from '../../../content/footerNav.yml';
import FooterLink from './FooterLink';
import Text from '../TextStyles/Text';

const StyledSocialLink = styled.a`
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
  
  &:hover {
    color: ${props => props.theme.colors.primaryBrand};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  margin-bottom: 30px;
`;

const Footer = () => {
  const footerFontSize = 'medium';
  return (
    <ContainerSection bg="primaryDark" height="100%">
      <ContainerContent pb={{ _: 4, sm: 6 }}>
        <Flex flexDirection="column" height="100%">
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
                href={socialLink.to}
                title={socialLink.title}
                target="_blank"
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
