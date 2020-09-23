import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Text from '../TextStyles/Text';

const StyledButton = styled.button`
  color: ${props => props.theme.colors.primaryText};
  padding: ${props => props.theme.button.size[props.size]};
  transition: background 0.1s;
  
  border: 2px solid ${({ theme }) => theme.colors.primaryLight};
  background: ${({ theme }) => theme.colors.primaryLight};
  
  display: flex;
  align-items: center;
       
  &:hover {
   border: 2px solid ${({ theme }) => theme.colors.primaryBrand};
   background: ${({ theme }) => theme.colors.primaryBrand};
  }

  ${({ isPrimary, theme: { colors, button } }) => (
    isPrimary && (
      `border: 2px solid ${colors.primaryBrand};
       background: ${colors.primaryBrand};
       
       &:hover {
         border: 2px solid ${button.disabledBgColor};
         background: ${button.disabledBgColor};
       }`
    )
  )};
  
  ${({ isBlack, theme: { colors, button } }) => (
    isBlack && (
      `border: 2px solid ${colors.primaryDark};
       background: ${colors.primaryDark};
       color: ${colors.primaryBrand};
       
       &:hover {
         color: ${colors.primaryDark};
         border: 2px solid ${button.disabledBgColor};
         background: ${button.disabledBgColor};
       }`
    )
  )};

  border-radius: 2em;
  
  @media (max-width: 480px) {
    padding: ${({ isShrinking }) => (isShrinking ? '0 0.5em;' : '0.15em 0.5em')}
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  height: ${props => props.theme.button.iconSize[props.iconSize]} !important;
  width: ${props => props.theme.button.iconSize[props.iconSize]} !important;
  
  vertical-align: middle;
  margin: 0 10px 0 0;
`;

const ButtonLink = ({
  size, iconSize, fontSize, title, isPrimary, isShrinking, isUppercase, isBlack, to, icon, wrapperStyles,
}) => (
  <Link to={to} style={{ flexShrink: 0, textDecoration: 'none', ...wrapperStyles }}>
    <StyledButton
      size={size}
      isShrinking={isShrinking}
      isPrimary={isPrimary}
      isBlack={isBlack}
      type="button"
    >
      {icon
      && (
        <StyledIcon iconSize={iconSize} icon={icon} />
      )}
      <Text
        fontSize={{ _: '14px', sm: fontSize }}
        fontWeight={isUppercase ? 'bold' : '900'}
        textTransform={isUppercase ? 'uppercase' : 'unset'}
      >
        {title}
      </Text>
    </StyledButton>
  </Link>
);

ButtonLink.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extralarge']),
  iconSize: PropTypes.oneOf(['small', 'medium', 'large', 'extralarge']),
  fontSize: PropTypes.string,
  title: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  isUppercase: PropTypes.bool,
  isShrinking: PropTypes.bool,
  isBlack: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

ButtonLink.defaultProps = {
  isPrimary: false,
  isShrinking: false,
  isBlack: false,
  isUppercase: true,
  size: 'medium',
  iconSize: 'medium',
  fontSize: 'medium',
};

export default ButtonLink;
