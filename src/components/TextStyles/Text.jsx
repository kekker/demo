import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { space, color, typography } from 'styled-system';

const StyledText = styled.div.attrs(props => ({
  finalFont: props.isHeadingFont
    ? `'${props.theme.headerFontFamily.join("', '")}'`
    : `'${props.theme.bodyFontFamily.join("', '")}'`,
}))`
  ${space};
  ${typography};
  ${color};

  font-family: ${({ finalFont }) => finalFont};
  text-transform: ${({ textTransform }) => textTransform};
  text-decoration: ${({ textDecoration }) => textDecoration};
`;

const Text = ({
  tag, isHeadingFont, children, ...props
}) => (
  <StyledText as={tag} isHeadingFont={isHeadingFont} {...props}>
    {children}
  </StyledText>
);

Text.propTypes = {
  isHeadingFont: PropTypes.bool,
  tag: PropTypes.oneOf(['span', 'div']),
  children: PropTypes.node,
};

Text.defaultProps = {
  isHeadingFont: false,
  tag: 'span'
};

export default Text;
