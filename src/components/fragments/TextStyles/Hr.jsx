import React from 'react';
import styled from 'styled-components';

const Hr = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.bodyLightGrey};
`;

export default Hr;
