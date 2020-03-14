import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../TextStyles/Text';

const StyledFooterLink = styled(Link)`
  color: ${props => props.theme.colors.invertedText};
  display: block;
  transition: 'color 0.2s ease-out';
  width: max-content;

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
  <div>
    <StyledFooterLink title={title} to={to}>
      <Text isHeadingFont fontWeight={400} color="inherit" fontSize="small">
        {title}
      </Text>
    </StyledFooterLink>
  </div>
);

FooterLink.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default FooterLink;
