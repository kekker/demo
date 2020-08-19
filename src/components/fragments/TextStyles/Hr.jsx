import React from 'react';
import styled from 'styled-components';
import {
  space, color, layout
} from 'styled-system';

const Hr = styled.div`
  ${space};
  ${layout};
  ${color};
  
  width: 100%;
  background: ${({ theme }) => theme.colors.bodyLightGrey};
  
  ${color};
`;

Hr.defaultProps = {
  height: 2,
};

export default Hr;
