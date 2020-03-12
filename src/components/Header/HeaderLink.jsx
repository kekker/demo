import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../TextStyles/Text';

const StyledHeaderLink = styled(Link).attrs(props => ({
  curr_color: props.isActive
    ? props.theme.colors.primaryBrand
    : props.theme.colors.invertedText,
}))`
  color: ${props => props.curr_color};
  display: block;
  transition: 'color 0.2s ease-out';
  margin-left: ${props => props.theme.fontSizes.small};

  text-decoration: none;

  &:focus {
    outline: 0;
    color: ${props => props.theme.colors.primaryLight};
  }

  &:hover {
    color: ${props => props.theme.colors.primaryBrand};
  }
`;

const HeaderLink = ({ isActive, title, to }) => (
  <StyledHeaderLink title={title} isActive={isActive} to={to}>
    <Text
      weight={800}
      color="inherit"
      transform="uppercase"
      isHeadingFont
      size="small"
    >
      {title}
    </Text>
  </StyledHeaderLink>
);

HeaderLink.propTypes = {
  isActive: PropTypes.bool,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

HeaderLink.defaultProps = {
  isActive: false,
};

export default HeaderLink;
