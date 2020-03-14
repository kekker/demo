import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  space,
  layout,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  flexGrow,
  flexShrink,
  justifyContent,
  alignItems,
  alignSelf,
  alignContent,
} from 'styled-system';

const Flex = styled.div`
  display: flex;
  ${space};
  ${layout};

  ${flex};
  ${flexBasis};
  ${flexDirection};
  ${flexWrap};
  ${flexGrow};
  ${flexShrink};
  ${justifyContent};
  ${alignItems};
  ${alignSelf};
  ${alignContent};
`;

export default Flex;
