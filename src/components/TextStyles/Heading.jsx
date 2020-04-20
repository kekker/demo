import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { space, typography, color } from 'styled-system';

const StyledHeading = styled.div`
  ${space};
  ${typography};
  ${color};
  text-transform: ${({ textTransform }) => textTransform};
`;

const Heading = ({ level, children, ...props }) => (
  <StyledHeading as={`h${level}`} {...props}>
    {children}
  </StyledHeading>
);

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
};

Heading.defaultProps = {
  mt: 0,
  level: 1,
  fontWeight: 'headerWeight',
  letterSpacing: '-0.02em',
};

export default Heading;
