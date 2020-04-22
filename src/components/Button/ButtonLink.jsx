import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../TextStyles/Text';

const StyledButton = styled.button`
  color: ${props => props.theme.colors.primaryText};
  padding: ${props => props.theme.button.size[props.size]};

  ${({ isPrimary, theme: { colors } }) => (isPrimary
    ? ` border: 2px solid ${colors.primaryBrand};
       background: ${colors.primaryBrand};`
    : ` border: 2px solid ${colors.primaryLight};
       background: ${colors.primaryLight};`)};

  font-size: ${props => props.theme.fontSizes[props.size]};
  border-radius: 2em;
  
  @media (max-width: 480px) {
    padding: 0.05em 0.3em;
  }
`;

const ButtonLink = ({
  size, fontSize, title, isPrimary, to
}) => (
  <Link to={to} style={{ flexShrink: 0}}>
    <StyledButton size={size} isPrimary={isPrimary} type="button">
      <Text
        fontSize={fontSize}
        fontWeight="900"
        isHeadingFont
        textTransform="uppercase"
      >
        {title}
      </Text>
    </StyledButton>
  </Link>
);

ButtonLink.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extralarge']),
  title: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

ButtonLink.defaultProps = {
  isPrimary: false,
  size: 'medium',
  fontSize: 'medium',
};

export default ButtonLink;
