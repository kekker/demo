import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

/*
  Calculations:
  --------------
  Final Weight: if weight is specified, than weight value,
                if not, than choose default heading weight (is isHeading)
                or default body weight
   Final Size: if size is specified, than get a size value from size options from theme,
              else - get a default size
   Final Font: is heading, than get a string from heading fonts array,
                else - get a string of body fonts array
 */

const StyledText = styled.div.attrs(props => ({
  fontFamilyChoise: props.isHeadingFont ? props.theme.headerWeight
    : props.theme.bodyWeight,
  finalWeight: props.weight
    ? props.weight
    : props.fontFamilyChoise,
  finalSize: props.size
    ? props.theme.fontSizes[props.size]
    : props.theme.baseFontSize,
  finalFont: props.isHeadingFont
    ? `'${props.theme.headerFontFamily.join("', '")}'`
    : `'${props.theme.bodyFontFamily.join("', '")}'`,
}))`
  font-weight: ${({ finalWeight }) => finalWeight};
  font-size: ${({ finalSize }) => finalSize};
  font-family: ${({ finalFont }) => finalFont};

  color: ${({ color, theme }) => (color || theme.colors.primaryText)};

  text-transform: ${({ transform }) => transform};
  text-decoration: ${({ decoration }) => decoration};
`;

const Text = ({
  tag,
  isHeadingFont,
  size,
  color,
  weight,
  transform,
  decoration,
  children,
}) => (
  <StyledText
    as={tag}
    isHeadingFont={isHeadingFont}
    size={size}
    color={color}
    weight={weight}
    transform={transform}
    decoration={decoration}
  >
    {children}
  </StyledText>
);

Text.propTypes = {
  isHeadingFont: PropTypes.bool,
  tag: PropTypes.oneOf(['span', 'div']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
  weight: PropTypes.number,
  transform: PropTypes.string,
  decoration: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  isHeadingFont: false,
  tag: 'span',
  transform: 'none',
  decoration: 'none',
};

export default Text;
