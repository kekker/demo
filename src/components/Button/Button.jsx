import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../TextStyles/Text';

const StyledButton = styled.button`

  color: ${props => props.theme.colors.primaryText};
  padding: ${props => props.theme.button.size[props.size]};

   ${({ disabled, theme }) => (disabled ?
    (` border: 2px solid ${theme.button.disabledBgColor};
       background: ${theme.button.disabledBgColor};
       color: ${theme.button.disabledFontColor};
       cursor: default;
       `) :
    (` border: 2px solid ${theme.colors.primaryBrand};
       background: ${theme.colors.primaryBrand};
       `))};
       
  border-radius: 2em;
`;

const Button = ({
                    title, disabled, onClick, size, type
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
        </StyledButton>
);

Button.propTypes = {
    title: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.string
};

Button.defaultProps = {
    disabled: true,
    size: 'small',
};

export default Button;
