import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledHeading = styled.div`
  font-weight: ${({ weight, theme }) => weight || theme.headerWeight};
  ${({ size }) => (size ? `font-size: ${size}` : '')};
  color: ${({ color, theme }) => color || theme.colors.primaryText};
  ${({ align }) => (align ? `text-align: ${align}` : '')};
  ${({ lineh }) => (lineh ? `line-height: ${lineh}` : '')};
`;

const Heading = ({
  level, size, color, weight, align, lineh, children
}) => (
  <StyledHeading
    as={`h${level}`}
    size={size}
    color={color}
    weight={weight}
    align={align}
    lineh={lineh}
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
};

Heading.defaultProps = {
  level: 1,
};

export default Heading;
