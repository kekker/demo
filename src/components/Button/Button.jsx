import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../TextStyles/Text';

const StyledButton = styled.button`
  color: ${props => props.theme.colors.primaryText};
  padding: ${props => props.theme.button.size[props.size]};

  ${({ disabled, theme }) => (disabled
    ? `border: 2px solid ${theme.button.disabledBgColor};
       background: ${theme.button.disabledBgColor};
       color: ${theme.button.disabledFontColor};
       cursor: default;
       `
    : `border: 2px solid ${theme.colors.primaryBrand};
       background: ${theme.colors.primaryBrand};
       &:hover {
         border: 2px solid ${theme.button.disabledBgColor};
         background: ${theme.button.disabledBgColor};
       }
       `
  )};
  
  transition: background 0.1s;
  border-radius: 2em;
`;

const StyledIcon = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
`;

const Button = ({
  title, disabled, onClick, size, type, icon
}) => (
  <StyledButton size={size} type={type} onClick={onClick} disabled={disabled}>
    <Text
      fontSize={size}
      fontWeight="800"
      isHeadingFont
      textTransform="uppercase"
    >
      {title}
    </Text>
    {icon
    && (
    <StyledIcon>
      {icon}
    </StyledIcon>
    )}
  </StyledButton>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  disabled: true,
  size: 'small',
};

export default Button;
