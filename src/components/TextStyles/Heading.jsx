import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledHeading = styled.div.attrs(props => ({
  finalSize: props.size
    ? props.theme.fontSizes[props.size]
    : props.theme.baseFontSize,
}))`
  font-weight: ${({ weight, theme }) => weight || theme.headerWeight};
  ${({ size, finalSize }) => (size ? `font-size: ${finalSize}` : '')};
  color: ${({ color, theme }) => color || theme.colors.primaryText};
  ${({ align }) => (align ? `text-align: ${align}` : '')};
  ${({ lineh }) => (lineh ? `line-height: ${lineh}` : '')};

  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-top: ${({ marginTop }) => marginTop};

  @media screen and (max-width: 1200px) {
    ${({ size }) => (size === 'h1' ? 'font-size: 40px' : '')};
  }
`;

const Heading = ({
  level,
  size,
  color,
  weight,
  align,
  lineh,
  children,
  marginBottom,
  marginTop,
}) => (
  <StyledHeading
    as={`h${level}`}
    size={size}
    color={color}
    weight={weight}
    align={align}
    lineh={lineh}
    marginBottom={marginBottom}
    marginTop={marginTop}
  >
    {children}
  </StyledHeading>
);

Heading.propTypes = {
  level: PropTypes.number,
  size: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.number,
  align: PropTypes.string,
  lineh: PropTypes.string,
  children: PropTypes.node,
  marginBottom: PropTypes.string,
  marginTop: PropTypes.string,
};

Heading.defaultProps = {
  level: 1,
  marginBottom: '0.5em',
};

export default Heading;
