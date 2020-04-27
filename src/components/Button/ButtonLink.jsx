import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../TextStyles/Text';

const StyledButton = styled.button`
  color: ${props => props.theme.colors.primaryText};
  padding: ${props => props.theme.button.size[props.size]};
  transition: background 0.1s;

  ${({ isPrimary, theme: { colors, button } }) => (isPrimary
    ? `border: 2px solid ${colors.primaryBrand};
       background: ${colors.primaryBrand};
       
       &:hover {
         border: 2px solid ${button.disabledBgColor};
         background: ${button.disabledBgColor};
       }`
        
    : `border: 2px solid ${colors.primaryLight};
       background: ${colors.primaryLight};
       
       &:hover {
         border: 2px solid ${colors.primaryBrand};
         background: ${colors.primaryBrand};
       }`
  )};

  border-radius: 2em;
  
  @media (max-width: 480px) {
    padding: ${({ isShrinking }) => isShrinking ? '0 0.5em;' : '0.15em 0.5em'}
  }
`;

const ButtonLink = ({
  size, fontSize, title, isPrimary, isShrinking, to
}) => (
  <Link to={to} style={{ flexShrink: 0}}>
    <StyledButton
        size={size}
        isShrinking={isShrinking}
        isPrimary={isPrimary}
        type="button"
    >
      <Text
        fontSize={{_: '14px', sm: fontSize}}
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
  isShrinking: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

ButtonLink.defaultProps = {
  isPrimary: false,
  isShrinking: false,
  size: 'medium',
  fontSize: 'medium',
};

export default ButtonLink;
