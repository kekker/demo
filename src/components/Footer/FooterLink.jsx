import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text/Text';

const StyledFooterLink = styled(Link)`
  color: ${props => props.theme.colors.invertedText};
  display: block;
  transition: 'color 0.2s ease-out';

  text-decoration: none;
  line-height: 1em;

  &:focus {
    outline: 0;
    color: ${props => props.theme.colors.primaryBrand};
  }

  &:hover {
    color: ${props => props.theme.colors.primaryBrand};
  }
`;

const FooterLink = ({ title, to }) => (
  <StyledFooterLink title={title} to={to}>
    <Text isHeadingFont weight={400} color="inherit" size="small">
      {title}
    </Text>
  </StyledFooterLink>
);

FooterLink.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default FooterLink;
