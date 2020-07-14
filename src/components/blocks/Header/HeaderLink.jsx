import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../fragments/TextStyles/Text';

const StyledHeaderLink = styled(Link)`
  display: block;
  margin-left: ${props => props.theme.fontSizes.extrasmall}px;
  
  color: ${props => props.theme.colors[props.color]};
  transition: 'color 0.2s ease-out';
  text-decoration: none;

  &:focus {
    outline: 0;
    color: ${props => props.theme.colors.primaryLight};
  }

  &:hover {
    color: ${props => props.theme.colors.primaryBrand};
  }
`;

const HeaderLink = ({ isActive, title, to }) => {
  const curr_color = isActive ? 'primaryBrand' : 'invertedText';
  return (
    <StyledHeaderLink title={title} color={curr_color} to={to}>
      <Text
        fontWeight={800}
        color="inherit"
        textTransform="uppercase"
        isHeadingFont
        fontSize="medium"
      >
        {title}
      </Text>
    </StyledHeaderLink>
  );
};

HeaderLink.propTypes = {
  isActive: PropTypes.bool,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

HeaderLink.defaultProps = {
  isActive: false,
};

export default HeaderLink;
